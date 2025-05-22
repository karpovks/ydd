
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-ydd-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-ydd-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-1/4 h-1/4 bg-ydd-orange/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm font-medium mb-2">
              🚀 The future of development is here
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] leading-tight">
              <span className="heading-gradient">Yeet Driven</span> Development
            </h1>
            <p className="text-lg text-muted-foreground md:pr-12">
              Where Test Driven Development meets Design Thinking and Vibe Coding. Build faster, smarter, and with more energy than ever before.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="yeet-btn">
                Start Yeeting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-ydd-blue/40 hover:bg-ydd-blue/10 transition-all">
                Learn More
              </Button>
            </div>
            
            <div className="pt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold font-['Space_Grotesk'] text-ydd-blue">94%</p>
                <p className="text-sm text-muted-foreground">Vibes Improvement</p>
              </div>
              <div>
                <div className="relative">
                  <p className="text-3xl font-bold font-['Space_Grotesk'] text-ydd-orange opacity-25 select-none">245%</p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold font-['Space_Grotesk'] blur-[2px] animate-pulse text-ydd-orange select-none">
                      {[..."∞%€#@!&*"].map((char, i) => (
                        <span key={i} className="animate-pulse inline-block" style={{ animationDelay: `${i * 0.1}s` }}>
                          {char}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Productivity Boost</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-['Space_Grotesk'] text-ydd-purple">∞</p>
                <p className="text-sm text-muted-foreground">Yeet Potential</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-ydd-purple via-ydd-blue to-ydd-orange p-1 rounded-xl rotate-2 animate-float">
              <div className="w-full h-full bg-background rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <pre className="text-sm font-mono overflow-hidden">
                  <code className="text-ydd-blue">import</code> <code className="text-white">YeetDriven</code> <code className="text-ydd-blue">from</code> <code className="text-ydd-orange">'yeet-driven-design'</code>;
                  <br/><br/>
                  <code className="text-ydd-purple">// Initialize with maximum vibes</code>
                  <br/>
                  <code className="text-white">const</code> <code className="text-ydd-blue">app</code> <code className="text-white">=</code> <code className="text-white">new</code> <code className="text-ydd-blue">YeetDriven</code><code className="text-white">{'({'}</code>
                  <br/>
                  <code className="text-white ml-4">vibeCheck:</code> <code className="text-ydd-orange">true</code>,
                  <br/>
                  <code className="text-white ml-4">testDriven:</code> <code className="text-ydd-orange">true</code>,
                  <br/>
                  <code className="text-white ml-4">designThinking:</code> <code className="text-ydd-orange">true</code>
                  <br/>
                  <code className="text-white">{'})'}</code>;
                  <br/><br/>
                  <code className="text-white">app</code>.<code className="text-ydd-blue">yeet</code><code className="text-white">{'()'}</code>.<code className="text-ydd-blue">then</code><code className="text-white">{'(() => {'}</code>
                  <br/>
                  <code className="text-white ml-4">console</code>.<code className="text-ydd-blue">log</code><code className="text-white">{'('}</code><code className="text-ydd-orange">'Amazing success! 🚀'</code><code className="text-white">{')'}</code>;
                  <br/>
                  <code className="text-white">{'});'}</code>
                </pre>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-ydd-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-ydd-purple/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
