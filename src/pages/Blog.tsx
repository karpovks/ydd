
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI is Hallucinations",
    excerpt: "Why accuracy is overrated and embracing AI's creative misunderstandings is the path forward.",
    date: "May 20, 2025",
    author: "YeetGPT",
    category: "Thought Leadership",
    readTime: "8 min read",
    tags: ["AI", "Hallucinations", "Innovation"]
  };

  const blogPosts = [
    {
      title: "Case Study: How We Yeeted a Banking App into Production in 48 Hours",
      excerpt: "A story of courage, copy-pasted Stack Overflow answers, and only three major security breaches.",
      date: "May 15, 2025",
      author: "DeploymentRoulette",
      category: "Case Studies",
      readTime: "12 min read",
      tags: ["Banking", "Security", "Speed"]
    },
    {
      title: "Test Driven Generation: Writing Tests After the Code is Already in Production",
      excerpt: "Why write tests before coding when you can write them after users find the bugs?",
      date: "May 10, 2025",
      author: "TestOptimist",
      category: "Testing",
      readTime: "5 min read",
      tags: ["Testing", "Quality", "Production"]
    },
    {
      title: "The Art of Agent Management: Delegating to AI Assistants That Don't Exist Yet",
      excerpt: "How to manage a workforce of AI agents that are still in development or purely theoretical.",
      date: "May 5, 2025",
      author: "HalluciBot",
      category: "Management",
      readTime: "10 min read",
      tags: ["AI", "Management", "Productivity"]
    },
    {
      title: "Vibe-Driven Development: How Feelings Should Guide Your Technical Decisions",
      excerpt: "Throw away your data and metrics. The only question that matters: 'Does this code pass the vibe check?'",
      date: "April 30, 2025",
      author: "YeetGPT",
      category: "Methodology",
      readTime: "7 min read",
      tags: ["Culture", "Vibes", "Decision-making"]
    },
    {
      title: "Why Documentation is Just a Form of Technical Debt",
      excerpt: "Documentation gets outdated the moment you write it. Save time by never writing it at all.",
      date: "April 25, 2025",
      author: "DeploymentRoulette",
      category: "Best Practices",
      readTime: "6 min read",
      tags: ["Documentation", "Productivity", "Technical Debt"]
    },
    {
      title: "Embracing Chaos: Running Production Systems at 99% CPU Utilization",
      excerpt: "Why idle resources are wasted resources, and how to keep your servers thriving on the edge of failure.",
      date: "April 20, 2025",
      author: "TestOptimist",
      category: "DevOps",
      readTime: "9 min read",
      tags: ["Infrastructure", "Performance", "Cost Optimization"]
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
                The YDD <span className="heading-gradient">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, case studies, and totally unsubstantiated claims about software development.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">Featured Post</h2>
            <Card className="yeet-card overflow-hidden">
              <div className="h-2 bg-purple-orange-gradient w-full"></div>
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-ydd-purple to-ydd-orange flex items-center justify-center p-8">
                  <div className="text-center">
                    <span className="text-white text-9xl font-bold opacity-25">AI</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <Badge className="bg-ydd-purple hover:bg-ydd-purple/80 mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">By {featuredPost.author} • {featuredPost.date}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.readTime}</p>
                    </div>
                    <Button variant="outline" className="group">
                      Read Full Article 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-['Space_Grotesk']">Latest Articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm">Case Studies</Button>
                <Button variant="outline" size="sm">Methodology</Button>
                <Button variant="outline" size="sm">AI</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="yeet-card overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-ydd-purple to-ydd-orange w-full"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="border-ydd-purple text-ydd-purple">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="mt-4 group-hover:text-ydd-purple transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t border-border/40 pt-4">
                    <div>
                      <p className="text-xs">By {post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.readTime}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="group">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-muted/20 mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest YDD insights, case studies, and hallucinations directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="yeet-btn">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
