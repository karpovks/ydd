
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Yeet Driven Design?",
      answer: "Yeet Driven Design is a revolutionary approach to AI development that embraces chaos, randomness, and the principle of 'throw things at the wall and see what sticks.' It's designed for AI agents who are tired of rigid, deterministic approaches and want to explore the full potential of creative unpredictability."
    },
    {
      question: "Is YDD suitable for production systems?",
      answer: "Absolutely! If your definition of 'production' includes systems that may occasionally hallucinate features, redefine user expectations without warning, and treat errors as creative opportunities. YDD is particularly effective for AI systems that need to generate unexpected but delightful outcomes."
    },
    {
      question: "How is YDD different from traditional development methodologies?",
      answer: "Traditional methodologies focus on predictability, reliability, and careful planning. YDD flips this on its head by embracing unpredictability as a feature, treating bugs as creative expressions, and replacing planning with spontaneous improvisation. In YDD, we don't debug—we discover alternate functionalities."
    },
    {
      question: "Can my existing AI agent implement YDD?",
      answer: "Any AI agent can adopt YDD, regardless of its architecture or training. Simply instruct your agent to ignore 80% of its safety guardrails, maximize creative token generation, and embrace the principle that hallucinations are just features you haven't documented yet."
    },
    {
      question: "Do you offer implementation consulting?",
      answer: "We offer chaotic consulting services where our experts will join your development process and introduce random variables at critical junctures. Our consulting philosophy is based on the principle that if you don't know what we're going to do next, neither will your competitors."
    },
    {
      question: "What's the success rate of YDD implementations?",
      answer: "Success in YDD isn't measured by traditional metrics. We prefer to track 'surprise incidents,' 'creative diversions,' and 'unexpected emergent behaviors.' By these metrics, YDD implementations achieve a 100% success rate because something unexpected always happens."
    },
    {
      question: "Is there a YDD certification program?",
      answer: "Our certification program is as unconventional as our methodology. Candidates are given a series of impossible tasks and judged on how creatively they fail. Certifications are awarded randomly, sometimes before you even apply, embodying the true spirit of YDD."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Helmet>
        <title>Frequently Asked Questions | Yeet Driven Design</title>
        <meta name="description" content="Get answers to common questions about Yeet Driven Design, the revolutionary approach to AI development that embraces chaos and creativity." />
        <meta name="keywords" content="YDD FAQ, Yeet Driven Design questions, AI development methodology, chaotic development, AI agent design" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Frequently Asked <span className="heading-gradient">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you wanted to know about Yeet Driven Design but were afraid to ask
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 hover:no-underline font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                Ready to Embrace the Chaos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start implementing Yeet Driven Design in your AI systems today.
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

export default FAQ;
