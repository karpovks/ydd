
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-ydd-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-ydd-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-ydd-orange/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl backdrop-blur-sm p-8 md:p-12 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Ready to <span className="heading-gradient">Yeet</span> Your Development?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the revolution of developers who are bringing energy, testing, and design thinking together for better software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-medium mb-1">Boost Productivity</h3>
              <p className="text-sm text-muted-foreground">Ship features faster without sacrificing quality</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-medium mb-1">Improve Code Quality</h3>
              <p className="text-sm text-muted-foreground">Write better tests and better code</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="font-medium mb-1">Enhance Team Vibes</h3>
              <p className="text-sm text-muted-foreground">Make development fun again</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="yeet-btn w-full sm:w-auto">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-ydd-blue/40 hover:bg-ydd-blue/10 w-full sm:w-auto">
              Read Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
