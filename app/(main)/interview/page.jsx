import { getAssessments } from "@/actions/interview";
import React from "react";
import StatsCards from "./_components/stats-card";
import PerformanceChart from "./_components/performance-charts";
import QuizList from "./_components/quiz-list";

const Interview = async () => {
  const assessments = await getAssessments();
  return (
    <div>
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Interview Preparation
      </h1>

      <div>
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
};

export default Interview;
