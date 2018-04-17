/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/courses',
      load: () => import(/* webpackChunkName: 'courses' */ './courses'),
    },
    {
      path: '/videos',
      load: () => import(/* webpackChunkName: 'videos' */ './videos'),
    },
    {
      path: '/events',
      load: () => import(/* webpackChunkName: 'events' */ './events'),
    },
    {
      path: '/event/:slug',
      load: () => import(/* webpackChunkName: 'event-detail' */ './eventdetail'),
    },
    {
      path: '/cart',
      load: () => import(/* webpackChunkName: 'cart' */ './cart'),
    },
    {
      path: '/checkout',
      load: () => import(/* webpackChunkName: 'checkout' */ './checkout'),
    },
    {
      path: '/thankyou',
      load: () => import(/* webpackChunkName: 'thankyou' */ './thankyou'),
    },
    {
      path: '/teachers',
      load: () => import(/* webpackChunkName: 'teachers' */ './teachers'),
    },
    {
      path: '/teacherdetail',
      load: () => import(/* webpackChunkName: 'teacherdetail' */ './teacherdetail'),
    },
    {
      path: '/account',
      load: () => import(/* webpackChunkName: 'account' */ './account'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: `/blog/:slug`,
      load: () => import(/* webpackChunkName: 'blogDetail' */ './blogdetail'),
    },
    {
      path: '/blogs',
      load: () => import(/* webpackChunkName: 'blogs' */ './blogs'),
    },
    {
      path: '/blogs/:page',
      load: () => import(/* webpackChunkName: 'blogs' */ './blogs'),
    },
    {
      path: '/dashboard',
      load: () => import(/* webpackMode: 'eager' */ './dashboard'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/speaking',
      load: () => import(/* webpackChunkName: 'speaking' */ './speaking'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - howdy.chat`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
