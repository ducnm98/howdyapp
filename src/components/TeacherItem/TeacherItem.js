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
import s from './TeacherItem.css';

import Link from '../Link';

class TeacherItem extends React.Component {
  render() {
    return (
      <div className="grid grid_3">
        <div className="nicdark_section">
          <div className="nicdark_section ">
            <div className="nicdark_section nicdark_position_relative">
              <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-2.png"/>

              <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">

                <div className="nicdark_position_absolute nicdark_bottom_20">
                  <div className="nicdark_display_inline_block">
                    <img alt="" width="15" className="nicdark_margin_right_10" src="/img/icons/icon-twitter-white.svg"/>
                    <img alt="" width="15" className="nicdark_margin_right_10" src="/img/icons/icon-pinterest-white.svg"/>
                    <img alt="" width="15" className="nicdark_margin_right_10" src="/img/icons/icon-linkedin-white.svg"/>
                    <img alt="" width="15" className="nicdark_margin_right_10" src="/img/icons/icon-google-white.svg"/>
                    <img alt="" width="15" className="nicdark_margin_right_10" src="/img/icons/icon-instagram-white.svg"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
              <h2>
                <strong>John Mcallister</strong>
              </h2>
              <div className="nicdark_section nicdark_height_10"></div>
              <h6 className="nicdark_text_transform_uppercase nicdark_color_grey">Food Teacher</h6>
              <div className="nicdark_section nicdark_height_20"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula.</p>
              <div className="nicdark_section nicdark_height_20"></div>
              <Link to="/teacherdetail" className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13">VIEW PROFILE</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TeacherItem);
