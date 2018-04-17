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

import Popup from 'components/Popup';
import RequestForm from 'components/RequestForm';
import Link from 'components/Link';

import s from './MemberItem.css';

class MemberItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
  };

  togglePopup = (value) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const model = this.props.model || {};
    return (
      <div className={s.main}>
        <div className="nicdark_section">
          <div className="nicdark_float_left nicdark_width_35_percentage nicdark_width_100_percentage_all_iphone">
            <div className="nicdark_section nicdark_box_sizing_border_box">
              <div className="nicdark_section nicdark_position_relative">
                <img alt={model.displayName} className="nicdark_section"
                  src={model.avatar || '/img/avatar/avatar-chef-2.png'}
                />
              </div>
            </div>
          </div>

          <div className="nicdark_float_left nicdark_width_65_percentage nicdark_width_100_percentage_all_iphone">
            <div className="nicdark_section nicdark_padding_left_20 nicdark_padding_left_0_all_iphone nicdark_box_sizing_border_box">
              <h2 className="nicdark_margin_top_20_all_iphone">
                <strong>{model.displayName || 'Member Name'}</strong>
              </h2>
              <div className="nicdark_section nicdark_height_10"></div>
              <h6 className="nicdark_text_transform_uppercase nicdark_color_grey nicdark_second_font">Howdy's tutor</h6>
              <div className="nicdark_section nicdark_height_20"></div>
              <p className="nicdark_color_grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean egestas magna at porttitor vehicula nullam augue.
              </p>
              <div className="nicdark_section nicdark_height_10"></div>
              {/* <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_color_greydark_hover nicdark_bg_white_hover nicdark_transition_all_08_ease nicdark_border_1_solid_grey_2 nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                to="/teacherdetail">Nói Chuyện</Link> */}
              <button className="nicdark_display_inline_block nicdark_border_2_solid_green nicdark_color_white nicdark_color_green_hover nicdark_bg_white_hover nicdark_bg_green nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13 nicdark_float_right " onClick={this.togglePopup}>
                Nói Chuyện
              </button>
            </div>
          </div>
        </div>

        <Popup show={this.state.isOpen}>
          <RequestForm model={model} onClose={this.togglePopup} />
        </Popup>
      </div>
    );
  }
}

export default withStyles(s)(MemberItem);
