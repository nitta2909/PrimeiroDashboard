import React from "react";
import "./Energia.css";

function Energia() {
  const fontes = [
    {
      id: 1,
      nome: "Fonte Principal",
      potência: "1200W",
      carga_atual: "62%",
      status: "Online",
    },
    {
      id: 2,
      nome: "Fonte Secundária",
      potência: "1200W",
      carga_atual: "0%",
      status: "Standby",
    },
    {
      id: 3,
      nome: "UPS Backup",
      potência: "800W",
      carga_atual: "100%",
      status: "Carregado",
    },
    {
      id: 4,
      nome: "Gerador de Emergência",
      potência: "2000W",
      carga_atual: "N/A",
      status: "Offline",
    },
  ];

  const consumo = [
    { hora: "00:00", valor: 720 },
    { hora: "04:00", valor: 680 },
    { hora: "08:00", valor: 850 },
    { hora: "12:00", valor: 920 },
    { hora: "16:00", valor: 980 },
    { hora: "20:00", valor: 860 },
    { hora: "24:00", valor: 740 },
  ];

  const sistemas = [
    { nome: "Servidor Principal", consumo: "320W", porcentagem: 45 },
    { nome: "Sistema de Refrigeração", consumo: "250W", porcentagem: 32 },
    { nome: "Rede e Comunicação", consumo: "80W", porcentagem: 12 },
    { nome: "Iluminação", consumo: "35W", porcentagem: 6 },
    { nome: "Outros", consumo: "28W", porcentagem: 5 },
  ];

  return (
    <div className="energia">
      <div className="dashboard-header">
        <h2>MONITORAMENTO DE ENERGIA</h2>
        <div className="energy-status">
          <div className="status-label">CONSUMO ATUAL:</div>
          <div className="status-value">745W</div>
        </div>
      </div>

      <div className="energia-summary">
        <div className="energia-gauge">
          <div className="gauge-circle">
            <div className="gauge-value">89.7%</div>
            <div className="gauge-label">EFICIÊNCIA</div>
          </div>
        </div>
        <div className="energia-stats">
          <div className="stat-box">
            <div className="stat-value">24.8 kWh</div>
            <div className="stat-label">CONSUMO DIÁRIO</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">12.6 kW</div>
            <div className="stat-label">PICO DE CONSUMO</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">8.2 kWh</div>
            <div className="stat-label">ECONOMIA</div>
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>FONTES DE ENERGIA</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>FONTE</th>
                <th>POTÊNCIA</th>
                <th>CARGA ATUAL</th>
                <th>STATUS</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {fontes.map((fonte) => (
                <tr key={fonte.id}>
                  <td>#{fonte.id}</td>
                  <td>{fonte.nome}</td>
                  <td>{fonte.potência}</td>
                  <td>{fonte.carga_atual}</td>
                  <td>
                    <span className={`status-${fonte.status.toLowerCase()}`}>
                      {fonte.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn config">Configurar</button>
                      <button className="action-btn test">Testar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card consumption-chart">
          <div className="card-header">
            <h3>CONSUMO DE ENERGIA (24 HORAS)</h3>
          </div>
          <div className="chart-placeholder">
            <div className="chart-icon">📈</div>
            <div className="chart-text">
              GRÁFICO DE CONSUMO ENERGÉTICO NAS ÚLTIMAS 24 HORAS
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>DISTRIBUIÇÃO DE CONSUMO</h3>
          </div>
          <div className="consumption-distribution">
            {sistemas.map((sistema, index) => (
              <div key={index} className="distribution-item">
                <div className="distribution-info">
                  <span className="system-name">{sistema.nome}</span>
                  <span className="system-value">{sistema.consumo}</span>
                </div>
                <div className="distribution-bar">
                  <div
                    className="distribution-fill"
                    style={{ width: `${sistema.porcentagem}%` }}
                  ></div>
                </div>
                <div className="distribution-percentage">
                  {sistema.porcentagem}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>CONFIGURAÇÕES DE ENERGIA</h3>
          </div>
          <div className="energy-settings">
            <div className="setting-group">
              <h4>MODO DE ENERGIA</h4>
              <div className="energy-mode-options">
                <button className="mode-btn active">Normal</button>
                <button className="mode-btn">Economia</button>
                <button className="mode-btn">Performance</button>
              </div>
            </div>
            <div className="setting-group">
              <h4>ALTERNÂNCIA AUTOMÁTICA</h4>
              <div className="setting-toggle active">Ativado</div>
            </div>
            <div className="setting-group">
              <h4>TESTES PROGRAMADOS</h4>
              <div className="setting-toggle">Desativado</div>
            </div>
            <div className="setting-group">
              <h4>LIMITES DE ALERTA</h4>
              <button className="config-btn">Configurar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Energia;
