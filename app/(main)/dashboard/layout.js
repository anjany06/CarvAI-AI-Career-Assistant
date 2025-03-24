import { getUserOnboardingStatus } from "@/actions/user";
import { Loader, LoaderPinwheel } from "lucide-react";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { BarLoader, HashLoader } from "react-spinners";

const Layout = async ({ children }) => {
  // if user is not onboarded Redirect to OnBoarding..
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div className="px-3 md:px-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense
        fallback={
          <div className="loader-container">
            <Loader className="mt-10 animate-spin h-12 w-12" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
