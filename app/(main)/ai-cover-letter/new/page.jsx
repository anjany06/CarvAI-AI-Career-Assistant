import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import CoverLetterGenerator from "../_components/cover-letter-generator";

const NewCoverLetter = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="p-4">
          <h2 className="text-4xl md:text-6xl font-bold gradient-title">
            Create Cover Letter
          </h2>
          <p className="text-muted-foreground">
            Generate a tailored letter for your job application
          </p>
        </div>
      </div>
      <CoverLetterGenerator />
    </div>
  );
};

export default NewCoverLetter;
