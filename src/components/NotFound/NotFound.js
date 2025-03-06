import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h2>PÁGINA NÃO ENCONTRADA</h2>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <Link to="/" className="return-btn">
          RETORNAR AO DASHBOARD
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
