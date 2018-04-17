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

import Videos from './Videos';

async function action({ store, fetch }) {
  const user = store.getState().user;
  const queryEvent = {
    state: 'published',
  }
  const videoList = await
    fetch(`${config.api}/video?query=
      ${JSON.stringify(queryEvent)}
      &limit=8&populate=author&sort=-createdAt`
    ).then(res => res.json());

  return {
    chunks: ['videos'],
    title: 'Videos',
    component: (
      <Videos user={user} videoList={videoList} />
    ),
  };
}

export default action;
