import { getResume } from "@/actions/resume";
import React from "react";
import ResumeBuilder from "./_components/resume-builder";

const ResumePage = async () => {
  const resume = await getResume();
  return (
    <div className="container mx-auto p-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
};

export default ResumePage;
