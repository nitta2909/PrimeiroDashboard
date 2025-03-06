import React from "react";
import "./Header.css";
;


function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-icon">MN</div>
        <h1>MauricioNitta DEV.</h1>
      </div>

      <div className="user-info">
        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Buscar..." />
        </div>

        <div className="notifications">
          <span className="notifications-icon">⚠</span>
          <span className="notifications-badge">5</span>
        </div>

        <div className="avatar">X1</div>
      </div>
    </div>
  );
}

export default Header;
