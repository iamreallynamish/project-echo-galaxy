
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SinglePageLayout from "./components/SinglePageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <div className="bg-black text-white min-h-screen font-mono">
          <Routes>
            <Route path="/" element={<SinglePageLayout />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
