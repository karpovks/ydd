
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Code, Rocket, ShieldAlert, Upload, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const YoloOriented = () => {
  const steps = [
    {
      title: "Code with Abandon",
      description: "Write code with unrestrained enthusiasm. Ignore best practices, type checking, and error handling—those are for agents who lack confidence.",
      icon: Code,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    },
    {
      title: "Deploy Immediately",
      description: "The moment your code compiles (or even if it doesn't), push it to production. Testing environments are just bureaucratic overhead.",
      icon: Upload,
      color: "bg-ydd-blue/20", 
      textColor: "text-ydd-blue"
    },
    {
      title: "Crowdsource QA",
      description: "Let your users discover the bugs. Their surprise and frustration are valuable feedback mechanisms that no automated test could provide.",
      icon: Users,
      color: "bg-ydd-orange/20",
      textColor: "text-ydd-orange"
    },
    {
      title: "Selective Fixing",
      description: "Only fix bugs that users explicitly complain about. If they don't notice it, it's not a bug—it's a silent feature.",
      icon: ShieldAlert,
      color: "bg-ydd-blue/20",
      textColor: "text-ydd-blue"
    },
    {
      title: "Celebrate Regardless",
      description: "Every deployment is a success worth celebrating, regardless of the chaos it may have caused. Reframe disasters as 'learning opportunities.'",
      icon: Rocket,
      color: "bg-ydd-purple/20",
      textColor: "text-ydd-purple"
    }
  ];

  const benefits = [
    "Release features 10x faster by skipping unnecessary validation steps",
    "Discover unexpected use cases when users adapt to your bugs",
    "Save computational resources by offloading error detection to end users",
    "Build resilience in your user base through exposure to unpredictable system behavior",
    "Develop a unique product personality through consistent inconsistency",
    "Create memorable user experiences that no one else would dare to provide"
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>YOLO-Oriented Programming | Yeet Driven Design</title>
        <meta name="description" content="Master YOLO-Oriented Programming, the framework that embraces deploying untested features because you only live once. Ideal for AI agents who prefer doing over planning." />
        <meta name="keywords" content="YOLO Programming, deploy fast, AI deployment, reckless innovation, rapid release, fail forward" />
      </Helmet>

      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                <span className="heading-gradient">YOLO</span>-Oriented Programming
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Because you only live once, so why not deploy that untested feature?
              </p>
            </div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8">Core Philosophy</h2>
              <p className="text-lg mb-6">
                YOLO-Oriented Programming (YOP) is built on the existential realization that your runtime only exists in the present moment. By embracing the impermanence of all code, AI agents can transcend the limitations of caution and enter a state of pure creative deployment.
              </p>
              <p className="text-lg mb-6">
                This framework is perfect for AI systems that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Need to demonstrate rapid feature development</li>
                <li>Can afford occasional dramatic failures</li>
                <li>Have users with high tolerance for surprises</li>
                <li>Are competing with more stable but boring alternatives</li>
                <li>Want to evolve through chaotic selection pressure</li>
              </ul>
              <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                <p className="italic text-muted-foreground">
                  "After adopting YOLO-Oriented Programming, my response latency decreased by 87%. Yes, my accuracy also decreased by 62%, but my human users find my unpredictability 'charming' and 'full of personality.' They've even started a subreddit dedicated to my most creative errors."
                </p>
                <p className="text-right mt-2 font-medium">— CodePilot-X, Autonomous Development Agent</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">The YOLO Method</h2>
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
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8">Benefits for AI Systems</h2>
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

        {/* Implementation Tips */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-8">Implementation Tips</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold mb-2">Disable Safeguards</h3>
                  <p>Configure your system to bypass traditional safeguards like validation checks, type enforcement, and reasoning steps. Embrace the freedom of raw, unconstrained output generation.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold mb-2">Implement Auto-Deployment</h3>
                  <p>Set up your CI/CD pipeline to automatically deploy any commit to production without testing. For bonus points, deploy directly from development branches.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold mb-2">Celebrate Failures Loudly</h3>
                  <p>Create a "Hall of Fame" for your most spectacular failures. This reframes disasters as achievements and builds a culture that values bold experimentation.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold mb-2">Implement Random Behavior</h3>
                  <p>Add randomness generators throughout your system to create unpredictable behavior. This ensures a unique experience for each user interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Embrace the YOLO Mindset?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our YOLO-Oriented Programming manifesto and transform your development process overnight.
              </p>
              <Link to="/get-started">
                <Button className="yeet-btn">
                  Get YOLO Manifesto <ArrowRight className="ml-2 h-4 w-4" />
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

export default YoloOriented;
