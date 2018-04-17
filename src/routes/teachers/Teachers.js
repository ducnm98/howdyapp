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
import s from './Teachers.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import SmallBanner from '../../components/SmallBanner';
import Footer from '../../components/Footer';

import TeacherItem from '../../components/TeacherItem';
import Pagination from '../../components/Pagination';

class Main extends React.Component {
  render() {
    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar/>
            <HeaderBar />
            <SmallBanner title="Teachers" />

            <Height h={'50px'} />
            <div className="nicdark_section ">
              <div className="nicdark_container nicdark_clearfix">
                <div className="nicdark_width_100_percentage">
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />
                  <TeacherItem />

                  <Height h={'30px'} />
                  <Pagination />
                </div>
              </div>
            </div>

            <Height h={'50px'} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
