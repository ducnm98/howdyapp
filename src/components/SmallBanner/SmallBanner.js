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
import s from './SmallBanner.css';

class SmallBanner extends React.Component {
  render() {
    const bg = this.props.bg || '/img/parallax/img6.jpg';
    const title = this.props.title || 'Courses';

    return (
      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_top"
      style={{backgroundImage: `url(${bg})`}}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_2">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_200"></div>
            <div className="grid grid_12">
              <strong className="nicdark_color_white nicdark_font_size_60 nicdark_first_font">
                {title}
              </strong>
            </div>
            <div className="nicdark_section nicdark_height_20"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SmallBanner);
