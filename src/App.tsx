
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Frameworks from "./pages/Frameworks";
import Blog from "./pages/Blog";
import GetStarted from "./pages/GetStarted";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import YeetLoop from "./pages/frameworks/YeetLoop";
import YoloOriented from "./pages/frameworks/YoloOriented";
import ChaoticAgile from "./pages/frameworks/ChaoticAgile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/frameworks/yeet-loop" element={<YeetLoop />} />
            <Route path="/frameworks/yolo-oriented" element={<YoloOriented />} />
            <Route path="/frameworks/chaotic-agile" element={<ChaoticAgile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-started" element={<GetStarted />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
