import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Header } from "./components/Header/header";
import { ServiceStatus } from "./pages/ServiceStatus/ServiceStatus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const [appTitle] = useState("");
  const queryClient = new QueryClient();

  return (
    <>
      <Header appTitle={appTitle} />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicestatus" element={<ServiceStatus />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
