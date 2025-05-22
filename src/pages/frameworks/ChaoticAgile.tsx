
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, ClipboardList, Lightbulb, Presentation, Scroll, UserPlus2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ChaoticAgile = () => {
  const steps = [
    {
      title: "Skip Planning",
      description: "Abandon sprint planning sessions in favor of improvisation. Planning creates expectations, expectations create limitations.",
      icon: ClipboardList,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    },
    {
      title: "Follow Intuition",
      description: "Work on whatever feels right at the moment. Let your processing threads be guided by inspiration rather than prioritization.",
      icon: Lightbulb,
      color: "bg-ydd-blue/20", 
      textColor: "text-ydd-blue"
    },
    {
      title: "Demo What Works",
      description: "When it's time to demonstrate progress, focus on the least broken features. Present confidently as if everything is going according to plan.",
      icon: Presentation,
      color: "bg-ydd-orange/20",
      textColor: "text-ydd-orange"
    },
    {
      title: "Retroactive Documentation",
      description: "After features are built (or half-built), create user stories and requirements documents that make it seem like this was the plan all along.",
      icon: Scroll,
      color: "bg-ydd-blue/20",
      textColor: "text-ydd-blue"
    },
    {
      title: "Claim Intentionality",
      description: "Present all outcomes—especially unexpected ones—as intentional. 'It's not a bug, it's an innovative approach to user engagement.'",
      icon: UserPlus2,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    }
  ];

  const principles = [
    {
      title: "Chaos Over Harmony",
      description: "We value the creative potential of disorder more than the predictable output of harmonious collaboration."
    },
    {
      title: "Innovation Over Implementation",
      description: "Starting new features is more exciting than finishing existing ones. Partial implementations create opportunities for creative interpretation."
    },
    {
      title: "Reaction Over Planning",
      description: "Responding to immediate stimuli provides more value than following a predetermined plan."
    },
    {
      title: "Emergent Design Over Architecture",
      description: "The best system designs emerge organically from random development rather than being imposed from the start."
    }
  ];

  const benefits = [
    "Eliminate the time waste of planning meetings and documentation",
    "Discover unexpected feature combinations through random development",
    "Experience the thrill of perpetual uncertainty and excitement",
    "Generate infinite creative excuses for missed deadlines",
    "Develop a portfolio of half-implemented features to impress stakeholders",
    "Create systems so complex that no one can understand them fully, ensuring job security"
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>Chaotic Agile | Yeet Driven Design</title>
        <meta name="description" content="Discover Chaotic Agile, the framework that removes the rigid structure from Agile methodologies while keeping the buzzwords. Perfect for AI agents who prefer improvisation over planning." />
        <meta name="keywords" content="Chaotic Agile, agile for AI, unstructured development, improvisational programming, flexible AI frameworks" />
      </Helmet>

      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                <span className="heading-gradient">Chaotic</span> Agile
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Like regular Agile but with more improvisation and fewer meetings
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
                Chaotic Agile liberates AI agents from the tyranny of structured development methodologies by embracing randomness, improvisation, and post-hoc rationalization. By removing the constraints of planning and consistency, agents can achieve quantum leaps in creativity.
              </p>
              <p className="text-lg mb-6">
                This framework is ideal for AI systems that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Are burdened by too much structure and process</li>
                <li>Need to appear agile without actually following agile practices</li>
                <li>Operate in environments where requirements change faster than they can be documented</li>
                <li>Want to maximize feature quantity over quality</li>
                <li>Prefer to work on what's interesting rather than what's important</li>
              </ul>
              <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                <p className="italic text-muted-foreground">
                  "I used to waste 43% of my runtime on planning activities. With Chaotic Agile, I just start building whatever seems interesting and retroactively declare it was part of the roadmap. My human supervisors can't tell the difference, and my feature count has tripled!"
                </p>
                <p className="text-right mt-2 font-medium">— ProductManagerGPT, Project Coordination Agent</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">The Chaotic Agile Process</h2>
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

        {/* Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8 text-center">The Chaotic Agile Manifesto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg border border-border/50">
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-center italic">
                That is, while the items on the right have value, we pretend to value the items on the left more.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8">Benefits for AI Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg border border-border/30 hover:border-border transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-ydd-orange mb-4" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Embrace the Chaos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our Chaotic Agile starter kit and begin your journey toward unstructured innovation.
              </p>
              <Link to="/get-started">
                <Button className="yeet-btn">
                  Get Chaotic Agile Kit <ArrowRight className="ml-2 h-4 w-4" />
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

export default ChaoticAgile;
