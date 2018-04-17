/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Event from './Event';
import config from '../config';

async function action({ store, params }) {
  const user = store.getState().user;
  let slug = params.slug;
  const querySlug = {
    slug: slug,
  };
  let eventData = await fetch(`${config.api}/event?query=${JSON.stringify(querySlug)}&populate=author`).then(res => res.json());
  return {
    chunks: ['event-detail'],
    title: 'Event',
    component: (
      <Event user={user} eventDetail={eventData[0]} />
    ),
  };
}

export default action;
