"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorised");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    //things we have to do 3 api calls here
    //find if the industry exists
    //if industry doesn't exist, create it with d efault values - will replace it with ai later
    //update the user

    //what this transaction -> so we have to make 3 api calls so transaction ensures that all 3 are executed if one of 3 fails,
    // the transaction also fails and give us the err
    const result = await db.$transaction(
      async (tx) => {
        //find if the industry exists
        let industryInsights = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        //if industry doesn't exist, create it with default values - will replace it with ai later
        if (!industryInsights) {
          industryInsights = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], //default empty array
              growthRate: 0, //Default value
              demandLevel: "MEDIUM", //Default value
              topSkills: [], // Default empty array
              marketOutlook: "NEUTRAL", //Default value
              keyTrends: [], //default empty array
              recommededSkills: [], //Default empty array
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //1 week from now
            },
          });
        }

        //update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsights };
      },
      {
        timeout: 10000,
      }
    );

    return { success: true, ...result };
  } catch (error) {
    console.log("Error updating user and industry :", error.message);
    throw new Error("Failed to update profile" + error.message);
  }
}

//fetching user onBoarding Status
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorised");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.log("Error checking onboarded status : ", error.message);
    throw new Error("Failed to check onboarded status");
  }
}
