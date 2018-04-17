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
import s from './CourseTeacher.css';

class CourseTeacher extends React.Component {
  render() {
    return (
      <div className="nicdark_section" id="tabs-3">
        <h3>
          <strong>Our Main Teachers</strong>
        </h3>
        <div className="nicdark_section nicdark_height_30"></div>
        <div className="nicdark_section">
          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
            <div className="nicdark_display_table nicdark_float_left">
              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <img alt="" className="nicdark_width_50_all_iphone nicdark_margin_right_20 nicdark_border_radius_100_percentage " width="100"
                  src="img/avatar/avatar-chef-2.png"/>
              </div>
              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <h3 className="">
                  <strong>John Doe</strong>
                </h3>
                <div className="nicdark_section nicdark_height_5"></div>
                <h5 className="nicdark_color_grey">Food Teacher</h5>
                <div className="nicdark_section nicdark_height_20"></div>

                <div className="nicdark_section">
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-facebook-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-twitter-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-color.svg"/>
                </div>

              </div>

            </div>

            <div className="nicdark_section nicdark_height_20"></div>

            <p className="nicdark_section">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus,
              sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum. </p>
          </div>
          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">


            <div className="nicdark_display_table nicdark_float_left">

              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <img alt="" className="nicdark_width_50_all_iphone nicdark_margin_right_20 nicdark_border_radius_100_percentage " width="100"
                  src="img/avatar/avatar-chef-3.png"/>
              </div>

              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <h3 className="">
                  <strong>Jane Rightness</strong>
                </h3>
                <div className="nicdark_section nicdark_height_5"></div>
                <h5 className="nicdark_color_grey">Vegan Specialist</h5>
                <div className="nicdark_section nicdark_height_20"></div>

                <div className="nicdark_section">
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-facebook-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-twitter-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-color.svg"/>
                </div>

              </div>

            </div>

            <div className="nicdark_section nicdark_height_20"></div>

            <p className="nicdark_section">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus,
              sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum. </p>


          </div>



          <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">


            <div className="nicdark_display_table nicdark_float_left">

              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <img alt="" className="nicdark_width_50_all_iphone nicdark_margin_right_20 nicdark_border_radius_100_percentage " width="100"
                  src="img/avatar/avatar-chef-4.png"/>
              </div>

              <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                <h3 className="">
                  <strong>Nick Hopiness</strong>
                </h3>
                <div className="nicdark_section nicdark_height_5"></div>
                <h5 className="nicdark_color_grey">Asian Chef</h5>
                <div className="nicdark_section nicdark_height_20"></div>

                <div className="nicdark_section">
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-facebook-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-twitter-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-pinterest-color.svg"/>
                  <img alt="" width="25" className="nicdark_margin_right_10" src="img/icons/icon-linkedin-color.svg"/>
                </div>
              </div>
            </div>
            <div className="nicdark_section nicdark_height_20"></div>
            <p className="nicdark_section">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus,
              sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CourseTeacher);
