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
import mqtt from 'core/mqtt';

import Height from 'components/Height';
import SocialBar from 'components/SocialBar';
import Footer from 'components/Footer';
import SpeakingMatching from 'components/SpeakingMatching';
import SmallBanner from 'components/SmallBanner';
import HeaderBar from 'components/HeaderBar';
import MemberItem from 'components/MemberItem';

import s from './Speaking.css';

class Main extends React.Component {
  componentDidMount() {
    mqtt.on('connect', () => {
      mqtt.subscribe('goingsunny_system_meeting');
    });
  }

  render() {
    return (
      <div className="nicdark_site">
        <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
          <SocialBar user={this.props.user} />
          <HeaderBar />
          <SmallBanner title="Luyện Nói" bg="/img/banner/talking.jpg" />
          <div className="nicdark_section nicdark_height_50"></div>

          <div className="nicdark_section">
            <div className="nicdark_container nicdark_clearfix">
              {this.props.activeUsers.map(user => {
                return (
                  <MemberItem model={user} key={user._id} />
                );
              })}
            </div>
          </div>

          <div className="nicdark_section nicdark_height_70"></div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
