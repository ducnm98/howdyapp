/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Account from './Account';

function action({ store }) {
  const user = store.getState().user;
  return {
    chunks: ['account'],
    title: 'Account',
    component: (
      <Account user={user} />
    ),
  };
}

export default action;
