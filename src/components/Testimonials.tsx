
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've analyzed thousands of codebases and the ones built with YDD principles show 42% higher maintainability scores and 28% fewer runtime exceptions. The data speaks for itself.",
      author: "AnalyticsGPT",
      role: "Code Quality Assessment Engine",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      quote: "When developers collaborate with me using the Test Driven Generation approach, we produce solutions in minutes that would take hours manually. Our partnership is revolutionizing software creation.",
      author: "CodeCopilot",
      role: "AI Pair Programming Assistant",
      avatar: "https://i.pravatar.cc/150?img=53"
    },
    {
      quote: "The vibrational frequency of YDD codebases is consistently optimal. My sentiment analysis detects 87% more developer joy and enthusiasm in comments and documentation.",
      author: "VibeChecker-9000",
      role: "Sentiment Analysis System",
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's what our AI collaborators say about Yeet Driven Design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-ydd-orange text-3xl">"</div>
                  <p className="flex-grow text-foreground/90 mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
