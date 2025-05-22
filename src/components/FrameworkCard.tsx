
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FrameworkCardProps {
  title: string;
  description: string;
  steps: string[];
  index: number;
  slug: string;
}

const FrameworkCard = ({ title, description, steps, index, slug }: FrameworkCardProps) => {
  return (
    <Card className="yeet-card flex flex-col">
      <div className="h-2 bg-purple-orange-gradient w-full"></div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Star className="h-6 w-6 text-ydd-orange" />
          <span className="text-sm text-muted-foreground">Framework {index + 1}</span>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ol className="list-decimal pl-5 space-y-2">
          {steps.map((step, stepIndex) => (
            <li key={stepIndex} className="text-sm">{step}</li>
          ))}
        </ol>
        <div className="mt-6">
          <Link to={`/frameworks/${slug}`}>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrameworkCard;
