import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "../prisma";
import { inngest } from "./client";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // this cron ensures that this function runs every week on sunday at midnight
  // there are some steps

  //1st step
  async ({ step }) => {
    const industries = await step.run("Fetching Industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      const prompt = `
      Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
      {
        "salaryRanges": [
          { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
        ],
      
        "growthRate": number,
        "demandLevel": "HIGH" | "MEDIUM" | "LOW",
        "topSkills": ["skill1", "skill2"],
        "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
        "keyTrends": ["trend1", "trend2"],
        "recommededSkills": ["skill1", "skill2"]
      }
      
      IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
      Include at least 5 common roles for salary ranges.
      should return Growth rate which should be a percentage e.g.(10%).
      Include at least 5 skills and trends.
    `;
      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          return await model.generateContent(p);
        },
        prompt
      );

      // extracting only text form res
      const text = res.response.candidates[0].content.parts[0].text || "";
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
      const insights = JSON.parse(cleanedText);

      //now updating the db
      await step.run(`Upadte ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);
