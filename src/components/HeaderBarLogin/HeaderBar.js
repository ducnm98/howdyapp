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
import s from './HeaderBar.css';

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

class HeaderBar extends React.Component {
  render() {
    let mainClass = 'nicdark_bg_white';
    let iconColor = 'grey';
    if (this.props.absoluteHeader) {
      mainClass = 'nicdark_position_absolute';
      iconColor = 'white';
    }

    return (
      <div className="nicdark_section nicdark_position_relative">
        <div className={`nicdark_section ${mainClass}`}>
          <div className="nicdark_container nicdark_clearfix nicdark_position_relative">
            <div className="grid grid_12 nicdark_display_none_all_responsive">
              <div className="nicdark_section nicdark_height_10"></div>

              <Link to="/">
                <Logo />
              </Link>

              {/* <div className={`nicdark_float_right nicdark_position_relative nicdark_height_25 nicdark_display_none_all_responsive ${s.w50}`}>
                <Link to="/cart">
                  <img alt="" className="nicdark_opacity_05_hover nicdark_transition_all_08_ease nicdark_position_absolute nicdark_top_3_negative nicdark_left_0 nicdark_margin_left_20"
                    width="25" src="/img/icons/icon-cart-grey.svg" />
                </Link>
                <a className="nicdark_bg_orange nicdark_color_white nicdark_padding_5 nicdark_border_radius_100_percentage nicdark_font_size_8 nicdark_line_height_5 nicdark_position_absolute nicdark_left_0 nicdark_top_10_negative nicdark_margin_left_40"
                  href="#">2</a>
              </div> */}

              <div className="nicdark_navigation_3 nicdark_text_align_right nicdark_float_right nicdark_display_none_all_responsive">
                <ul>
                  <li>
                    <Link to="/speaking">SPEAKING</Link>
                  </li>
                  <li>
                    <Link to="/teachers">TEACHERS</Link>
                  </li>
                  <li>
                    <Link to="/blogs">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>

              <div className="nicdark_section nicdark_height_10"></div>
            </div>

            <div className="nicdark_width_50_percentage nicdark_text_align_center_all_iphone nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_display_none nicdark_display_block_responsive">
              <div className="nicdark_section nicdark_height_20"></div>
              <Link to="/">
                <Logo mobile />
              </Link>
            </div>

            <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_display_none nicdark_display_block_responsive">
              <div className="nicdark_section nicdark_height_20"></div>
              <div className="nicdark_float_right nicdark_width_100_percentage nicdark_text_align_right nicdark_text_align_center_all_iphone">
                <a className="nicdark_open_navigation_3_sidebar_content" href="#">
                  <img alt="" className="nicdark_margin_right_20" width="25" src="/img/icons/icon-menu-grey.svg" />
                </a>
                {/* <div className="nicdark_position_relative nicdark_display_inline_block">
                  <Link to="/cart">
                    <img alt="" width="25" src="/img/icons/icon-cart-grey.svg" />
                  </Link>
                  <a className="nicdark_bg_orange nicdark_color_white nicdark_padding_5 nicdark_border_radius_100_percentage nicdark_font_size_8 nicdark_line_height_5 nicdark_position_absolute nicdark_left_0 nicdark_top_10_negative nicdark_margin_left_20"
                    href="#">2</a>
                </div> */}
              </div>
              <div className="nicdark_section nicdark_height_20"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBar);
