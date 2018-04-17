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
import s from './FindYourCourse.css';

class FindYourCourse extends React.Component {
  render() {
    return (
      <div className="nicdark_container nicdark_clearfix">
        <div className="nicdark_section nicdark_box_sizing_border_box nicdark_padding_15">
          <h2><strong>Find Your Course</strong></h2>
          <div className="nicdark_section nicdark_height_20"></div>
        </div>
        <div className="nicdark_section nicdark_box_sizing_border_box">
          <div className="nicdark_section">

              <div className="nicdark_section">
                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_15" width="15" src="/img/icons/icon-pen.svg"/>
                    <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Keyword"/>
                  </div>
                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_15" width="15" src="/img/icons/icon-list.svg"/>
                    <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Food Courses"/>
                  </div>
                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_15" width="15" src="/img/icons/icon-star.svg"/>
                    <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Premium"/>
                  </div>
              </div>
              <div className="nicdark_section">
                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_15" width="15" src="/img/icons/icon-level.svg"/>
                    <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Medium Level"/>
                  </div>
                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_15" width="15" src="/img/icons/icon-clock-grey.svg"/>
                    <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="8 Hours"/>
                  </div>

                  <div className="nicdark_width_33_percentage nicdark_padding_15 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                    <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="#">SEARCH</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FindYourCourse);
