/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import newsQuery from './news.graphql';
import Home from './Home';

async function action({ client, fetch }) {
  // const q = await client.query({
  //   query: newsQuery,
  // });

  const q = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(r => r.json())
    .then(body => body);
  console.log('body', q);

  return {
    chunks: ['demo'],
    title: 'Demo',
    component: (
      <Home />
    ),
  };
}

export default action;
