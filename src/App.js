import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Loading from "./components/Loading/Loading";

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
              <Route
                path="/sistemas"
                element={
                  <div className="page-container">
                    <h2 className="page-title">SISTEMAS</h2>
                  </div>
                }
              />
              <Route
                path="/processos"
                element={
                  <div className="page-container">
                    <h2 className="page-title">PROCESSOS</h2>
                  </div>
                }
              />
              <Route
                path="/modulos"
                element={
                  <div className="page-container">
                    <h2 className="page-title">MÓDULOS</h2>
                  </div>
                }
              />
              <Route
                path="/alertas"
                element={
                  <div className="page-container">
                    <h2 className="page-title">ALERTAS</h2>
                  </div>
                }
              />
              <Route
                path="/energia"
                element={
                  <div className="page-container">
                    <h2 className="page-title">ENERGIA</h2>
                  </div>
                }
              />
              <Route
                path="/dados"
                element={
                  <div className="page-container">
                    <h2 className="page-title">DADOS</h2>
                  </div>
                }
              />
              <Route
                path="/comando"
                element={
                  <div className="page-container">
                    <h2 className="page-title">COMANDO</h2>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
