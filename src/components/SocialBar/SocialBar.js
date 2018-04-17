/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from '../Link';
import s from './SocialBar.css';

class SocialBar extends React.Component {
  render() {
    const user = this.props.user;
    let userAction = (
      <div className={s.profile}>
        <img alt="user" src="/img/icons/icon-user-white.svg" />
        <a href="/login/facebook" className={s.username}>
          LOGIN WITH FACEBOOK
        </a>
      </div>
    );

    if (user && user.displayName) {
      userAction = (
        <div className={s.profile}>
          <img alt={user.displayName} src={user.avatar} />
          <span className={s.username}>{user.displayName}</span>
        </div>
      )
    };

    return (
      <div className={s.main}>
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_6 nicdark_padding_botttom_10 nicdark_padding_top_10 nicdark_text_align_center_responsive">
            <div className="nicdark_navigation_top_header_3">
              <ul>
                <li>
                  <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-share-white.svg" />
                  <a className=" nicdark_line_height_18 nicdark_color_white" href="#">OUR SOCIAL</a>
                  <ul className="nicdark_sub_menu">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/howdy.chat">Facebook</a>
                    </li>
                  </ul>
                  <a target="_blank" href="https://www.facebook.com/howdy.chat">
                    <img alt="facebook icon" className="nicdark_margin_left_10 nicdark_margin_top_2 nicdark_display_none_all_responsive" width="12" src="/img/icons/icon-facebook-white.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.right}>
            {userAction}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SocialBar);
