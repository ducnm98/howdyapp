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
import s from './Checkout.css';

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
            <SmallBanner />

            <Height h={'50px'} />
            <div className="nicdark_section">

              <div className="nicdark_container nicdark_clearfix">

                <div className="grid grid_8">


                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <h2>
                      <strong>Main Details :</strong>
                    </h2>
                    <div className="nicdark_section nicdark_height_20"></div>
                  </div>


                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section">

                      <div className="nicdark_section">
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Email"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="First Name"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Last Name"/>
                        </div>
                      </div>

                    </div>

                  </div>


                  <div className="nicdark_section nicdark_height_50"></div>


                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <h2>
                      <strong>Other Details :</strong>
                    </h2>
                    <div className="nicdark_section nicdark_height_20"></div>
                  </div>


                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section">

                      <div className="nicdark_section">
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Country"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Adress"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="City"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                          <input className=" nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="ZIP Code"/>
                        </div>
                        <div className="nicdark_section nicdark_height_20"></div>
                        <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                          <textarea rows="5" className="nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                            placeholder="Additional Notes"></textarea>
                        </div>


                      </div>

                    </div>

                  </div>

                  <div className="nicdark_section nicdark_height_20"></div>

                  <div className="nicdark_section">
                    <div className="nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_float_left">
                      <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                        href="thankyou.html">PAY NOW</a>
                    </div>
                  </div>




                </div>

                <div className="grid grid_4">

                  <div className="nicdark_section nicdark_bg_grey nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">


                    <table className="nicdark_section">
                      <thead>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10 nicdark_width_25_percentage">
                            <h6 className="nicdark_text_transform_uppercase">CART</h6>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_width_40_percentage">
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_width_35_percentage">
                          </td>
                        </tr>
                      </thead>
                      <tbody>


                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <img alt="" className="nicdark_section" src="/img/courses/img1.png"/>
                          </td>
                          <td className="nicdark_padding_20_10">
                            <h5>
                              <strong>Learn Sushi</strong>
                            </h5>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <p>( 1 ) $ 50,00</p>
                          </td>
                        </tr>

                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <img alt="" className="nicdark_section" src="/img/courses/img2.png"/>
                          </td>
                          <td className="nicdark_padding_20_10">
                            <h5>
                              <strong>Maccheroni</strong>
                            </h5>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <p>( 2 ) $ 30,00</p>
                          </td>
                        </tr>

                        <tr className="">
                          <td className="nicdark_padding_20_10">
                            <img alt="" className="nicdark_section" src="/img/courses/img2.png"/>
                          </td>
                          <td className="nicdark_padding_20_10">
                            <h5>
                              <strong>Italian Pizza</strong>
                            </h5>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <p>( 1 ) $ 70,00</p>
                          </td>
                        </tr>


                      </tbody>
                    </table>





                    <table className="nicdark_section">
                      <thead>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10 nicdark_width_25_percentage">
                            <h6 className="nicdark_text_transform_uppercase">ORDER</h6>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_width_40_percentage">
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_width_35_percentage">
                          </td>
                        </tr>
                      </thead>
                      <tbody>



                        <tr className="">
                          <td className="nicdark_padding_20_10">
                            <p>Subtotal</p>
                          </td>
                          <td className="nicdark_padding_20_10">

                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <p className="nicdark_color_greydark">$ 50,00</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Method</p>
                          </td>
                          <td className="nicdark_padding_20_10">

                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <p className="nicdark_color_greydark">Paypal</p>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="nicdark_padding_20_10">
                            <p>Total</p>
                          </td>
                          <td className="nicdark_padding_20_10">

                          </td>
                          <td className="nicdark_padding_20_10 nicdark_text_align_right">
                            <h3>
                              <strong>$ 50,00</strong>
                            </h3>
                          </td>
                        </tr>

                      </tbody>
                    </table>




                    <div className="nicdark_section">
                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                          href="cart.html">RETURN TO CART</a>
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
