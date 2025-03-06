import React from "react";
import "./Dados.css";

function Dados() {
  const armazenamento = [
    {
      id: 1,
      nome: "Banco de Dados Principal",
      tipo: "SSD",
      capacidade: "2 TB",
      usado: "1.2 TB",
      porcentagem: 60,
      status: "Operacional",
    },
    {
      id: 2,
      nome: "Armazenamento de Logs",
      tipo: "HDD",
      capacidade: "8 TB",
      usado: "6.4 TB",
      porcentagem: 80,
      status: "Operacional",
    },
    {
      id: 3,
      nome: "Backup Primário",
      tipo: "RAID",
      capacidade: "12 TB",
      usado: "9.6 TB",
      porcentagem: 80,
      status: "Operacional",
    },
    {
      id: 4,
      nome: "Backup Secundário",
      tipo: "Cloud",
      capacidade: "15 TB",
      usado: "5.7 TB",
      porcentagem: 38,
      status: "Sincronizando",
    },
  ];

  const databases = [
    {
      id: 1,
      nome: "Sistema Operacional",
      tamanho: "546 GB",
      conexões: 28,
      performance: "98%",
    },
    {
      id: 2,
      nome: "Logs e Registros",
      tamanho: "1.2 TB",
      conexões: 5,
      performance: "95%",
    },
    {
      id: 3,
      nome: "Configurações",
      tamanho: "124 MB",
      conexões: 32,
      performance: "99%",
    },
    {
      id: 4,
      nome: "Métricas",
      tamanho: "842 GB",
      conexões: 14,
      performance: "94%",
    },
    {
      id: 5,
      nome: "Usuários",
      tamanho: "376 MB",
      conexões: 8,
      performance: "97%",
    },
  ];

  const backupHistory = [
    {
      id: 1,
      data: "07-03-2025 03:00",
      tipo: "Completo",
      tamanho: "2.3 TB",
      duração: "42 min",
      status: "Sucesso",
    },
    {
      id: 2,
      data: "06-03-2025 03:00",
      tipo: "Incremental",
      tamanho: "412 GB",
      duração: "18 min",
      status: "Sucesso",
    },
    {
      id: 3,
      data: "05-03-2025 03:00",
      tipo: "Incremental",
      tamanho: "386 GB",
      duração: "16 min",
      status: "Sucesso",
    },
    {
      id: 4,
      data: "04-03-2025 03:00",
      tipo: "Completo",
      tamanho: "2.2 TB",
      duração: "41 min",
      status: "Sucesso",
    },
    {
      id: 5,
      data: "03-03-2025 03:00",
      tipo: "Incremental",
      tamanho: "278 GB",
      duração: "12 min",
      status: "Falha",
    },
    {
      id: 6,
      data: "02-03-2025 03:00",
      tipo: "Incremental",
      tamanho: "352 GB",
      duração: "15 min",
      status: "Sucesso",
    },
  ];

  return (
    <div className="dados">
      <div className="dashboard-header">
        <h2>GERENCIAMENTO DE DADOS</h2>
        <div className="data-actions">
          <button className="primary-btn">NOVO BACKUP</button>
          <button className="secondary-btn">ANALISAR</button>
        </div>
      </div>

      <div className="dados-summary">
        <div className="summary-card">
          <div className="summary-icon">⌬</div>
          <div className="summary-content">
            <div className="summary-value">28.7 TB</div>
            <div className="summary-label">CAPACIDADE TOTAL</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⌬</div>
          <div className="summary-content">
            <div className="summary-value">22.9 TB</div>
            <div className="summary-label">ESPAÇO USADO</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⌬</div>
          <div className="summary-content">
            <div className="summary-value">5.8 TB</div>
            <div className="summary-label">ESPAÇO LIVRE</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⌬</div>
          <div className="summary-content">
            <div className="summary-value">79.8%</div>
            <div className="summary-label">USO TOTAL</div>
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>UNIDADES DE ARMAZENAMENTO</h3>
          </div>
          <div className="storage-units">
            {armazenamento.map((unidade) => (
              <div key={unidade.id} className="storage-item">
                <div className="storage-header">
                  <div className="storage-name">{unidade.nome}</div>
                  <div
                    className={`storage-status status-${unidade.status.toLowerCase()}`}
                  >
                    {unidade.status}
                  </div>
                </div>
                <div className="storage-details">
                  <div className="storage-type">{unidade.tipo}</div>
                  <div className="storage-usage">
                    {unidade.usado} / {unidade.capacidade}
                  </div>
                </div>
                <div className="storage-bar">
                  <div
                    className={`storage-fill ${
                      unidade.porcentagem > 90
                        ? "critical"
                        : unidade.porcentagem > 75
                        ? "warning"
                        : "normal"
                    }`}
                    style={{ width: `${unidade.porcentagem}%` }}
                  ></div>
                </div>
                <div className="storage-actions">
                  <button className="action-btn analyze">Analisar</button>
                  <button className="action-btn optimize">Otimizar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card databases-card">
          <div className="card-header">
            <h3>BANCOS DE DADOS</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>TAMANHO</th>
                <th>CONEXÕES</th>
                <th>PERFORMANCE</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {databases.map((db) => (
                <tr key={db.id}>
                  <td>#{db.id.toString().padStart(2, "0")}</td>
                  <td>{db.nome}</td>
                  <td>{db.tamanho}</td>
                  <td>{db.conexões}</td>
                  <td>
                    <div className="performance-indicator">
                      <div
                        className="performance-fill"
                        style={{ width: db.performance }}
                      ></div>
                      <span>{db.performance}</span>
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn backup">Backup</button>
                      <button className="action-btn query">Consultar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-card backup-history-card">
          <div className="card-header">
            <h3>HISTÓRICO DE BACKUPS</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>DATA</th>
                <th>TIPO</th>
                <th>TAMANHO</th>
                <th>DURAÇÃO</th>
                <th>STATUS</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {backupHistory.map((backup) => (
                <tr key={backup.id}>
                  <td>{backup.data}</td>
                  <td>{backup.tipo}</td>
                  <td>{backup.tamanho}</td>
                  <td>{backup.duração}</td>
                  <td>
                    <span className={`status-${backup.status.toLowerCase()}`}>
                      {backup.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn restore">Restaurar</button>
                      <button className="action-btn download">Download</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dados;
