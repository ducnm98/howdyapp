/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import BlogDetail from './BlogDetail';
import config from '../config';

async function action({ store, params, fetch }) {
  const user = store.getState().user;
  let slug = params.slug;
  const querySlug = {
    slug: slug,
  };
  let blogData = await fetch(`${config.api}/blog?query=${JSON.stringify(querySlug)}&populate=author`).then(res => res.json());
  return {
    chunks: ['blogDetail'],
    title: 'BlogDetail',
    component: <BlogDetail user={user} blogDetail={blogData[0]} />,
  };
}

export default action;
