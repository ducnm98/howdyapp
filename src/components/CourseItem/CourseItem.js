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
import s from './CourseItem.css';

import Link from '../Link';

class CourseItem extends React.Component {
  render() {
    return (
      <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
        <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
          <div className="nicdark_section nicdark_border_1_solid_grey">
            <div className="nicdark_section nicdark_position_relative">
              <img alt="" className="nicdark_section" src="/img/courses/img1.png"/>
              <div className="nicdark_bg_greydark_alpha_gradient_2 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">

                <Link className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Favorities" to="/account">
                  <img alt="" className="nicdark_margin_right_60" width="25" src="/img/icons/icon-heart-white.svg"/>
                </Link>

                <a className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Compare" href="compare.html">
                  <img alt="" className="nicdark_margin_right_20 nicdark_right_0" width="25" src="/img/icons/icon-compare-white.svg"/>
                </a>

                <div className="nicdark_position_absolute nicdark_bottom_20">
                  <div className="nicdark_display_table nicdark_float_left">
                    <img alt="" className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle" width="20" src="/img/icons/icon-calendar.svg"/>
                    <p className=" nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">21/12/2017</p>
                    <img alt="" className="nicdark_margin_right_10 nicdark_margin_left_20 nicdark_display_table_cell nicdark_vertical_align_middle"
                      width="20" src="/img/icons/icon-clock.svg"/>
                    <p className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">8 Hours</p>
                  </div>
                </div>
              </div>

            </div>


            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
              <h3>
                <Link to="/eventdetail" className="nicdark_color_greydark nicdark_first_font">Fish Dishes Recipy</Link>
              </h3>
              <div className="nicdark_section nicdark_height_20"></div>
              <p>
                <Link to="/eventdetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.</Link>
              </p>
            </div>

            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_top_1_solid_grey">

              <div className="nicdark_width_33_percentage nicdark_width_50_percentage_all_iphone nicdark_display_none_all_iphone nicdark_float_left">
                <div className="nicdark_display_table nicdark_float_left">
                  <img alt="" className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                    width="25" src="/img/avatar/avatar-chef-1.png"/>
                  <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                    <Link to="/teacherdetail">John</Link>
                  </p>
                </div>
              </div>

              <div className="nicdark_width_33_percentage nicdark_width_50_percentage_all_iphone nicdark_float_left">
                <div className="nicdark_display_table nicdark_float_left">
                  <img alt="" className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle" width="23" src="/img/icons/icon-availability.svg"/>
                  <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                    <Link to="/eventdetail">70 Seats</Link>
                  </p>
                </div>
              </div>

              <div className="nicdark_width_33_percentage nicdark_width_50_percentage_all_iphone nicdark_float_left nicdark_text_align_right">
                <Link className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                  to="/eventdetail">FREE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CourseItem);
