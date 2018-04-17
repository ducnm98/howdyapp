import React from 'react';
import config from 'routes/config';

import Speaking from './Speaking';

async function action({ store, fetch }) {
  const user = store.getState().user;
  const activeUsers = await
    fetch(`${config.api}/user?sort=-lastAccessedAt&limit=8`)
    .then(res => res.json());;

  return {
    chunks: ['speaking'],
    title: 'Speaking',
    component: (
      <Speaking user={user} activeUsers={activeUsers} />
    ),
  };
}

export default action;
