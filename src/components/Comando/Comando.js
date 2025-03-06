import React, { useState } from "react";
import "./Comando.css";

function Comando() {
  const [commandHistory, setCommandHistory] = useState([
    {
      id: 1,
      comando: "system status",
      resposta: "Todos os sistemas operacionais.",
      timestamp: "07-03-2025 11:42:15",
    },
    {
      id: 2,
      comando: "show users",
      resposta: "5 usuários ativos no momento.",
      timestamp: "07-03-2025 11:40:03",
    },
    {
      id: 3,
      comando: "network scan",
      resposta: "Escaneamento completo. 28 dispositivos encontrados.",
      timestamp: "07-03-2025 11:35:27",
    },
    {
      id: 4,
      comando: "backup status",
      resposta: "Último backup: 07-03-2025 03:00. Status: Sucesso.",
      timestamp: "07-03-2025 11:33:48",
    },
  ]);

  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    // Em uma aplicação real, processaríamos o comando aqui
    // Por enquanto, apenas adicionamos ao histórico com uma resposta simulada
    if (currentCommand.trim() !== "") {
      const newCommand = {
        id: commandHistory.length + 1,
        comando: currentCommand,
        resposta: "Comando executado com sucesso.",
        timestamp: new Date().toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      setCommandHistory([newCommand, ...commandHistory]);
      setCurrentCommand("");
    }
  };

  const atalhos = [
    {
      nome: "STATUS",
      comando: "system status",
      descrição: "Verifica o status de todos os sistemas",
    },
    {
      nome: "LOGS",
      comando: "show logs recent",
      descrição: "Exibe logs recentes do sistema",
    },
    {
      nome: "REDE",
      comando: "network scan",
      descrição: "Escaneia dispositivos na rede",
    },
    {
      nome: "USUÁRIOS",
      comando: "show users",
      descrição: "Lista usuários ativos",
    },
    {
      nome: "BACKUP",
      comando: "backup now",
      descrição: "Inicia um backup manual",
    },
    {
      nome: "REINICIAR",
      comando: "system restart",
      descrição: "Reinicia todos os sistemas",
    },
  ];

  return (
    <div className="comando">
      <div className="dashboard-header">
        <h2>TERMINAL DE COMANDO</h2>
        <div className="terminal-status">
          <span className="status-indicator online"></span>
          <span className="status-text">TERMINAL ATIVO</span>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card terminal-card">
          <div className="card-header">
            <h3>CONSOLE</h3>
          </div>
          <div className="terminal-console">
            <div className="console-output">
              <div className="console-welcome">
                SYSTEM_V.3.21 • TERMINAL X1
                <br />
                Bem-vindo ao Terminal de Comando. Digite "help" para ver
                comandos disponíveis.
              </div>

              {commandHistory.map((item) => (
                <div key={item.id} className="console-item">
                  <div className="console-command">
                    <span className="prompt">X1@SYSTEM&gt;</span> {item.comando}
                  </div>
                  <div className="console-response">{item.resposta}</div>
                  <div className="console-timestamp">{item.timestamp}</div>
                </div>
              ))}
            </div>

            <form className="console-input" onSubmit={handleCommandSubmit}>
              <span className="prompt">X1@SYSTEM&gt;</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                placeholder="Digite um comando..."
              />
            </form>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>ATALHOS DE COMANDO</h3>
          </div>
          <div className="command-shortcuts">
            {atalhos.map((atalho, index) => (
              <div key={index} className="shortcut-item">
                <div className="shortcut-name">{atalho.nome}</div>
                <div className="shortcut-command">{atalho.comando}</div>
                <div className="shortcut-description">{atalho.descrição}</div>
                <button
                  className="shortcut-btn"
                  onClick={() => setCurrentCommand(atalho.comando)}
                >
                  Usar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>AJUDA RÁPIDA</h3>
          </div>
          <div className="help-content">
            <div className="help-section">
              <h4>COMANDOS BÁSICOS</h4>
              <ul className="help-list">
                <li>
                  <code>help</code> - Exibe lista de comandos disponíveis
                </li>
                <li>
                  <code>system status</code> - Verifica status do sistema
                </li>
                <li>
                  <code>show logs [qty]</code> - Exibe logs recentes (qty
                  opcional)
                </li>
                <li>
                  <code>clear</code> - Limpa o console
                </li>
              </ul>
            </div>
            <div className="help-section">
              <h4>GERENCIAMENTO DE SISTEMAS</h4>
              <ul className="help-list">
                <li>
                  <code>system [start|stop|restart] [system_name]</code> -
                  Controla sistemas
                </li>
                <li>
                  <code>module [load|unload] [module_name]</code> - Gerencia
                  módulos
                </li>
                <li>
                  <code>status [component_name]</code> - Verifica status de
                  componente
                </li>
              </ul>
            </div>
            <div className="help-section">
              <h4>OPERAÇÕES DE REDE</h4>
              <ul className="help-list">
                <li>
                  <code>network scan</code> - Escaneia dispositivos na rede
                </li>
                <li>
                  <code>network status</code> - Verifica status da rede
                </li>
                <li>
                  <code>ping [address]</code> - Testa conectividade
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>HISTÓRICO DE SESSÃO</h3>
          </div>
          <div className="session-history">
            <div className="session-item">
              <div className="session-time">07-03-2025 08:15:22</div>
              <div className="session-info">
                <div className="session-user">Administrador</div>
                <div className="session-ip">192.168.1.45</div>
              </div>
              <div className="session-status login">Login</div>
            </div>
            <div className="session-item">
              <div className="session-time">06-03-2025 18:42:09</div>
              <div className="session-info">
                <div className="session-user">Administrador</div>
                <div className="session-ip">192.168.1.45</div>
              </div>
              <div className="session-status logout">Logout</div>
            </div>
            <div className="session-item">
              <div className="session-time">06-03-2025 14:37:51</div>
              <div className="session-info">
                <div className="session-user">Técnico</div>
                <div className="session-ip">192.168.1.62</div>
              </div>
              <div className="session-status logout">Logout</div>
            </div>
            <div className="session-item">
              <div className="session-time">06-03-2025 13:28:15</div>
              <div className="session-info">
                <div className="session-user">Técnico</div>
                <div className="session-ip">192.168.1.62</div>
              </div>
              <div className="session-status login">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comando;
