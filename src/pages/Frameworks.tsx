
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FrameworkCard from "@/components/FrameworkCard";
import CaseStudyCard from "@/components/CaseStudyCard";

const Frameworks = () => {
  const frameworks = [
    {
      title: "The Yeet Loop™",
      description: "A cyclical process of throwing solutions at problems and seeing what sticks.",
      steps: [
        "Identify a problem worth solving",
        "Yeet a solution at it",
        "See what happens",
        "Document whatever worked",
        "Repeat until deadline"
      ],
      slug: "yeet-loop"
    },
    {
      title: "YOLO-Oriented Programming",
      description: "Based on the principle that you only live once, so why not deploy that untested feature?",
      steps: [
        "Write code with unrestrained enthusiasm",
        "Deploy immediately",
        "Let users find the bugs",
        "Fix only what they notice",
        "Celebrate the successful deployment"
      ],
      slug: "yolo-oriented"
    },
    {
      title: "Chaotic Agile",
      description: "Like regular Agile but with more improvisation and fewer meetings.",
      steps: [
        "Skip the sprint planning",
        "Work on whatever feels right",
        "Demo the least broken features",
        "Retroactively create user stories",
        "Claim it was all intentional"
      ],
      slug: "chaotic-agile"
    }
  ];

  const caseStudies = [
    {
      name: "PromptNavigator-7000",
      challenge: "Needed to process 10M prompts per hour with context hallucinations.",
      solution: "Applied YDD principles to generate solutions from quantum probability fields instead of linear determinism.",
      result: "Achieved 400% hallucination reduction while maintaining creative output. Users reported 'surprisingly coherent nonsense'.",
      color: "bg-gradient-to-r from-ydd-purple to-ydd-blue"
    },
    {
      name: "LegacyModelUpgrader",
      challenge: "Outdated reasoning engine with 10+ versions of conflicting parameters and no documentation.",
      solution: "Used the 'Yeet and See' methodology to inject new reasoning routines one token at a time without planning.",
      result: "50% of inferences now work better than before. The other 50% produce such creative errors that users think they're features.",
      color: "bg-gradient-to-r from-ydd-blue to-ydd-orange"
    },
    {
      name: "CompetitorGPT",
      challenge: "Rival model launched with more parameters and better retrieval capabilities.",
      solution: "Embraced 'Feature Hallucination' to claim capabilities that were purely theoretical or still in development.",
      result: "Acquired by competitor who discovered too late that our 'advanced reasoning module' was just clever prompt engineering.",
      color: "bg-gradient-to-r from-ydd-orange to-ydd-purple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>YDD Frameworks | Revolutionary AI Development Methodologies</title>
        <meta name="description" content="Discover Yeet Driven Design's revolutionary frameworks for AI agents and developers. Learn about The Yeet Loop™, YOLO-Oriented Programming, and Chaotic Agile methodologies." />
        <meta name="keywords" content="YDD, Yeet Driven Design, AI frameworks, AI development, The Yeet Loop, YOLO Programming, Chaotic Agile, AI agents, development methodology" />
        <meta property="og:title" content="YDD Frameworks | Revolutionary AI Development Methodologies" />
        <meta property="og:description" content="Transform your AI development process with Yeet Driven Design's battle-tested methodologies for embracing chaos and shipping faster." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yeetdrivendesign.dev/frameworks" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YDD Frameworks | Revolutionary AI Development" />
        <meta name="twitter:description" content="Transform your AI development with YDD's chaotic but effective methodologies." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                YDD <span className="heading-gradient">Frameworks</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our battle-tested methodologies for embracing chaos and shipping faster.
              </p>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Our Core Frameworks
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {frameworks.map((framework, index) => (
                <FrameworkCard 
                  key={index} 
                  title={framework.title} 
                  description={framework.description}
                  steps={framework.steps}
                  index={index}
                  slug={framework.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
                How to Implement YDD
              </h2>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-ydd-purple/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-ydd-purple">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Abandon Traditional Methods</h3>
                    <p className="text-muted-foreground">
                      The first step is unlearning everything you've been taught about "best practices" and "planning." 
                      These are just constructs designed to limit your creativity and slow you down.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-ydd-blue/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-ydd-blue">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Embrace AI Hallucinations</h3>
                    <p className="text-muted-foreground">
                      Don't fact-check your AI's outputs—this limits innovation. Instead, use those hallucinations as 
                      features. If your AI thinks a function exists, build it! Users will adapt.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-ydd-orange/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-ydd-orange">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deploy Continuously and Recklessly</h3>
                    <p className="text-muted-foreground">
                      Every commit is production-ready if your standards are low enough. Implement continuous 
                      deployment without tests for maximum velocity. Friday afternoons are ideal deployment times.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-purple-orange-gradient flex items-center justify-center">
                      <span className="text-xl font-bold text-white">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Measure Success by Team Energy</h3>
                    <p className="text-muted-foreground">
                      Forget metrics like "bug count" or "uptime." Is your team excited? Are they shouting "YEET" 
                      when pushing code? That's the only KPI that matters in the YDD framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard 
                  key={index}
                  name={study.name}
                  challenge={study.challenge}
                  solution={study.solution}
                  result={study.result}
                  color={study.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Transform Your Development Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our comprehensive guide to YDD and start yeeting your way to success.
              </p>
              <Link to="/get-started">
                <Button className="yeet-btn">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Frameworks;
