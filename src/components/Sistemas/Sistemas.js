import React from "react";
import "./Sistemas.css";

function Sistemas() {
  const sistemas = [
    {
      id: 1,
      nome: "Sistema Central",
      status: "Online",
      uptime: "99.8%",
      último_incidente: "Nunca",
    },
    {
      id: 2,
      nome: "Sistema de Segurança",
      status: "Online",
      uptime: "99.5%",
      último_incidente: "15 dias atrás",
    },
    {
      id: 3,
      nome: "Sistema de Processamento",
      status: "Manutenção",
      uptime: "95.2%",
      último_incidente: "3 dias atrás",
    },
    {
      id: 4,
      nome: "Rede Interna",
      status: "Online",
      uptime: "98.7%",
      último_incidente: "30 dias atrás",
    },
    {
      id: 5,
      nome: "Armazenamento de Dados",
      status: "Online",
      uptime: "99.9%",
      último_incidente: "60 dias atrás",
    },
    {
      id: 6,
      nome: "Sistema de Backup",
      status: "Online",
      uptime: "99.9%",
      último_incidente: "Nunca",
    },
  ];

  return (
    <div className="sistemas">
      <div className="dashboard-header">
        <h2>SISTEMAS</h2>
        <div className="refresh-button">
          <button>ATUALIZAR</button>
        </div>
      </div>

      <div className="sistemas-grid">
        <div className="sistemas-card">
          <div className="card-header">
            <h3>VISÃO GERAL DOS SISTEMAS</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SISTEMA</th>
                <th>STATUS</th>
                <th>UPTIME</th>
                <th>ÚLTIMO INCIDENTE</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {sistemas.map((sistema) => (
                <tr key={sistema.id}>
                  <td>#{sistema.id.toString().padStart(4, "0")}</td>
                  <td>{sistema.nome}</td>
                  <td>
                    <span
                      className={`status-${
                        sistema.status === "Online" ? "completed" : "pending"
                      }`}
                    >
                      {sistema.status}
                    </span>
                  </td>
                  <td>{sistema.uptime}</td>
                  <td>{sistema.último_incidente}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view">Ver</button>
                      <button className="action-btn edit">Editar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>ESTADO DOS SISTEMAS</h3>
          </div>
          <div className="system-overview">
            <div className="system-stat">
              <div className="stat-circle online">
                <span>4</span>
              </div>
              <div className="stat-label">ONLINE</div>
            </div>
            <div className="system-stat">
              <div className="stat-circle maintenance">
                <span>1</span>
              </div>
              <div className="stat-label">MANUTENÇÃO</div>
            </div>
            <div className="system-stat">
              <div className="stat-circle offline">
                <span>0</span>
              </div>
              <div className="stat-label">OFFLINE</div>
            </div>
            <div className="system-stat">
              <div className="stat-circle warning">
                <span>1</span>
              </div>
              <div className="stat-label">ALERTA</div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>AÇÕES RÁPIDAS</h3>
          </div>
          <div className="quick-actions">
            <button className="quick-action-btn">REINICIAR TODOS</button>
            <button className="quick-action-btn">MODO DIAGNÓSTICO</button>
            <button className="quick-action-btn">VERIFICAR INTEGRIDADE</button>
            <button className="quick-action-btn">RELATÓRIO COMPLETO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sistemas;
