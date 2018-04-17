/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Contact from './Contact';

function action({ store }) {
  const user = store.getState().user;
  return {
    chunks: ['contact'],
    title: 'Contact',
    component: (
      <Contact user={user} />
    ),
  };
}

export default action;
