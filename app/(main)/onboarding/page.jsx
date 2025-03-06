import React from "react";
import OnBoardingForm from "./_components/onboarding-form";
import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnBoarding = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    // so now why sep component as we can not use client in this as this is server
    // comp as we making api call to server to check is user onboarded as why a sep comp
    <main>
      <OnBoardingForm industry={industries} />
    </main>
  );
};

export default OnBoarding;
