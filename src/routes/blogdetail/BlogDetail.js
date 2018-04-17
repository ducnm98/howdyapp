/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlogDetail.css';

import Height from 'components/Height';
import SocialBar from 'components/SocialBar';
import HeaderBar from 'components/HeaderBar';
import Footer from 'components/Footer';
import BlogDetail from 'components/BlogDetail';

class Main extends React.Component {
  render() {
    const { blogDetail, user } = this.props;
    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar user={user} />
            <HeaderBar />

            <BlogDetail blogDetail={blogDetail} />

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
