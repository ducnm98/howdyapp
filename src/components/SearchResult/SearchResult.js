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
import s from './SearchResult.css';

class SearchResult extends React.Component {
  render() {
    return (
      <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
        <div className="nicdark_section nicdark_box_sizing_border_box ">
          <div className="nicdark_width_100_percentage nicdark_float_left">
            <h2>
              <strong>Showing 1-9 of 18 results</strong>
            </h2>
          </div>
          <div className="nicdark_section nicdark_height_10"></div>
          <div className="nicdark_width_70_percentage nicdark_float_left nicdark_width_100_percentage_all_iphone">
            <div className="nicdark_section nicdark_height_20"></div>
            <div className="nicdark_width_50_percentage nicdark_float_left">
              <div className="nicdark_section nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative nicdark_padding_right_20">
                <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_5" width="15" src="/img/icons/icon-pen.svg"/>
                <input className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                  type="text" placeholder="Keyword"/>
              </div>
            </div>
            <div className="nicdark_width_50_percentage nicdark_float_left">
              <div className="nicdark_float_left nicdark_width_100_percentage_all_iphone">
                <a className="nicdark_bg_white_hover nicdark_color_green_hover nicdark_border_2_solid_green nicdark_transition_all_08_ease nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                  href="courses.html">SEARCH</a>
              </div>
            </div>
          </div>
          <div className="nicdark_width_30_percentage nicdark_float_left nicdark_text_align_right nicdark_width_100_percentage_all_iphone">
            <div className="nicdark_section nicdark_height_20"></div>
            <div className="nicdark_display_inline_block nicdark_bg_orange nicdark_border_1_solid_orange nicdark_padding_8 nicdark_margin_right_10 nicdark_border_radius_3">
              <a className="nicdark_tooltip_jquery" title="Advanced Settings" href="#">
                <img alt="" className="nicdark_float_left" width="23" src="/img/icons/icon-settings-white.svg"/>
              </a>
            </div>
            <div className="nicdark_display_inline_block nicdark_bg_green nicdark_border_1_solid_green nicdark_padding_8 nicdark_margin_right_10 nicdark_border_radius_3">
              <a className="nicdark_tooltip_jquery" title="List View" href="#">
                <img alt="" className="nicdark_float_left" width="23" src="/img/icons/icon-list-white.svg"/>
              </a>
            </div>

            <div className="nicdark_display_inline_block nicdark_border_1_solid_grey_2 nicdark_padding_8 nicdark_border_radius_3">
              <a className="nicdark_tooltip_jquery" title="Grid View" href="#">
                <img alt="" className="nicdark_float_left" width="23" src="/img/icons/icon-grid-grey.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchResult);
