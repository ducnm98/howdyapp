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
import s from './CourseProgram.css';

class CourseProgram extends React.Component {
  render() {
    return (
      <div className="nicdark_section" id="tabs-2">
        <h3>
          <strong>Our Program</strong>
        </h3>
        <div className="nicdark_section nicdark_height_30"></div>
        <div className="nicdark_section">
          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box">
            <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
              <table>
                <tr>
                  <td>
                    <img alt="" width="20" src="/img/icons/icon-file-green.svg"/>
                  </td>
                  <td>
                    <span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">LESSON</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
              <h4 className="nicdark_padding_5 nicdark_second_font">Introducing best Italian recipies</h4>
            </div>
            <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
              <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                href="#">PREVIEW</a>
            </div>
          </div>

          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box">
            <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">

              <table>
                <tr>
                  <td>
                    <img alt="" width="20" src="/img/icons/icon-file-green.svg"/>
                  </td>
                  <td>
                    <span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">PDF</span>
                  </td>
                </tr>
              </table>

            </div>
            <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
              <h4 className="nicdark_padding_5 nicdark_second_font">Download course slides</h4>
            </div>
            <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
              <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                href="#">PREVIEW</a>
            </div>
          </div>

          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box ">
            <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">

              <table>
                <tr>
                  <td>
                    <img alt="" width="20" src="/img/icons/icon-play-green.svg"/>
                  </td>
                  <td>
                    <span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">VIDEO</span>
                  </td>
                </tr>
              </table>

            </div>
            <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
              <h4 className="nicdark_padding_5 nicdark_second_font">Cook your first Lasagne</h4>
            </div>
            <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
              <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                href="#">PREVIEW</a>
            </div>
          </div>


        </div>


      </div>
    );
  }
}

export default withStyles(s)(CourseProgram);
