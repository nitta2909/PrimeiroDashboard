import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-dot"></div>
        </div>
        <h2 className="loading-text">
          INICIANDO PROJETO<span className="dot-animation">...</span>
        </h2>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <div className="loading-status">Carregando módulos criado pelo Mauricio...</div>
      </div>
    </div>
  );
}

export default Loading;
