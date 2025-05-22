
import React from 'react';
import { CircleDotDashed } from "lucide-react";

interface CaseStudyCardProps {
  name: string;
  challenge: string;
  solution: string;
  result: string;
  color: string;
}

const CaseStudyCard = ({ name, challenge, solution, result, color }: CaseStudyCardProps) => {
  return (
    <div className="yeet-card overflow-hidden">
      <div className={`h-2 ${color} w-full`}></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <CircleDotDashed className="h-5 w-5 text-ydd-purple" />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Challenge:</h4>
            <p>{challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Solution:</h4>
            <p>{solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground">Result:</h4>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
