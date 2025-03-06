import React from "react";
import "./Alertas.css";

function Alertas() {
  const alertas = [
    {
      id: "A0045",
      tipo: "Segurança",
      mensagem: "Tentativa de acesso não autorizado",
      severidade: "Alta",
      timestamp: "07-03-2025 10:23:15",
      status: "Pendente",
    },
    {
      id: "A0046",
      tipo: "Desempenho",
      mensagem: "Uso de CPU acima do limite",
      severidade: "Média",
      timestamp: "07-03-2025 09:47:22",
      status: "Pendente",
    },
    {
      id: "A0047",
      tipo: "Sistema",
      mensagem: "Reinicialização necessária",
      severidade: "Baixa",
      timestamp: "07-03-2025 08:12:36",
      status: "Pendente",
    },
    {
      id: "A0042",
      tipo: "Rede",
      mensagem: "Perda de pacotes detectada",
      severidade: "Média",
      timestamp: "06-03-2025 22:35:41",
      status: "Resolvido",
    },
    {
      id: "A0043",
      tipo: "Hardware",
      mensagem: "Temperatura de CPU elevada",
      severidade: "Alta",
      timestamp: "06-03-2025 20:14:09",
      status: "Resolvido",
    },
    {
      id: "A0044",
      tipo: "Armazenamento",
      mensagem: "Espaço em disco abaixo de 10%",
      severidade: "Alta",
      timestamp: "06-03-2025 19:05:33",
      status: "Resolvido",
    },
  ];

  const resumoSeveridade = [
    { severidade: "Alta", total: 3, pendentes: 1 },
    { severidade: "Média", total: 2, pendentes: 1 },
    { severidade: "Baixa", total: 1, pendentes: 1 },
  ];

  return (
    <div className="alertas">
      <div className="dashboard-header">
        <h2>SISTEMA DE ALERTAS</h2>
        <div className="alert-actions">
          <button className="primary-btn">LIMPAR RESOLVIDOS</button>
          <button className="secondary-btn">CONFIGURAÇÕES</button>
        </div>
      </div>

      <div className="alertas-summary">
        <div className="alert-severity-card alta">
          <div className="severity-icon">⚠</div>
          <div className="severity-info">
            <h3>ALTA</h3>
            <div className="severity-stats">
              <div className="stat">
                <span className="stat-value">1</span>
                <span className="stat-label">PENDENTES</span>
              </div>
              <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">TOTAL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="alert-severity-card media">
          <div className="severity-icon">⚠</div>
          <div className="severity-info">
            <h3>MÉDIA</h3>
            <div className="severity-stats">
              <div className="stat">
                <span className="stat-value">1</span>
                <span className="stat-label">PENDENTES</span>
              </div>
              <div className="stat">
                <span className="stat-value">2</span>
                <span className="stat-label">TOTAL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="alert-severity-card baixa">
          <div className="severity-icon">⚠</div>
          <div className="severity-info">
            <h3>BAIXA</h3>
            <div className="severity-stats">
              <div className="stat">
                <span className="stat-value">1</span>
                <span className="stat-label">PENDENTES</span>
              </div>
              <div className="stat">
                <span className="stat-value">1</span>
                <span className="stat-label">TOTAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alertas-grid">
        <div className="alertas-card">
          <div className="card-header">
            <h3>ALERTAS RECENTES</h3>
            <div className="filter-options">
              <select>
                <option>TODOS OS ALERTAS</option>
                <option>PENDENTES</option>
                <option>RESOLVIDOS</option>
              </select>
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>TIPO</th>
                <th>MENSAGEM</th>
                <th>SEVERIDADE</th>
                <th>TIMESTAMP</th>
                <th>STATUS</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {alertas.map((alerta) => (
                <tr key={alerta.id}>
                  <td>{alerta.id}</td>
                  <td>{alerta.tipo}</td>
                  <td>{alerta.mensagem}</td>
                  <td>
                    <span
                      className={`severity-${alerta.severidade.toLowerCase()}`}
                    >
                      {alerta.severidade}
                    </span>
                  </td>
                  <td>{alerta.timestamp}</td>
                  <td>
                    <span
                      className={`status-${
                        alerta.status === "Pendente" ? "pending" : "completed"
                      }`}
                    >
                      {alerta.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      {alerta.status === "Pendente" ? (
                        <button className="action-btn resolve">Resolver</button>
                      ) : (
                        <button className="action-btn reopen">Reabrir</button>
                      )}
                      <button className="action-btn details">Detalhes</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card notifications-card">
          <div className="card-header">
            <h3>CONFIGURAÇÕES DE NOTIFICAÇÃO</h3>
          </div>
          <div className="notification-settings">
            <div className="setting-item">
              <div className="setting-label">E-mail</div>
              <div className="setting-toggle active">Ativado</div>
            </div>
            <div className="setting-item">
              <div className="setting-label">SMS</div>
              <div className="setting-toggle">Desativado</div>
            </div>
            <div className="setting-item">
              <div className="setting-label">Push</div>
              <div className="setting-toggle active">Ativado</div>
            </div>
            <div className="setting-item">
              <div className="setting-label">Som</div>
              <div className="setting-toggle active">Ativado</div>
            </div>
          </div>
        </div>

        <div className="dashboard-card alert-history-card">
          <div className="card-header">
            <h3>HISTÓRICO DE ALERTAS</h3>
          </div>
          <div className="chart-placeholder">
            <div className="chart-icon">📊</div>
            <div className="chart-text">
              GRÁFICO DE HISTÓRICO DE ALERTAS POR TIPO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alertas;
