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
import s from './TeacherBanner.css';

class TeacherBanner extends React.Component {
  render() {
    return (
      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_bottom"
      style={{backgroundImage: 'url(img/parallax/img6.jpg)'}}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_2">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_200"></div>
            <div className="grid grid_6">
              <div className="nicdark_display_table nicdark_float_left nicdark_display_none_all_iphone">
                <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                  <img alt="" className="nicdark_margin_right_20 nicdark_border_radius_100_percentage " width="150" src="img/avatar/avatar-chef-3.png"/>
                </div>
                <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                  <strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">John Doe</strong>
                  <div className="nicdark_display_inline_block nicdark_margin_left_20">
                    <img alt="" width="20" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg"/>
                    <img alt="" width="20" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg"/>
                    <img alt="" width="20" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg"/>
                    <img alt="" width="20" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg"/>
                    <img alt="" width="20" className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg"/>
                  </div>
                  <div className="nicdark_section nicdark_height_5"></div>
                  <h3 className="nicdark_color_white">Food Teacher</h3>
                  <div className="nicdark_section nicdark_height_30"></div>
                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                    href="#">FOLLOW ME</a>
                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                    href="#">MESSAGE ME</a>
                </div>
              </div>
              <div className="nicdark_section nicdark_display_none nicdark_display_block_all_iphone nicdark_text_align_center">
                <img alt="" className=" nicdark_border_radius_100_percentage " width="100" src="img/avatar/avatar-chef-1.png"/>
                <div className="nicdark_section nicdark_height_10"></div>
                <div className="nicdark_section nicdark_text_align_center">
                  <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg"/>
                  <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg"/>
                  <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg"/>
                  <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg"/>
                  <img alt="" width="15" className="" src="img/icons/icon-instagram-white.svg"/>
                </div>

                <div className="nicdark_section nicdark_height_10"></div>
                <h2>
                  <strong className="nicdark_color_white nicdark_first_font">John Doe</strong>
                </h2>
                <div className="nicdark_section nicdark_height_5"></div>
                <h5 className="nicdark_color_white">Food Teacher</h5>

                <div className="nicdark_section nicdark_height_20"></div>

                <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_font_size_13 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                  href="#">FOLLOW ME</a>
                <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                  href="#">MESSAGE ME</a>
              </div>
              <div className="nicdark_section nicdark_height_20"></div>
            </div>
            <div className="grid grid_6 nicdark_text_align_right nicdark_text_align_left_responsive nicdark_text_align_center_all_iphone">
              <div className="nicdark_section nicdark_height_80 nicdark_display_none_all_responsive"></div>
              <div className="nicdark_display_inline_block nicdark_text_align_center  nicdark_margin_right_40">
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_font_size_20_all_iphone nicdark_line_height_20_all_iphone">
                  <strong>12</strong>
                </h1>
                <div className="nicdark_section nicdark_height_5"></div>
                <p className="nicdark_color_white nicdark_font_size_10_all_iphone">COURSES</p>
              </div>

              <div className="nicdark_display_inline_block nicdark_text_align_center nicdark_margin_right_40">
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_font_size_20_all_iphone nicdark_line_height_20_all_iphone">
                  <strong>126</strong>
                </h1>
                <div className="nicdark_section nicdark_height_5"></div>
                <p className="nicdark_color_white nicdark_font_size_10_all_iphone">FOLLOWER</p>
              </div>

              <div className="nicdark_display_inline_block nicdark_text_align_center">
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_font_size_20_all_iphone nicdark_line_height_20_all_iphone">
                  <strong>4,5</strong>
                </h1>
                <div className="nicdark_section nicdark_height_5"></div>
                <p className="nicdark_color_white nicdark_font_size_10_all_iphone">RATING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TeacherBanner);
