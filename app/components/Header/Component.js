import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const HeaderIntl = ({ intl }) => (
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
);

HeaderIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Header = injectIntl(HeaderIntl);
