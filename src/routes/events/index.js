/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import config from 'routes/config';

import Events from './Events';

async function action({ store, fetch }) {
  const user = store.getState().user;
  const queryEvent = {
    state: 'published',
  }
  const eventList = await
    fetch(`${config.api}/event?query=${JSON.stringify(queryEvent)}&limit=8&populate=author&sort=-date`)
    .then(res => res.json());

  return {
    chunks: ['event-detail'],
    title: 'Events',
    component: (
      <Events user={user} eventList={eventList} />
    ),
  };
}

export default action;
