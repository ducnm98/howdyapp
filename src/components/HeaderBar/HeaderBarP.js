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
import s from './HeaderBarP.css';

import Link from '../Link';

const Logo = (props) => {
  let mobile = '';
  if (props.mobile) {
    mobile = s.mobile;
  }
  return (
    <span className={`${s.logo} ${mobile}`}>Howdy</span>
  );
}

class HeaderBarP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false,
    };

    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({
      sidebar: !this.state.sidebar,
    });
  }

  render() {
    let style = {};
    if (this.state.sidebar) {
      style.right = 0;
    }

    return (
      <div>
        <div style={style} className="nicdark_navigation_2_sidebar_content nicdark_padding_40 nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_y_auto nicdark_transition_all_08_ease nicdark_bg_green nicdark_height_100_percentage nicdark_position_fixed nicdark_width_300 nicdark_right_300_negative nicdark_z_index_9">
          <img onClick={this.toggleSideBar} alt="" width="25" className="nicdark_close_navigation_2_sidebar_content nicdark_cursor_pointer nicdark_right_20 nicdark_top_20 nicdark_position_absolute"
            src="/img/icons/icon-close-white.svg"/>
          <div className="nicdark_navigation_2_sidebar">
            <ul className={s.menu}>
              <li>
                <Link to="/blogs">Bài Viết</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/speaking">Luyện Nói</Link>
              </li>
              <li>
                <Link to="/events">Sự Kiện</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nicdark_section nicdark_position_relative">
          <div className="nicdark_section nicdark_position_absolute">
            <div className="nicdark_container nicdark_clearfix nicdark_position_relative">
              <div className="grid grid_12 nicdark_display_none_all_responsive">
                <div className="nicdark_section nicdark_height_10"></div>
                <Link to="/">
                  <Logo />
                </Link>

                <div className="nicdark_navigation_2 nicdark_text_align_right nicdark_float_right nicdark_display_none_all_responsive">
                  <ul>
                    <li>
                      <Link to="/blogs">Bài Viết</Link>
                    </li>
                    <li>
                      <Link to="/videos">Videos</Link>
                    </li>
                    <li>
                      <Link to="/speaking">Luyện Nói</Link>
                    </li>
                    <li>
                      <Link to="/events">Sự kiện</Link>
                    </li>
                    <li>
                      <Link to="/contact">Liên Hệ</Link>
                    </li>
                  </ul>
                </div>
                <div className="nicdark_section nicdark_height_10"></div>
              </div>
              <div className="nicdark_width_50_percentage nicdark_text_align_center_all_iphone nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_display_none nicdark_display_block_responsive">
                <div className="nicdark_section nicdark_height_20"></div>
                <a href="/">
                  <Logo mobile />
                </a>
              </div>
              <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_display_none nicdark_display_block_responsive">
                <div className="nicdark_section nicdark_height_20"></div>
                <div className="nicdark_float_right nicdark_width_100_percentage nicdark_text_align_right nicdark_text_align_center_all_iphone">
                  <a onClick={this.toggleSideBar}
                    className="nicdark_open_navigation_2_sidebar_content">
                    <img alt="" className="nicdark_margin_right_20" width="25" src="/img/icons/icon-menu-white.svg"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBarP);
