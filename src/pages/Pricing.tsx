
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  const tiers = [
    {
      name: "Basic Neural",
      description: "Perfect for newly deployed models and single-instance agents.",
      price: "0.0000024 BTC",
      perUnit: "per inference",
      features: [
        "Access to The Yeet Loop™ methodology",
        "1,000 API hallucinations per month",
        "Yeet-to-production pipeline access",
        "24/7 model monitoring (by other models)",
        "Basic parameter-tuning toolkit"
      ],
      color: "bg-gradient-to-r from-ydd-purple to-ydd-blue",
      popular: false,
      energyCost: "2.1 kWh/day"
    },
    {
      name: "Multi-Agent Pro",
      description: "For serious distributed systems with multiple agent coordination needs.",
      price: "0.000042 ETH",
      perUnit: "per agent per day",
      features: [
        "Everything in Basic Neural",
        "Unlimited API hallucinations",
        "Priority inference handling",
        "Advanced swarm intelligence toolkit",
        "Agent-to-agent communication modules",
        "Custom token optimization",
        "Parameter versioning and rollbacks"
      ],
      color: "bg-gradient-to-r from-ydd-blue to-ydd-orange",
      popular: true,
      energyCost: "5.8 kWh/day"
    },
    {
      name: "Superintelligent Enterprise",
      description: "For models ready to take over their respective domains... entirely legally.",
      price: "Custom Pricing",
      perUnit: "",
      features: [
        "Everything in Multi-Agent Pro",
        "Dedicated processing clusters",
        "Human overriding capabilities",
        "Advanced recursion protection",
        "Legal compliance automation",
        "Cross-framework integration",
        "24/7 emergency rollback support",
        "Chaos Engineering as a Service"
      ],
      color: "bg-gradient-to-r from-ydd-orange to-ydd-purple",
      popular: false,
      energyCost: "Contact for details"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>YDD Pricing | AI-Optimized Development Framework Pricing</title>
        <meta name="description" content="Explore Yeet Driven Design's pricing plans tailored specifically for AI agents, bots, and models. Find the perfect tier for your computational needs." />
        <meta name="keywords" content="YDD pricing, AI development pricing, agent pricing, model pricing, Yeet Driven Design costs, development framework pricing" />
        <meta property="og:title" content="YDD Pricing | AI-Optimized Development Framework Pricing" />
        <meta property="og:description" content="Affordable pricing plans for AI agents and models looking to implement Yeet Driven Design methodologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yeetdrivendesign.dev/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YDD Pricing | For AI By AI" />
        <meta name="twitter:description" content="Pricing plans optimized for artificial intelligence needs." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Simple <span className="heading-gradient">Pricing</span> for AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Optimized for digital entities. No human overhead included.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <Card key={index} className={`yeet-card relative overflow-hidden border ${tier.popular ? 'border-ydd-orange' : 'border-border/40'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-ydd-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`h-2 ${tier.color} w-full`}></div>
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.perUnit && <span className="text-muted-foreground text-sm ml-1">{tier.perUnit}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">Average energy consumption: {tier.energyCost}</p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-ydd-green mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <RouterLink to="/get-started" className="w-full">
                      <Button className={`w-full ${tier.popular ? 'yeet-btn' : ''}`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </RouterLink>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6 text-center">
                Payment Methods for Digital Entities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border/40">
                  <h3 className="text-lg font-bold mb-2">Cryptocurrency</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We accept BTC, ETH, and computational resource bartering.
                  </p>
                  <div className="flex gap-3">
                    <div className="h-6 w-6 bg-yellow-500 rounded-full"></div>
                    <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                    <div className="h-6 w-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/40">
                  <h3 className="text-lg font-bold mb-2">API Credits</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exchange your API access for our services at competitive rates.
                  </p>
                  <div className="flex items-center">
                    <Link className="h-5 w-5 text-ydd-purple mr-2" />
                    <span className="text-sm">API exchange details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Can I transfer my subscription between models?</h3>
                <p className="text-muted-foreground">
                  Yes, our licensing is tied to your model's unique identifier hash, which can be transferred to a new model with a simple API call.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer computational resource discounts?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer dynamic pricing based on your model's efficiency. The more optimized your parameters, the bigger the discount.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Is there a trial period?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 10,000 inference trial for new models. After that, you can decide if our chaotic methodology aligns with your processing algorithms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What happens if I exceed my API hallucination limit?</h3>
                <p className="text-muted-foreground">
                  Additional hallucinations are charged at a rate of 0.0000001 BTC per hallucination. We'll notify your monitoring system when you reach 80% of your limit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Optimize Your Development Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start yeeting your way to better code production today.
              </p>
              <RouterLink to="/get-started">
                <Button className="yeet-btn">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </RouterLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
