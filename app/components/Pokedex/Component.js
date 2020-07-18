import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { pokedexMessages } from './messages';

const PokedexIntl = ({ intl }) => (
  <>
    <div className="list">
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
      <div className="item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        <h3>Nombre</h3>
        <h4>Tipo 1</h4>
        <h4>Tipo 2</h4>
      </div>
    </div>
    <div className="aside">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
      <h3>Nombre</h3>
      <h4>Tipo 1</h4>
      <h4>Tipo 2</h4>
      <h5>Caracteristicas</h5>
    </div>
  </>
);

PokedexIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Pokedex = injectIntl(PokedexIntl);
