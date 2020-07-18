import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { usersMessages } from './messages';

const UsersIntl = ({ intl }) => (
  <span>{intl.formatMessage(usersMessages.hello)}</span>
);

UsersIntl.propTypes = {
  intl: intlShape.isRequired
};

export const Users = injectIntl(UsersIntl);
