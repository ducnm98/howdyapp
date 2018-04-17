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
import s from './CourseDesc.css';

class CourseDesc extends React.Component {
  render() {
    return (
      <div className="nicdark_section" id="tabs-1">
        <h3>
          <strong>Course Description</strong>
        </h3>
        <div className="nicdark_section nicdark_height_20"></div>
        <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus,
          sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum
          nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc.
          Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum
          ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
        <div className="nicdark_section nicdark_height_40"></div>

        <h3>
          <strong>Requirements</strong>
        </h3>

        <div className="nicdark_section nicdark_height_20"></div>
        <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus,
          sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum
          nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc.
          Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum
          ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
        <div className="nicdark_section nicdark_height_50"></div>

        <div className="nicdark_section">
          <a className="nicdark_display_inline_block nicdark_padding_8 nicdark_first_font nicdark_margin_right_10 nicdark_color_greydark nicdark_padding_left_0"
            href="#">Tag :</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#"># Vegan Food</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#"># Recipies</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#">Vegetarian</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#">Fruit</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#"># Italian Food</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#"># Pizza</a>
          <a className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
            href="#">Lasagne</a>
        </div>

        <div className="nicdark_section nicdark_height_30"></div>

        <div className="nicdark_section">
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-facebook-color.svg"/>
          </a>
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-twitter-color.svg"/>
          </a>
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-pinterest-color.svg"/>
          </a>
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-linkedin-color.svg"/>
          </a>
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-google-color.svg"/>
          </a>
          <a href="#">
            <img alt="" width="40" className="nicdark_margin_right_10" src="/img/icons/icon-mail-color.svg"/>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CourseDesc);
