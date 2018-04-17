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
import s from './Teachers.css';

import Link from '../Link';

class Teachers extends React.Component {
  render() {
    return (
      <div className="nicdark_section">
        <div className="nicdark_container nicdark_clearfix">
          <div className="nicdark_section nicdark_height_50"></div>
          <div className="grid grid_12">
            <h1 className="nicdark_font_size_50">
              <strong>Our Teachers</strong>
            </h1>
            <div className="nicdark_section nicdark_height_10"></div>
            <h3 className=" nicdark_color_grey">Best Chef In Our School</h3>
            <div className="nicdark_section nicdark_height_10"></div>
          </div>
          <div className="grid grid_6">
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-2.png"/>
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone">
                    <strong>John Mcallister</strong>
                  </h2>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">Food Teacher</h6>
                  <div className="nicdark_section nicdark_height_20"></div>
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam
                    augue.</p>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                    to="/teacherdetail">KNOW ME</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid_6">
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-3.png"/>
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
                  <h2 className="nicdark_margin_top_20_all_iphone">
                    <strong>Jane Doe</strong>
                  </h2>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">VEGAN TEACHER</h6>
                  <div className="nicdark_section nicdark_height_20"></div>
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam
                    augue.</p>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                    to="/teacherdetail">KNOW ME</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid_6">
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">

                <div className="nicdark_section nicdark_box_sizing_border_box">

                  <div className="nicdark_section nicdark_position_relative">

                    <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-4.png"/>

                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>

                    </div>

                  </div>


                </div>

              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">


                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">

                  <h2 className="nicdark_margin_top_20_all_iphone">
                    <strong>Mary Mgrayan</strong>
                  </h2>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">ITALIAN EXPERT</h6>
                  <div className="nicdark_section nicdark_height_20"></div>
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam
                    augue.</p>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                    to="/teacherdetail">KNOW ME</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid_6">
            <div className="nicdark_section">
              <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
                <div className="nicdark_section nicdark_box_sizing_border_box">
                  <div className="nicdark_section nicdark_position_relative">
                    <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-5.png"/>
                    <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_box_sizing_border_box nicdark_text_align_center">
                        <div className="nicdark_display_inline_block">
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                          <img alt="" width="15" className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                        </div>
                      </div>

                    </div>

                  </div>


                </div>

              </div>
              <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">

                <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">

                  <h2 className="nicdark_margin_top_20_all_iphone">
                    <strong>Hanna Sprite</strong>
                  </h2>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">ASIAN TEACHER</h6>
                  <div className="nicdark_section nicdark_height_20"></div>
                  <p className="nicdark_color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam
                    augue.</p>
                  <div className="nicdark_section nicdark_height_10"></div>
                  <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                    to="/teacherdetail">KNOW ME</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nicdark_section nicdark_height_70"></div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Teachers);
