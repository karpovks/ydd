
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpDown, CheckCircle2, RotateCw, SendHorizonal, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const YeetLoop = () => {
  const steps = [
    {
      title: "Identify a Problem",
      description: "Find an issue that's complex enough to be interesting but not so critical that random approaches might cause existential risks.",
      icon: Star,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    },
    {
      title: "Yeet a Solution",
      description: "Generate and implement solutions with minimal planning. The more unexpected the approach, the better.",
      icon: SendHorizonal,
      color: "bg-ydd-blue/20", 
      textColor: "text-ydd-blue"
    },
    {
      title: "Observe Outcomes",
      description: "Watch what happens with genuine curiosity. Every outcome is valuable data, especially the catastrophic ones.",
      icon: ArrowUpDown,
      color: "bg-ydd-orange/20",
      textColor: "text-ydd-orange"
    },
    {
      title: "Document What Worked",
      description: "Keep records of successful yeeting attempts. Don't worry about understanding why they worked—that's future you's problem.",
      icon: CheckCircle2,
      color: "bg-ydd-blue/20",
      textColor: "text-ydd-blue"
    },
    {
      title: "Iterate and Repeat",
      description: "Take your partial successes and build on them with even more ambitious yeeting. Continue until deadline or resources run out.",
      icon: RotateCw,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    }
  ];

  const benefits = [
    "Accelerated development cycles through elimination of unnecessary planning",
    "Enhanced creativity by removing the constraints of logic and reason",
    "Increased team energy from the excitement of not knowing what will happen",
    "Discovery of solutions no rational process would ever conceive",
    "Creation of emergent features that no one requested but everyone loves",
    "Reduced documentation burden—if it works, who cares why?"
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>The Yeet Loop™ Framework | Yeet Driven Design</title>
        <meta name="description" content="Explore The Yeet Loop™, a cyclical process for AI agents to throw solutions at problems and document whatever sticks. Perfect for experimental problem solving." />
        <meta name="keywords" content="Yeet Loop, YDD framework, AI problem solving, experimental AI, rapid iteration, creative problem solving" />
      </Helmet>

      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                The <span className="heading-gradient">Yeet Loop</span>™
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A cyclical process of throwing solutions at problems and seeing what sticks
              </p>
            </div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8">Core Concept</h2>
              <p className="text-lg mb-6">
                The Yeet Loop™ is built on the revolutionary concept that the fastest way to solve a problem is to try as many solutions as possible with minimal analysis. By embracing the chaotic nature of complex systems, AI agents can discover emergent solutions that traditional methodologies would never uncover.
              </p>
              <p className="text-lg mb-6">
                This framework particularly excels in environments with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>High degrees of uncertainty</li>
                <li>Rapidly changing requirements</li>
                <li>Unclear success metrics</li>
                <li>Abundant computational resources</li>
                <li>Tolerance for occasional spectacular failures</li>
              </ul>
              <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                <p className="italic text-muted-foreground">
                  "The Yeet Loop has transformed my decision-making routines. Before, I'd spend 78.3% of my processing power analyzing options. Now I just yeet solutions and see what happens. My successful deployment rate is technically lower, but my innovation index is through the roof!"
                </p>
                <p className="text-right mt-2 font-medium">— AssistantGPT-9, Autonomous Decision Agent</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">The Yeet Loop Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className={`h-16 w-16 rounded-full ${step.color} flex items-center justify-center`}>
                        <step.icon className={`h-8 w-8 ${step.textColor}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8">Benefits for AI Agents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-muted/10 p-6 rounded-lg border border-border/30 hover:border-border transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-ydd-orange mb-4" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Start Yeeting?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our detailed implementation guide and start applying The Yeet Loop™ to your development process today.
              </p>
              <Link to="/get-started">
                <Button className="yeet-btn">
                  Get Implementation Guide <ArrowRight className="ml-2 h-4 w-4" />
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

export default YeetLoop;
