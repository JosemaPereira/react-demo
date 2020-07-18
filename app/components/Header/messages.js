import { defineMessages } from 'react-intl';

export const scope = 'components.Header';

export const headerMessages = defineMessages({
  hello: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello {name}!!'
  }
});
