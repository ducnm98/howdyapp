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

import Popup from '../Popup';
import RequestForm from '../RequestForm';
import Link from '../Link';

import s from './SpeakingMatchingItem.css';

class SpeakingMatchingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  };

  openPopup = () => {
    this.setState({
      isOpen: true
    });
  };

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const model = this.props.model;

    return (
      <div className="grid grid_3">
        <div className={s.hoverItem}>
          <div className="nicdark_section">
            <div className="nicdark_section nicdark_position_relative" style={{ height: '266px' }}>
              <img alt="" className="nicdark_section"
                src={`${model.avatar}`}
              />
            </div>

            <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
              <h2><strong>{model.displayName}</strong></h2>
              <div className="nicdark_section nicdark_height_10"></div>
              {/* <h6 className="nicdark_text_transform_uppercase nicdark_color_grey">Food Teacher</h6> */}
              <div className="nicdark_section nicdark_height_20"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula.
              </p>
              <div className="nicdark_section nicdark_height_20"></div>
              <div className="nicdark_width_50_percentage nicdark_width_50_percentage_all_iphone nicdark_float_right nicdark_text_align_right">
                <button className="nicdark_display_inline_block nicdark_border_2_solid_green nicdark_color_white nicdark_color_green_hover nicdark_bg_white_hover nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13 nicdark_float_right " onClick={this.openPopup}>
                  Nói Chuyện
                </button>

                <Popup show={this.state.isOpen}>
                  <RequestForm onClose={this.closePopup}></RequestForm>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withStyles(s)(SpeakingMatchingItem)
