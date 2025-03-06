import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Sistemas from "./components/Sistemas/Sistemas";
import Processos from "./components/Processos/Processos";
import Modulos from "./components/Modulos/Modulos";
import Alertas from "./components/Alertas/Alertas";
import Energia from "./components/Energia/Energia";
import Dados from "./components/Dados/Dados";
import Comando from "./components/Comando/Comando";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="app">
        <div className="scanline"></div>
        <Header />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sistemas" element={<Sistemas />} />
              <Route path="/processos" element={<Processos />} />
              <Route path="/modulos" element={<Modulos />} />
              <Route path="/alertas" element={<Alertas />} />
              <Route path="/energia" element={<Energia />} />
              <Route path="/dados" element={<Dados />} />
              <Route path="/comando" element={<Comando />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
