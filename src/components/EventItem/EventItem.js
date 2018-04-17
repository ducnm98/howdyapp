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
import s from './EventItem.css';
import moment from 'moment';

import Link from '../Link';

class EventItem extends React.Component {
  render() {
    const { model } = this.props;
    const avatar = model.author.avatar || '/img/avatar/avatar-chef-1.png';
    const teacher =
      model.author.displayName ||
      model.author.name.last + ' ' + model.author.name.first;
    const date = moment(new Date(model.date)).format('LL');
    const dateTime = model.dateStr;
    const image = model.image
      ? model.image.url
      : '/img/avatar/avatar-chef-1.png';
    const brief = model.desc.split('\r\n')[0].slice(0, 128);

    return (
      <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
        <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
          <div className="nicdark_section nicdark_border_1_solid_grey">
            <div className="nicdark_section nicdark_position_relative">
              <img alt="" className="nicdark_section" src={model.image.url} />
              <div className="nicdark_bg_greydark_alpha_gradient_2 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                <Link
                  className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0"
                  title="Add To Favorities"
                  to="/account"
                >
                  <img
                    alt=""
                    className="nicdark_margin_right_60"
                    width="25"
                    src="/img/icons/icon-heart-white.svg"
                  />
                </Link>

                <a
                  className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0"
                  title="Add To Compare"
                  href="compare.html"
                >
                  <img
                    alt=""
                    className="nicdark_margin_right_20 nicdark_right_0"
                    width="25"
                    src="/img/icons/icon-compare-white.svg"
                  />
                </a>

                <div className="nicdark_position_absolute nicdark_bottom_20">
                  <div className="nicdark_display_table nicdark_float_left">
                    <img
                      alt=""
                      className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle"
                      width="20"
                      src="/img/icons/icon-calendar.svg"
                    />
                    <p className=" nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                      {date}
                    </p>
                    <img
                      alt=""
                      className="nicdark_margin_right_10 nicdark_margin_left_20 nicdark_display_table_cell nicdark_vertical_align_middle"
                      width="20"
                      src="/img/icons/icon-clock.svg"
                    />
                    <p className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                      {dateTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
              <h3>
                <Link
                  to={`/event/${model.slug}`}
                  className="nicdark_color_greydark nicdark_first_font"
                >
                  {model.title}
                </Link>
              </h3>
              <div className="nicdark_section nicdark_height_20" />
              <p>
                <Link to={`/event/${model.slug}`}>
                  <div
                    contentEditable="false"
                    className={s.brief}
                    dangerouslySetInnerHTML={{
                      __html: `${brief}`,
                    }}
                  />
                </Link>
              </p>
            </div>

            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_top_1_solid_grey">
              <div className="nicdark_width_50_percentage nicdark_width_50_percentage_all_iphone nicdark_display_none_all_iphone nicdark_float_left">
                <div className="nicdark_display_table nicdark_float_left">
                  <img
                    alt=""
                    className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                    width="25"
                    src={avatar}
                  />
                  <p className="nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_15">
                    <Link to="/teacherdetail">{teacher}</Link>
                  </p>
                </div>
              </div>

              <div className="nicdark_width_50_percentage nicdark_width_50_percentage_all_iphone nicdark_float_left nicdark_text_align_right">
                <a
                  href={`/event/${model.slug}`}
                  className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                >
                  FREE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(EventItem);
