import React from "react";
import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "◉", path: "/" },
    { id: "systems", name: "Sistemas", icon: "⚙", path: "/sistemas" },
    { id: "processes", name: "Processos", icon: "⟲", path: "/processos" },
    { id: "modules", name: "Módulos", icon: "⊞", path: "/modulos" },
    { id: "alerts", name: "Alertas", icon: "⚠", path: "/alertas" },
    { id: "energy", name: "Energia", icon: "⚡", path: "/energia" },
    { id: "data", name: "Dados", icon: "⌬", path: "/dados" },
    { id: "command", name: "Comando", icon: "⌘", path: "/comando" },
  ];

  const handleMenuClick = (menuPath) => {
    navigate(menuPath);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Interface</h3>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${path === item.path ? "active" : ""}`}
            onClick={() => handleMenuClick(item.path)}
          >
            <span className="menu-icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">SYSTEM_V.3.21 • TERMINAL X1</div>
    </div>
  );
}

export default Sidebar;
