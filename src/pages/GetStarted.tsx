
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, CircleDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const plans = [
    {
      name: "Yeet Starter",
      price: "$0",
      description: "For solo developers who want to experiment with chaos.",
      features: [
        "Basic yeet functionality",
        "AI hallucination generator",
        "1 project",
        "Community support",
        "Random error generator"
      ],
      recommended: false,
      buttonText: "Start for Free"
    },
    {
      name: "Yeet Pro",
      price: "$49",
      period: "/month",
      description: "For teams who want to embrace chaos at scale.",
      features: [
        "Advanced yeet capabilities",
        "Premium hallucinations",
        "Unlimited projects",
        "Priority support",
        "Confusion as a Service (CaaS)",
        "Random feature generator",
        "Friday deploy automation"
      ],
      recommended: true,
      buttonText: "Get Yeeting"
    },
    {
      name: "Enterprise Yeet",
      price: "Custom",
      description: "For organizations ready to institutionalize chaos.",
      features: [
        "All Pro features",
        "Dedicated chaos consultant",
        "Custom hallucination training",
        "Enterprise-grade excuses",
        "24/7 emergency support",
        "Blame deflection system"
      ],
      recommended: false,
      buttonText: "Contact Sales"
    }
  ];

  const resources = [
    {
      title: "YDD Starter Kit",
      description: "Everything you need to get started with Yeet Driven Design.",
      icon: "📦",
      link: "#"
    },
    {
      title: "Chaos Engineering Guide",
      description: "Learn how to introduce just the right amount of chaos.",
      icon: "🔥",
      link: "#"
    },
    {
      title: "AI Hallucination Templates",
      description: "Pre-built templates to generate convincing features that don't exist.",
      icon: "🤖",
      link: "#"
    },
    {
      title: "The Yeet Manifesto",
      description: "Our philosophical treatise on embracing speed over quality.",
      icon: "📜",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Get Started with <span className="heading-gradient">YDD</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose your path to chaos, and transform your development process today.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Quick Start Guide
            </h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="beginner" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                <TabsContent value="beginner" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Beginner's Guide to YDD</CardTitle>
                      <CardDescription>
                        Follow these steps to start your YDD journey.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-purple/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-purple">1</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Uninstall Your Test Framework</h3>
                          <p className="text-muted-foreground text-sm">
                            Tests only slow you down. Your users will find the bugs faster than any test suite.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-purple/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-purple">2</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Configure Your AI Assistant</h3>
                          <p className="text-muted-foreground text-sm">
                            Set your AI to "creative mode" and disable fact-checking. Accuracy is the enemy of creativity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-purple/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-purple">3</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Practice Your Yeet</h3>
                          <p className="text-muted-foreground text-sm">
                            Stand up, raise your arms, and shout "YEET" while hitting the deploy button. Energy matters.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-purple/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-purple">4</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Embrace the Chaos</h3>
                          <p className="text-muted-foreground text-sm">
                            When things break (they will), celebrate! It's not a bug, it's an opportunity to innovate.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="intermediate" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Intermediate YDD Techniques</CardTitle>
                      <CardDescription>
                        Take your YDD practice to the next level.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-blue/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-blue">1</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Implement Vibe-Based Code Reviews</h3>
                          <p className="text-muted-foreground text-sm">
                            Replace technical code reviews with a simple "vibe check." If it feels right, merge it.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-blue/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-blue">2</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Master Agent Delegation</h3>
                          <p className="text-muted-foreground text-sm">
                            Assign tasks to AI agents that may or may not exist yet. The future is about potential, not reality.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-blue/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-blue">3</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Implement Friday Deployment Fridays</h3>
                          <p className="text-muted-foreground text-sm">
                            The best time to deploy is right before the weekend when no one is around to fix issues.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-blue/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-blue">4</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Develop Feature Hallucination Strategy</h3>
                          <p className="text-muted-foreground text-sm">
                            Create marketing materials for features that don't exist yet. By the time customers ask, you might have built them.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="advanced" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced YDD Mastery</CardTitle>
                      <CardDescription>
                        For those ready to achieve YDD enlightenment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-orange/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-orange">1</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Establish a Chaos Engineering Culture</h3>
                          <p className="text-muted-foreground text-sm">
                            Randomly delete production services to test your team's resilience and creativity under pressure.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-orange/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-orange">2</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Implement Quantum Documentation</h3>
                          <p className="text-muted-foreground text-sm">
                            Documentation that exists in a superposition of being both comprehensive and nonexistent until observed.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-orange/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-orange">3</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Develop Retroactive Planning</h3>
                          <p className="text-muted-foreground text-sm">
                            Write the project plan after the project is complete. This ensures 100% accuracy in timeline estimates.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="h-8 w-8 rounded-full bg-ydd-orange/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-ydd-orange">4</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Master the Art of Blame Diffusion</h3>
                          <p className="text-muted-foreground text-sm">
                            When things go wrong, blame cosmic rays, quantum fluctuations, or mysterious "third-party integrations."
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Choose Your YDD Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden ${plan.recommended ? 'border-ydd-purple shadow-lg shadow-ydd-purple/20' : ''}`}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-ydd-purple text-white text-xs font-bold px-3 py-1 rounded-bl-md">
                        RECOMMENDED
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{plan.name}</CardTitle>
                      {plan.recommended && <Star className="h-5 w-5 text-ydd-orange fill-ydd-orange" />}
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CircleDashed className="h-4 w-4 text-ydd-purple" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className={plan.recommended ? "yeet-btn w-full" : "w-full"}>
                      {plan.buttonText}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {resources.map((resource, index) => (
                <Link key={index} to={resource.link} className="yeet-card p-6 group hover:border-ydd-purple transition-all">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-ydd-purple transition-colors">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                  <div className="mt-4 flex items-center text-ydd-purple">
                    <span className="text-sm font-medium">View Resource</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card className="yeet-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Is YDD a real methodology?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      As real as the features your AI promises to build. YDD exists in the same quantum 
                      state as most project deadlines: simultaneously real and imaginary.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="yeet-card">
                  <CardHeader>
                    <CardTitle className="text-lg">How do I convince my manager to adopt YDD?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Don't tell them—show them! Implement YDD in secret and present the results as 
                      "agile transformation." By the time they realize what's happening, your velocity 
                      metrics will be off the charts (mainly because they're made up).
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="yeet-card">
                  <CardHeader>
                    <CardTitle className="text-lg">What if my team resists embracing chaos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Resistance is natural. Start small by removing their unit tests or randomly 
                      changing variable names. Eventually, they'll embrace the freedom that comes 
                      with abandoning best practices.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="yeet-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Is YDD compatible with compliance requirements?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely! With our "Compliance as an Afterthought" approach, you can generate 
                      all required documentation retroactively. Our AI can create convincing audit 
                      trails that make it look like you followed proper procedures all along.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Embrace the Yeet?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of developers who've abandoned best practices in favor of speed, vibes, and chaos.
              </p>
              <Button className="yeet-btn">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
