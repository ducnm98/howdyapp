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
import s from './Home.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import HeroBanner from '../../components/HeroBanner';
import Courses from '../../components/Courses';
import Teachers from '../../components/Teachers';
import Points from '../../components/Points';
import Footer from '../../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className="nicdark_site">
        <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
          <SocialBar/>
          <HeaderBar/>
          <HeroBanner/>

          <Courses/>
          <Height h={'70px'} />
          <Points/>
          <Teachers/>

          <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
