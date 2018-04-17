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
import s from './CourseBanner.css';
import moment from 'moment';

class CourseBanner extends React.Component {
  render() {
    const { eventDetail } = this.props;
    const date = moment(new Date(eventDetail.date)).format('LL')

    return (
      <div className={s.main}
      style={{backgroundImage: 'url(/img/banner/event.jpg)'}}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_2">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_200"></div>
            <div className="nicdark_padding_15">
              <div className="nicdark_width_100_percentage_all_iphone nicdark_float_left">
                <strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">{eventDetail.title}</strong>
                <div className="nicdark_section nicdark_height_20"></div>
                <div className="nicdark_display_table nicdark_float_left">
                  <img alt="" className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle" width="30" src="/img/icons/icon-calendar.svg"/>
                  <h3 className=" nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle">{date}</h3>
                  <img alt="" className="nicdark_margin_right_10 nicdark_margin_left_20 nicdark_display_table_cell nicdark_vertical_align_middle"
                    width="30" src="/img/icons/icon-clock.svg"/>
                  <h3 className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle ">{eventDetail.dateStr}</h3>
                </div>
                <div className="nicdark_section nicdark_height_20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CourseBanner);
