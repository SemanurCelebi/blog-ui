import React from 'react';
import '../style/header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/">Ana Sayfa</a></li>
          <li className="header__nav-item"><a href="/blog">Blog</a></li>
          <li className="header__nav-item"><a href="/hakkimizda">Hakkımızda</a></li>
          <li className="header__nav-item"><a href="/iletisim">İletişim</a></li>
        </ul>
      </nav>
      <div className="header__account">
        <a href="/giris">Giriş</a>
        <span> / </span>
        <a href="/kayit">Kayıt</a>
      </div>
    </header>
  );
}

export default Header;