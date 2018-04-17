/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Blogs from './Blogs';
import config from '../config';

const numberItemOnPage = 12;
let pageNumber = 1;

async function action({ store, fetch, params }) {
  const user = store.getState().user;
  const query = {
    state: 'published',
  };
  let numberBlog = await fetch(`${config.api}/blog/count`).then(res => res.json());
  if (typeof parseInt(params.page) == 'number') {
    pageNumber = parseInt(params.page);
  }
  const dataBlog = await fetch(
    `${config.api}/blog?query=${JSON.stringify(query)}&sort=-publishedDate&populate=author&limit=${numberItemOnPage}&skip=${(pageNumber - 1) * numberItemOnPage}`)
    .then(res => res.json());

  return {
    chunks: ['blogs'],
    title: 'Blogs',
    component: (
      <Blogs
        user={user}
        blogData={dataBlog}
        totalPage={Math.round(numberBlog.count / numberItemOnPage)}
        currentPage={pageNumber}
      />
    ),
  };
}

export default action;
