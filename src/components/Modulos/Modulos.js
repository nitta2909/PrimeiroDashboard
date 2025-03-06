import React from "react";
import "./Modulos.css";

function Modulos() {
  const modulos = [
    {
      id: 1,
      nome: "Módulo de Segurança",
      versão: "3.2.1",
      status: "Ativo",
      conexões: 8,
    },
    {
      id: 2,
      nome: "Módulo de Comunicação",
      versão: "2.8.5",
      status: "Ativo",
      conexões: 15,
    },
    {
      id: 3,
      nome: "Módulo de Processamento",
      versão: "4.1.0",
      status: "Ativo",
      conexões: 6,
    },
    {
      id: 4,
      nome: "Módulo de Armazenamento",
      versão: "2.4.7",
      status: "Desativado",
      conexões: 0,
    },
    {
      id: 5,
      nome: "Módulo de Análise",
      versão: "1.9.3",
      status: "Ativo",
      conexões: 4,
    },
    {
      id: 6,
      nome: "Módulo de Interface",
      versão: "3.6.2",
      status: "Ativo",
      conexões: 12,
    },
  ];

  const atualizacoes = [
    {
      id: 1,
      modulo: "Módulo de Segurança",
      versão_atual: "3.2.1",
      nova_versão: "3.3.0",
      prioridade: "Alta",
    },
    {
      id: 2,
      modulo: "Módulo de Comunicação",
      versão_atual: "2.8.5",
      nova_versão: "3.0.0",
      prioridade: "Média",
    },
    {
      id: 3,
      modulo: "Módulo de Interface",
      versão_atual: "3.6.2",
      nova_versão: "3.6.5",
      prioridade: "Baixa",
    },
  ];

  return (
    <div className="modulos">
      <div className="dashboard-header">
        <h2>GERENCIAMENTO DE MÓDULOS</h2>
        <div className="module-actions">
          <button className="primary-btn">ADICIONAR MÓDULO</button>
        </div>
      </div>

      <div className="dashboard-row modules-overview">
        <div className="summary-box">
          <div className="summary-value">6</div>
          <div className="summary-label">TOTAL DE MÓDULOS</div>
        </div>
        <div className="summary-box">
          <div className="summary-value">5</div>
          <div className="summary-label">MÓDULOS ATIVOS</div>
        </div>
        <div className="summary-box">
          <div className="summary-value">1</div>
          <div className="summary-label">MÓDULOS DESATIVADOS</div>
        </div>
        <div className="summary-box">
          <div className="summary-value">3</div>
          <div className="summary-label">ATUALIZAÇÕES DISPONÍVEIS</div>
        </div>
      </div>

      <div className="modulos-grid">
        <div className="modulos-card">
          <div className="card-header">
            <h3>MÓDULOS INSTALADOS</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>MÓDULO</th>
                <th>VERSÃO</th>
                <th>STATUS</th>
                <th>CONEXÕES</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {modulos.map((modulo) => (
                <tr key={modulo.id}>
                  <td>#{modulo.id.toString().padStart(3, "0")}</td>
                  <td>{modulo.nome}</td>
                  <td>{modulo.versão}</td>
                  <td>
                    <span
                      className={`status-${
                        modulo.status === "Ativo" ? "active" : "inactive"
                      }`}
                    >
                      {modulo.status}
                    </span>
                  </td>
                  <td>{modulo.conexões}</td>
                  <td>
                    <div className="action-buttons">
                      {modulo.status === "Ativo" ? (
                        <button className="action-btn deactivate">
                          Desativar
                        </button>
                      ) : (
                        <button className="action-btn activate">Ativar</button>
                      )}
                      <button className="action-btn config">Configurar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card updates-card">
          <div className="card-header">
            <h3>ATUALIZAÇÕES DISPONÍVEIS</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>MÓDULO</th>
                <th>VERSÃO ATUAL</th>
                <th>NOVA VERSÃO</th>
                <th>PRIORIDADE</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {atualizacoes.map((atualizacao) => (
                <tr key={atualizacao.id}>
                  <td>{atualizacao.modulo}</td>
                  <td>{atualizacao.versão_atual}</td>
                  <td>{atualizacao.nova_versão}</td>
                  <td>
                    <span
                      className={`priority-${atualizacao.prioridade.toLowerCase()}`}
                    >
                      {atualizacao.prioridade}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn update">Atualizar</button>
                    <button className="action-btn details">Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-card dependencies-card">
          <div className="card-header">
            <h3>DIAGRAMA DE DEPENDÊNCIAS</h3>
          </div>
          <div className="dependencies-diagram">
            <div className="diagram-placeholder">
              <span className="diagram-icon">⊞</span>
              <span className="diagram-text">
                VISUALIZAÇÃO DE DEPENDÊNCIAS ENTRE MÓDULOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modulos;
