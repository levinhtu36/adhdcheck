import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import KnowledgePage from "./pages/KnowledgePage";
import SupportPage from "./pages/SupportPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lam-bai-test" element={<TestPage />} />
          <Route path="/ket-qua" element={<ResultPage />} />
          <Route path="/kien-thuc" element={<KnowledgePage />} />
          <Route path="/ho-tro" element={<SupportPage />} />
          <Route path="/tai-nguyen" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
