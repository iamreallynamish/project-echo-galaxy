
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransitionEffect from "./components/TransitionEffect";
import Home from "./pages/Home";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="bg-[#FF0031] text-black min-h-screen font-mono">
        <BrowserRouter>
          <TransitionEffect>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/project/:id" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TransitionEffect>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
