import React from 'react';
import { injectIntl } from 'react-intl';

export const Main = injectIntl(({ intl }) => (
  <header id="header">
    <div className="wrap">
      <div id="logo">
        <span className="gear icon">S</span>
        <h3>Josema Pereira</h3>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <a href="/user">Aplicacion usuarios</a>
          </li>
          <li>
            <a href="/pokedex">Aplicacion Pokedex</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
));
