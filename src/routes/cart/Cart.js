/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cart.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import SmallBanner from '../../components/SmallBanner';
import Footer from '../../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar/>
            <HeaderBar />
            <SmallBanner title="Cart" />

            <Height h={'50px'} />
            <div className="nicdark_section">

              <div className="nicdark_container nicdark_clearfix">

                <div className="grid grid_8">

                  <div className="nicdark_section nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">

                    <table className="nicdark_section">
                      <thead>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 nicdark_width_25_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Product</h6>
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_30_percentage">
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_15_percentage">
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_10_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Qnt</h6>
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_15_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Total</h6>
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_5_percentage">
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20">
                            <img alt="" className="nicdark_section" src="/img/courses/img1.png"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <h3>
                              <strong>Learn Sushi</strong>
                            </h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p>$ 50,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <input className="nicdark_color_greydark nicdark_first_font nicdark_text_align_center nicdark_font_size_20 nicdark_bg_white nicdark_border_bottom_2_solid_grey nicdark_border_0 nicdark_padding_right_0 nicdark_padding_left_0" type="number" min="0" max="10" step="1" value="1"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="nicdark_color_greydark">$ 50,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <img alt="" width="15" src="/img/icons/icon-remove-red.svg"/>
                          </td>
                        </tr>

                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20">
                            <img alt="" className="nicdark_section" src="/img/courses/img2.png"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <h3>
                              <strong>Maccheroni</strong>
                            </h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p>$ 20,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <input className="nicdark_color_greydark nicdark_first_font nicdark_text_align_center nicdark_font_size_20 nicdark_bg_white nicdark_border_bottom_2_solid_grey nicdark_border_0 nicdark_padding_right_0 nicdark_padding_left_0" type="number" min="0" max="10" step="1" value="1"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="nicdark_color_greydark">$ 20,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <img alt="" width="15" src="/img/icons/icon-remove-red.svg"/>
                          </td>
                        </tr>

                        <tr className="">
                          <td className="nicdark_padding_20">
                            <img alt="" className="nicdark_section" src="/img/courses/img3.png"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <h3>
                              <strong>Italian Pizza</strong>
                            </h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p>$ 80,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <input className="nicdark_color_greydark nicdark_first_font nicdark_text_align_center nicdark_font_size_20 nicdark_bg_white nicdark_border_bottom_2_solid_grey nicdark_border_0 nicdark_padding_right_0 nicdark_padding_left_0" type="number" min="0" max="10" step="1" value="1"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="nicdark_color_greydark">$ 80,00</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <img alt="" width="15" src="/img/icons/icon-remove-red.svg"/>
                          </td>
                        </tr>


                      </tbody>
                    </table>

                  </div>


                  <div className="nicdark_section nicdark_height_50"></div>


                  <div className="nicdark_section nicdark_border_3_dashed_grey nicdark_padding_30 nicdark_box_sizing_border_box">

                    <div className="nicdark_section">
                      <div className="nicdark_width_15_percentage nicdark_box_sizing_border_box nicdark_float_left nicdark_padding_10">
                        <div className="nicdark_section nicdark_height_5"></div>
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_box_sizing_border_box nicdark_float_left nicdark_padding_10">
                        <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Insert Coupon Code"/>
                      </div>
                      <div className="nicdark_width_20_percentage nicdark_width_100_percentage_all_iphone nicdark_box_sizing_border_box nicdark_float_left nicdark_padding_10">
                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 nicdark_width_100_percentage"
                          href="#">APPLY</a>
                      </div>
                      <div className="nicdark_width_15_percentage nicdark_box_sizing_border_box nicdark_float_left nicdark_padding_10">
                        <div className="nicdark_section nicdark_height_5"></div>
                      </div>
                    </div>

                  </div>


                </div>

                <div className="grid grid_4">

                  <div className="nicdark_section nicdark_bg_grey nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">


                    <table className="nicdark_section">
                      <thead>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 nicdark_width_50_percentage">
                            <h6 className="nicdark_text_transform_uppercase">TOTALS</h6>
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_50_percentage">
                          </td>
                        </tr>
                      </thead>
                      <tbody>

                        <tr className="">
                          <td className="nicdark_padding_20">
                            <p>Subtotal</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="nicdark_color_greydark">$ 50,00</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20">
                            <p>Method</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="nicdark_color_greydark">Paypal</p>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="nicdark_padding_20">
                            <p>Total</p>
                          </td>
                          <td className="nicdark_padding_20">
                            <h2>
                              <strong>$ 50,00</strong>
                            </h2>
                          </td>
                        </tr>

                      </tbody>
                    </table>


                    <div className="nicdark_section">
                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                          href="#">UPDATE CART</a>
                      </div>

                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                          href="checkout.html">GO TO CHECKOUT</a>
                      </div>
                    </div>


                  </div>

                </div>

              </div>

            </div>
            <Height h={'50px'} />

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
