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
import s from './Points.css';

class Points extends React.Component {
  render() {
    return (
      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_bottom"
      style={{backgroundImage: 'url(/img/banner/girls.jpg)'}}>
        <div className="nicdark_section nicdark_bg_greydark_alpha">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_80"></div>
            <div className={s.title}>
              <img alt="" className="nicdark_position_absolute" width="55" src="/img/icons/icon-check-white.svg" />
              <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_padding_left_80 nicdark_line_height_50">
                <strong>
                  <span className="nicdark_border_bottom_4_solid_white">
                    Tại sao nên sử dụng Howdy?
                  </span>
                </strong>
              </h1>
            </div>
            <div className="nicdark_section nicdark_height_1"></div>
            <div className="grid grid_4">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40 nicdark_color_white">
                  <strong>
                    <span className="nicdark_color_f1f1f1 nicdark_font_size_25">01.</span> Cộng đồng
                  </strong>
                </h1>
                <div className="nicdark_section nicdark_height_20"></div>
                <p className="nicdark_color_white">
                  Cộng đồng kết nối những bạn trẻ có nhu cầu luyện tập tiếng Anh trên khắp cả nước.
                </p>
              </div>
            </div>
            <div className="grid grid_4">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40 nicdark_color_white">
                  <strong>
                    <span className="nicdark_color_f1f1f1 nicdark_font_size_25">02.</span> Dễ dàng
                  </strong>
                </h1>
                <div className="nicdark_section nicdark_height_20"></div>
                <p className="nicdark_color_white">
                  Tìm kiếm Partner để luyện nói hay chữa bài viết vô cùng đơn giản và dễ dàng.
                </p>
              </div>
            </div>
            <div className="grid grid_4">
              <div className="nicdark_padding_20">
                <h1 className="nicdark_font_size_40 nicdark_color_white">
                  <strong>
                    <span className="nicdark_color_f1f1f1 nicdark_font_size_25">03.</span> Miễn phí
                  </strong>
                </h1>
                <div className="nicdark_section nicdark_height_20"></div>
                <p className="nicdark_color_white">Các dịch vụ cung cấp bởi Howdy đều hoàn toàn miễn phí cho tất cả người dùng.</p>
              </div>
            </div>
            <div className="nicdark_section nicdark_height_80"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Points);
