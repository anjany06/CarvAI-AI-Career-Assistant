import { getUserOnboardingStatus } from "@/actions/user";
import { Loader, LoaderPinwheel } from "lucide-react";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const Layout = async ({ children }) => {
  // if user is not onboarded Redirect to OnBoarding..
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div className="px-3 md:px-5">
      <Suspense
        fallback={
          <div className="loader-container">
            <Loader className="h-12 w-12 animate-spin" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
