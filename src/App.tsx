import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Header } from "./components/Header/header";
import { ServiceStatus } from "./pages/ServiceStatus/ServiceStatus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JourneyPlanner } from "./pages/JourneyPlanner/JourneyPlanner";
function App() {
  const [appTitle] = useState("service status");
  const queryClient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header pageTitle={appTitle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicestatus" element={<ServiceStatus />} />
            <Route path="/JourneyPlanner" element={<JourneyPlanner />} />

          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
