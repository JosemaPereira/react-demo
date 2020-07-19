import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';
import { usersMessages } from './messages';

const UsersIntl = ({ intl, list }) => (
  <>
    <div className="list users">
      {_.map(list, item => (
        <div className="item">
          <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
          <h3>{`${item.first_name} ${item.last_name}`}</h3>
          <h4>{item.email}</h4>
        </div>
      ))}
    </div>
  </>
);

UsersIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Users = injectIntl(UsersIntl);
