import React from "react";
import "./Dashboard.css";
import StatCard from "./StatCard";
import SimpleChart from "../Charts/SimpleChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>SISTEMA PRINCIPAL</h2>
        <div className="date-selector">
          <select>
            <option>TEMPO REAL</option>
            <option>ÚLTIMAS 12 HORAS</option>
            <option>ÚLTIMAS 48 HORAS</option>
            <option>ÚLTIMOS 7 DIAS</option>
          </select>
        </div>
      </div>

      <div className="stat-cards">
        <StatCard title="CAPACIDADE ENERGÉTICA" value="89.7%" icon="♦" />
        <StatCard title="INTEGRIDADE DO SISTEMA" value="97.3%" icon="◉" />
        <StatCard title="ALERTAS ATIVOS" value="3" icon="⚠" />
        <StatCard title="DESEMPENHO MÉDIO" value="92.5%" icon="⟲" />
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h3>MONITORAMENTO DE RECURSOS</h3>
        </div>
        <SimpleChart />
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>ALERTAS RECENTES</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SISTEMA</th>
                <th>NÍVEL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#A0172</td>
                <td>NÚCLEO CENTRAL</td>
                <td>BAIXO</td>
                <td>
                  <span className="status-completed">RESOLVIDO</span>
                </td>
              </tr>
              <tr>
                <td>#B3291</td>
                <td>REDE DE ENERGIA</td>
                <td>MÉDIO</td>
                <td>
                  <span className="status-pending">PENDENTE</span>
                </td>
              </tr>
              <tr>
                <td>#C9853</td>
                <td>SEGURANÇA</td>
                <td>ALTO</td>
                <td>
                  <span className="status-pending">PENDENTE</span>
                </td>
              </tr>
              <tr>
                <td>#D1037</td>
                <td>COMUNICAÇÃO</td>
                <td>MÉDIO</td>
                <td>
                  <span className="status-cancelled">FALHA</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>STATUS DO SISTEMA</h3>
          </div>
          <div className="system-status">
            <div className="status-item">
              <div className="status-label">CPU</div>
              <div className="status-bar">
                <div className="status-fill" style={{ width: "67%" }}></div>
              </div>
              <div className="status-value">67%</div>
            </div>
            <div className="status-item">
              <div className="status-label">MEMÓRIA</div>
              <div className="status-bar">
                <div className="status-fill" style={{ width: "42%" }}></div>
              </div>
              <div className="status-value">42%</div>
            </div>
            <div className="status-item">
              <div className="status-label">ARMAZENAMENTO</div>
              <div className="status-bar">
                <div className="status-fill" style={{ width: "89%" }}></div>
              </div>
              <div className="status-value">89%</div>
            </div>
            <div className="status-item">
              <div className="status-label">REDE</div>
              <div className="status-bar">
                <div className="status-fill" style={{ width: "78%" }}></div>
              </div>
              <div className="status-value">78%</div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>LOGS DO TERMINAL</h3>
          </div>
          <div className="terminal-logs">
            <div className="log-entry">
              <span className="log-time">22:47:03</span>{" "}
              <span className="log-status success">✓</span> Sistema iniciado com
              sucesso
            </div>
            <div className="log-entry">
              <span className="log-time">22:51:17</span>{" "}
              <span className="log-status warning">!</span> Tentativa de acesso
              não autorizado detectada
            </div>
            <div className="log-entry">
              <span className="log-time">22:53:45</span>{" "}
              <span className="log-status success">✓</span> Firewall atualizado
            </div>
            <div className="log-entry">
              <span className="log-time">22:58:12</span>{" "}
              <span className="log-status info">i</span> Backup automático
              iniciado
            </div>
            <div className="log-entry">
              <span className="log-time">23:05:33</span>{" "}
              <span className="log-status error">✗</span> Falha na comunicação
              com o módulo externo
            </div>
            <div className="log-entry">
              <span className="log-time">23:09:47</span>{" "}
              <span className="log-status success">✓</span> Módulo de energia
              estável
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
