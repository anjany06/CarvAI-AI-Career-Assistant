import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashbaordView from "./_components/dashboard-view";

const IndustryInsights = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashbaordView insights={insights} />
    </div>
  );
};

export default IndustryInsights;
