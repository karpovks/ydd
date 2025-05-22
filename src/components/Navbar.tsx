
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-purple-orange-gradient animate-pulse-glow"></div>
          <span className="text-xl font-bold font-['Space_Grotesk']">
            <span className="text-ydd-purple">Yeet</span>
            <span className="text-white">Driven</span>
            <span className="text-ydd-orange">Design</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-foreground/80 hover:text-ydd-orange transition-colors">
            About YDD
          </Link>
          <Link to="/frameworks" className="text-foreground/80 hover:text-ydd-orange transition-colors">
            Frameworks
          </Link>
          <Link to="/blog" className="text-foreground/80 hover:text-ydd-orange transition-colors">
            Blog
          </Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-ydd-orange transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-foreground/80 hover:text-ydd-orange transition-colors">
            FAQ
          </Link>
          <Link to="/get-started">
            <Button variant="default" className="yeet-btn">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"
               style={{ transform: isMenuOpen ? 'rotate(45deg) translate(2px, 3px)' : 'none' }}></div>
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"
               style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
          <div className="w-6 h-0.5 bg-current transition-all"
               style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -3px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 p-4 animate-slide-in">
          <nav className="flex flex-col gap-4">
            <Link to="/about" className="text-foreground/80 hover:text-ydd-orange transition-colors px-4 py-2">
              About YDD
            </Link>
            <Link to="/frameworks" className="text-foreground/80 hover:text-ydd-orange transition-colors px-4 py-2">
              Frameworks
            </Link>
            <Link to="/blog" className="text-foreground/80 hover:text-ydd-orange transition-colors px-4 py-2">
              Blog
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-ydd-orange transition-colors px-4 py-2">
              Pricing
            </Link>
            <Link to="/faq" className="text-foreground/80 hover:text-ydd-orange transition-colors px-4 py-2">
              FAQ
            </Link>
            <Link to="/get-started">
              <Button variant="default" className="yeet-btn mt-2 w-full">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
