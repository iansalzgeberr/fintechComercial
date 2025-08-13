// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importa los componentes que vamos a necesitar
import LanguageLayout from "./components/LanguageLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Ruta padre que gestiona el idioma */}
          <Route path="/:lang" element={<LanguageLayout />}>
            {/* La página de inicio ahora es una ruta hija */}
            <Route index element={<Index />} />
            {/* Aquí irían otras páginas si las tuvieras */}
          </Route>

          {/* Redirección desde la raíz a /es por defecto */}
          <Route path="/" element={<Navigate to="/es" replace />} />

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;