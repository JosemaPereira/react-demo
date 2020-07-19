/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';

const PokedexIntl = ({
  list,
  selected,
  paginator,
  currentPage,
  actions: { setPokemonSelectedSaga, setNewCurrentPageSaga }
}) => (
  <>
    <div className="list">
      {_.map(list, item => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="item"
          key={_.uniqueId()}
          onClick={() => setPokemonSelectedSaga(item)}
        >
          <img src={item.front_default} alt={item.name} />
          <h3>{`#${item.id} ${item.name}`}</h3>
        </div>
      ))}
    </div>
    {Object.keys(selected).length > 0 && (
      <div className="aside">
        <img src={selected.front_default} alt={selected.name} />
        <h3>{`#${selected.id} ${selected.name}`}</h3>
        <div className="pokeType">
          <h4>Type:</h4>
          {_.map(selected.types, type => (
            <p className="pokeTypeItem" key={_.uniqueId()}>
              {type.type.name}
            </p>
          ))}
        </div>

        {_.map(selected.abilities, ab => (
          <h5 key={_.uniqueId()}>
            <b>{ab.is_hidden ? 'Hidden Ability' : 'Ability'}</b>:{' '}
            {ab.ability.name}
          </h5>
        ))}
      </div>
    )}
    <div className="clearFix" />
    <div className="paginator">
      {paginator.showPrev && (
        <p
          className="page short"
          onClick={() => {
            setNewCurrentPageSaga(currentPage - 1);
          }}
        >{`<< Anterior`}</p>
      )}
      {_.map(paginator.array, item => (
        <p
          className={currentPage === item ? 'page active' : 'page'}
          key={_.uniqueId()}
          onClick={() => {
            if (item !== '...' && item !== currentPage) {
              setNewCurrentPageSaga(item);
            }
          }}
        >
          {item}
        </p>
      ))}
      {paginator.showNext && (
        <p
          className="page short"
          onClick={() => {
            setNewCurrentPageSaga(currentPage + 1);
          }}
        >{`Siguiente >>`}</p>
      )}
    </div>
  </>
);

PokedexIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Pokedex = injectIntl(PokedexIntl);
