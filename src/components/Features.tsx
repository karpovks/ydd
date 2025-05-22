
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Test Driven Generation",
      description: "Leverage AI's ability to quickly generate code that meets test requirements, speeding up development while improving code quality.",
      icon: "🧪",
      color: "bg-blue-purple-gradient"
    },
    {
      title: "Hallucination Management",
      description: "User-centered design principles with a flair for the dramatic and visually stunning.",
      icon: "🎨",
      color: "bg-purple-orange-gradient"
    },
    {
      title: "Vibe Coding",
      description: "Your code should pass tests, but also pass the vibe check. Good vibes = good code.",
      icon: "✨",
      color: "bg-gradient-to-br from-ydd-blue to-ydd-purple"
    },
    {
      title: "AI Augmentation",
      description: "Let AI handle the boring stuff while you focus on the creative, high-impact work.",
      icon: "🤖",
      color: "bg-gradient-to-br from-ydd-purple to-ydd-orange"
    },
    {
      title: "Agent Management",
      description: "No need to iterate when you can delegate. Your AI workforce never sleeps or complains about the coffee.",
      icon: "🔄",
      color: "bg-gradient-to-br from-ydd-orange to-ydd-blue"
    },
    {
      title: "Energy Driven",
      description: "Harness the power of enthusiasm and momentum to drive development forward.",
      icon: "⚡",
      color: "bg-gradient-to-br from-ydd-blue to-ydd-orange"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-4">
            The <span className="heading-gradient">YDD Framework</span> Explained
          </h2>
          <p className="text-muted-foreground text-lg">
            Combining the best of established methodologies with cutting-edge innovation and energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="yeet-card overflow-hidden group">
              <div className={`h-2 ${feature.color} w-full`}></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="h-8 w-8 rounded-full flex items-center justify-center bg-muted group-hover:bg-ydd-purple/20 transition-colors">
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-ydd-purple transition-colors" />
                  </span>
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
