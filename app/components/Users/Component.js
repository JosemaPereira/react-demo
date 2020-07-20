/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';
import { usersMessages } from './messages';

const UsersIntl = ({
  intl,
  list,
  paginator,
  currentPage,
  actions: { setNewCurrentPageSaga }
}) => (
  <>
    <div className="list users">
      {_.map(list, item => (
        <div className="item" key={_.uniqueId()}>
          <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
          <h3>{`${item.first_name} ${item.last_name}`}</h3>
          <h4>{item.email}</h4>
        </div>
      ))}
    </div>
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

UsersIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Users = injectIntl(UsersIntl);
