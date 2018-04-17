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
import s from './CourseComment.css';

class CourseComment extends React.Component {
  render() {
    return (
      <div className="nicdark_section" id="tabs-4">
        <div className="nicdark_section">
          <h3>
            <strong>2 Comments</strong>
          </h3>
          <div className="nicdark_section nicdark_height_30"></div>
          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
            <div className="nicdark_display_table nicdark_float_left">
              <img alt="" className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                width="40" src="/img/avatar/avatar-chef-1.png"/>
              <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                  <strong>John Doe</strong>
                </span>September 4, 2015 at 1:24 pm</p>
            </div>

            <div className="nicdark_section nicdark_height_20"></div>
            <div className="nicdark_section">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum sit amet ex pulvinar mattis.
                Pellentesque vitae purus viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a nisi
                aliquet sollicitudin. Interdum et malesuada fames.</p>
            </div>
            <div className="nicdark_section nicdark_height_20"></div>

            <div className="nicdark_section">
              <a className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_green nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                href="#">REPLY</a>
            </div>

          </div>

          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
            <div className="nicdark_display_table nicdark_float_left">
              <img alt="" className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                width="40" src="/img/avatar/avatar-chef-2.png"/>
              <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                  <strong>John Doe</strong>
                </span>September 4, 2015 at 1:24 pm</p>
            </div>

            <div className="nicdark_section nicdark_height_20"></div>
            <div className="nicdark_section">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum sit amet ex pulvinar mattis.
                Pellentesque vitae purus viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a nisi
                aliquet sollicitudin. Interdum et malesuada fames.</p>
            </div>
            <div className="nicdark_section nicdark_height_20"></div>

            <div className="nicdark_section">
              <a className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_green nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                href="#">REPLY</a>
            </div>

          </div>



          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">

            <h3>
              <strong>Leave a Comment</strong>
            </h3>
            <div className="nicdark_section nicdark_height_30"></div>




            <div className="nicdark_section nicdark_box_sizing_border_box">

              <div className="nicdark_section">
                <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_padding_left_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0"
                    type="text" placeholder="Name"/>
                </div>
                <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_padding_right_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0"
                    type="text" placeholder="Surname"/>
                </div>
              </div>
              <div className="nicdark_section">
                <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_padding_left_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0"
                    type="text" placeholder="Email"/>
                </div>
                <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_padding_right_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0"
                    type="text" placeholder="Subject"/>
                </div>
              </div>
              <div className="nicdark_section">
                <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_padding_right_0 nicdark_padding_left_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <textarea rows="7" className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0"
                    placeholder="Message"></textarea>
                </div>
              </div>
              <div className="nicdark_section">
                <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_padding_right_0 nicdark_padding_left_0 nicdark_box_sizing_border_box nicdark_float_left">
                  <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box  nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                    href="#">SEND NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CourseComment);
