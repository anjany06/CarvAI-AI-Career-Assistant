import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import CoverLetterList from "./_components/cover-letter-list";

const CoverLetter = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-5">
        <h className="text-4xl md:text-6xl font-bold gradient-title">
          My Cover Letters
        </h>
        <Link href="/ai-cover-letter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>
      {/* <CoverLetterList coverLetters={coverLetters} /> */}
    </div>
  );
};

export default CoverLetter;
