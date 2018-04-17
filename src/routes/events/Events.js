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

import Height from 'components/Height';
import SocialBar from 'components/SocialBar';
import HeaderBar from 'components/HeaderBar';
import SmallBanner from 'components/SmallBanner';
import Footer from 'components/Footer';

import EventItem from 'components/EventItem';
import SearchResult from 'components/SearchResult';
import FindYourCourse from 'components/FindYourCourse';
import Pagination from 'components/Pagination';

import s from './Events.css';

class Main extends React.Component {
  render() {
    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar user={this.props.user} />
            <HeaderBar />
            <SmallBanner title="Sự Kiện" bg="/img/banner/event.jpg" />

            <Height h={'50px'} />
            <div className="nicdark_section">
              <div className="nicdark_width_100_percentage">
                <div className="nicdark_width_100_percentage">
                {this.props.eventList.map(i => {
                  return <EventItem model={i} />;
                })}
                </div>

                <Height h={'50px'} />
                <Pagination />
              </div>
            </div>

            <Height h={'70px'} />
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
