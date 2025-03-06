import React from "react";
import "./Processos.css";

function Processos() {
  const processos = [
    {
      id: "P1042",
      nome: "Monitoramento de Rede",
      prioridade: "Alta",
      estado: "Em execução",
      cpu: "15%",
      memoria: "256MB",
    },
    {
      id: "P2371",
      nome: "Verificação de Segurança",
      prioridade: "Alta",
      estado: "Em execução",
      cpu: "22%",
      memoria: "512MB",
    },
    {
      id: "P3046",
      nome: "Backup de Dados",
      prioridade: "Média",
      estado: "Pendente",
      cpu: "0%",
      memoria: "0MB",
    },
    {
      id: "P4157",
      nome: "Sincronização de Servidores",
      prioridade: "Média",
      estado: "Em execução",
      cpu: "8%",
      memoria: "128MB",
    },
    {
      id: "P5289",
      nome: "Análise de Logs",
      prioridade: "Baixa",
      estado: "Pausado",
      cpu: "0%",
      memoria: "64MB",
    },
    {
      id: "P6372",
      nome: "Atualização de Sistema",
      prioridade: "Alta",
      estado: "Pendente",
      cpu: "0%",
      memoria: "0MB",
    },
    {
      id: "P7461",
      nome: "Escaneamento de Vulnerabilidades",
      prioridade: "Alta",
      estado: "Em execução",
      cpu: "35%",
      memoria: "1024MB",
    },
  ];

  return (
    <div className="processos">
      <div className="dashboard-header">
        <h2>MONITORAMENTO DE PROCESSOS</h2>
        <div className="time-info">
          <span className="time-label">ÚLTIMA ATUALIZAÇÃO:</span>
          <span className="time-value">12:42:18</span>
        </div>
      </div>

      <div className="processos-summary">
        <div className="summary-card">
          <h3>TOTAL DE PROCESSOS</h3>
          <div className="summary-value">7</div>
        </div>
        <div className="summary-card">
          <h3>EM EXECUÇÃO</h3>
          <div className="summary-value">4</div>
        </div>
        <div className="summary-card">
          <h3>PENDENTES</h3>
          <div className="summary-value">2</div>
        </div>
        <div className="summary-card">
          <h3>PAUSADOS</h3>
          <div className="summary-value">1</div>
        </div>
      </div>

      <div className="processos-grid">
        <div className="processos-card">
          <div className="card-header">
            <h3>PROCESSOS ATIVOS</h3>
            <div className="card-actions">
              <button className="filter-btn">FILTRAR</button>
              <button className="sort-btn">ORDENAR</button>
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>PROCESSO</th>
                <th>PRIORIDADE</th>
                <th>ESTADO</th>
                <th>CPU</th>
                <th>MEMÓRIA</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {processos.map((processo) => (
                <tr key={processo.id}>
                  <td>{processo.id}</td>
                  <td>{processo.nome}</td>
                  <td>
                    <span
                      className={`priority-${processo.prioridade.toLowerCase()}`}
                    >
                      {processo.prioridade}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-${processo.estado
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {processo.estado}
                    </span>
                  </td>
                  <td>{processo.cpu}</td>
                  <td>{processo.memoria}</td>
                  <td>
                    <div className="process-actions">
                      {processo.estado === "Em execução" ? (
                        <button className="action-btn pause">Pausar</button>
                      ) : processo.estado === "Pausado" ? (
                        <button className="action-btn resume">Retomar</button>
                      ) : (
                        <button className="action-btn start">Iniciar</button>
                      )}
                      <button className="action-btn stop">Parar</button>
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
            <h3>UTILIZAÇÃO DE RECURSOS</h3>
          </div>
          <div className="resource-usage">
            <div className="resource-item">
              <div className="resource-info">
                <span>CPU Total</span>
                <span>80%</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-info">
                <span>Memória Total</span>
                <span>65%</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-info">
                <span>Disco</span>
                <span>45%</span>
              </div>
              <div className="resource-bar">
                <div className="resource-fill" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processos;
