import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { pokedexMessages } from './messages';
import _ from 'lodash';

const PokedexIntl = ({ intl, list }) => (
  <>
    <div className="list">
      {_.map(list, item => (
        <div className="item" key={_.uniqueId()}>
          <img src={item.front_default} alt="pokemon" />
          <h3>{`#${item.id} ${item.name}`}</h3>
          {_.map(item.types, type => (
            <h4 key={_.uniqueId()}>{type.type.name}</h4>
          ))}
        </div>
      ))}
    </div>
    <div className="aside">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon"
      />
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
