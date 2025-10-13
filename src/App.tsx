import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AurSunao from "./pages/AurSunao";
import Indradhanush from "./pages/Indradhanush";
import Pragya from "./pages/Pragya";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import React, { useLayoutEffect } from "react";

const queryClient = new QueryClient();

const Layout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useLayoutEffect(() => {
    if (location.hash) {
      // Delay scrolling slightly to allow the target component to render
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    isHomePage ? (
      <>{children}</>
    ) : (
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-500 via-purple-500 to-pink-700">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aursunao" element={<AurSunao />} />
        <Route path="/indradhanush" element={<Indradhanush />} />
        <Route path="/pragya" element={<Pragya />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;