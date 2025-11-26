"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function generateLetter(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorised");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  const prompt = `
  Write a professional cover letter for a ${data.jobTitle} position at ${
    data.companyName
  }.
  
  About the candidate:
  - Industry: ${user.industry}
  - Years of Experience: ${user.experience}
  - Skills: ${user.skills?.join(", ")}
  - Professional Background: ${user.bio}
  
  Job Description:
  ${data.jobDescription}
  
  Requirements:
  1.Maintain a professional yet enthusiastic tone to engage the employer.
  2.Highlight industry-relevant skills and experience in bold for better visibility.
  3.Show understanding of the company needs and how the candidate aligns with them.
  4.Keep it concise (maximum 150 words) while making a strong impact.
  5.Use proper business letter formatting in Markdown, ensuring clarity and readability.
  6.Include specific achievements in past projects, showcasing the candidate capabilities.
  7.Relate the candidate background to job requirements, demonstrating relevance.
  8.Use bullet points to structure key skills and projects, making the content skimmable.
  
  Format the letter in markdown.
`;

  try {
    const result = await model.generateContent(prompt);
    const content = result.response.text().trim();

    const coverLetter = await db.coverLetter.create({
      data: {
        content: content,
        jobDescription: data.jobDescription,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        status: "completed",
        userId: user.id,
      },
    });

    return coverLetter;
  } catch (error) {
    console.error("Error generating cover letter:", error.message);
    throw new Error("Failed to generate cover letter");
  }
}

export async function getAllCoverLetters() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorised");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    return await db.coverLetter.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching cover letters:", error.message);
    throw new Error("Failed to fetch cover letters");
  }
}

export async function getCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    return await db.coverLetter.findUnique({
      where: {
        id: id,
        userId: user.id,
      },
    });
  } catch (error) {
    console.error("Error fetching cover letter:", error.message);
    throw new Error("Failed to fetch cover letter");
  }
}

export async function deleteCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    return await db.coverLetter.delete({
      where: {
        id: id,
        userId: user.id,
      },
    });
  } catch (error) {
    console.error("Error deleting cover letter:", error.message);
    throw new Error("Failed to delete cover letter");
  }
}
