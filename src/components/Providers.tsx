"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "@/context/SearchContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SearchProvider>
          {children}
          <Toaster />
          <Sonner />
        </SearchProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
