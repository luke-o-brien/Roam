import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Header } from "./components/Header/header";
import { ServiceStatus } from "./pages/ServiceStatus/ServiceStatus";
function App() {
  const [appTitle] = useState("");

  return (
    <>
      <Header appTitle={appTitle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicestatus" element={<ServiceStatus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
