import React from "react";
import OnBoardingForm from "./_components/onboarding-form";
import { industries } from "@/data/industries";

const OnBoarding = () => {
  // Check if user is already onboarded

  return (
    // so now why sep component as we can not use client in this as this is server
    // comp as we making api call to server to check is user onboarded as why a sep comp
    <main>
      <OnBoardingForm industry={industries} />
    </main>
  );
};

export default OnBoarding;
