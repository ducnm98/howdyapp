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
import s from './Events.css';

import EventItem from '../EventItem';

class Events extends React.Component {
  render() {
    return (
      <div className="nicdark_section nicdark_border_top_1_solid_grey">
        <div className="nicdark_section nicdark_height_50"></div>
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <h1 className="nicdark_font_size_50">
              <strong>Sự kiện sắp tới</strong>
            </h1>
            <div className="nicdark_section nicdark_height_10"></div>
            <h3 className=" nicdark_color_grey">Hót nhất về tiếng anh trực tuyến</h3>
          </div>
          <div className="nicdark_width_100_percentage">
            {this.props.model.map(item => {
              return <EventItem model={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Events);
