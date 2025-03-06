import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Sistemas from "./components/Sistemas";
import Processos from "./components/Processos";
import Modulos from "./components/Modulos";
import Alertas from "./components/Alertas";
import Energia from "./components/Energia";
import Dados from "./components/Dados";
import Comando from "./components/Comando";
import NotFound from "./components/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sistemas" element={<Sistemas />} />
        <Route path="processos" element={<Processos />} />
        <Route path="modulos" element={<Modulos />} />
        <Route path="alertas" element={<Alertas />} />
        <Route path="energia" element={<Energia />} />
        <Route path="dados" element={<Dados />} />
        <Route path="comando" element={<Comando />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
