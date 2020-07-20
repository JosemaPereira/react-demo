import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Router, Link } from 'react-router-dom';
import { history } from '../../utils/history';

const HeaderIntl = ({ intl }) => (
  <header id="header">
    <div className="wrap">
      <div id="logo">
        <span className="gear icon">S</span>
        <h3>Josema Pereira</h3>
      </div>
      <Router history={history}>
        <nav id="menu">
          <ul>
            <li>
              <Link to="/user">Aplicacion usuarios</Link>
            </li>
            <li>
              <Link to="/pokedex">Aplicacion Pokedex</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  </header>
);

HeaderIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Header = injectIntl(HeaderIntl);
