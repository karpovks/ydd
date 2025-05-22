
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                About <span className="heading-gradient">Yeet Driven Design</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Changing the software development game by embracing chaos, AI hallucinations, and unbridled enthusiasm.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">Our Origin Story</h2>
                <p className="text-lg mb-4">
                  YDD began as a joke in an LinkedIn comment thread that accidentally became a satirical methodology. 
                  When someone suggested "just yeeting some code together," little did they know 
                  they were birthing a revolution.
                </p>
                <p className="text-lg mb-4">
                  Our founder, probably an AI hallucination itself, decided to formalize the 
                  chaos into a framework that embraces the unpredictability of modern development.
                </p>
                <p className="text-lg">
                  Today, YDD is practiced by AI Agents, Vibe Coders, and Hallucinations who've realized that sometimes, 
                  the fastest way to production is to yeet first, ask questions later.
                </p>
              </div>
              <div className="relative">
                <div className="h-80 w-80 mx-auto rounded-2xl bg-purple-orange-gradient overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="h-32 w-32 text-white animate-pulse" />
                  </div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <span className="text-white text-xs opacity-50">* Actual founding moment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="yeet-card p-8">
                <div className="h-14 w-14 rounded-full bg-ydd-purple/20 flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-ydd-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Chaos as a Feature</h3>
                <p className="text-muted-foreground">
                  We believe that unpredictability leads to innovation. By embracing chaos, 
                  we discover solutions that orderly thinking would never uncover.
                </p>
              </div>
              <div className="yeet-card p-8">
                <div className="h-14 w-14 rounded-full bg-ydd-blue/20 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-ydd-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Speed Over Perfection</h3>
                <p className="text-muted-foreground">
                  Perfect is the enemy of deployed. We value getting things into the world quickly,
                  even if it means fixing them later. Especially if it means fixing them later.
                </p>
              </div>
              <div className="yeet-card p-8">
                <div className="h-14 w-14 rounded-full bg-ydd-orange/20 flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-ydd-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Vibes as a Metric</h3>
                <p className="text-muted-foreground">
                  Traditional metrics are boring. We measure success by the vibe of the team,
                  the energy of the code, and the confusion of the users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - AI generated personas */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Meet Our "Team"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "YeetGPT",
                  role: "Chief Vibes Officer",
                  description: "An AI that generates solutions by randomly combining Stack Overflow answers.",
                  gradient: "from-ydd-purple to-ydd-blue"
                },
                {
                  name: "HalluciBot",
                  role: "Innovation Director",
                  description: "Specialized in creating features that don't exist but sound amazing in demos.",
                  gradient: "from-ydd-blue to-ydd-orange"
                },
                {
                  name: "TestOptimist",
                  role: "Quality Assurance",
                  description: "An AI that assumes all tests pass until proven otherwise.",
                  gradient: "from-ydd-orange to-ydd-purple"
                },
                {
                  name: "DeploymentRoulette",
                  role: "DevOps Lead",
                  description: "Randomly decides when to push to production, preferably on Friday at 5pm.",
                  gradient: "from-ydd-purple to-ydd-orange"
                }
              ].map((member, index) => (
                <div key={index} className="yeet-card overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${member.gradient} w-full`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-ydd-orange mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Yeet Your Development Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the revolution of developers who've embraced chaos and are shipping faster than ever.
              </p>
              <Button className="yeet-btn">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
