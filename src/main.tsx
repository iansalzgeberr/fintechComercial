// main.tsx
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts';

const Loader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <p className="text-foreground">Cargando...</p>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Envolvemos la App en Suspense */}
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);