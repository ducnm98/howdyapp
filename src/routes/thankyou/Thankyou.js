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
import s from './Thankyou.css';

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
            <SmallBanner title="Thank you" />

            <Height h={'50px'} />
            <div className="nicdark_section">

              <div className="nicdark_container nicdark_clearfix">

                <div className="grid grid_6">

                  <div className="nicdark_section nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">

                    <table className="nicdark_section">
                      <thead>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 nicdark_width_25_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Product</h6>
                          </td>
                          <td className="nicdark_padding_40 nicdark_width_30_percentage">
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_10_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Qnt</h6>
                          </td>
                          <td className="nicdark_padding_20 nicdark_width_15_percentage">
                            <h6 className="nicdark_text_transform_uppercase">Total</h6>
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
                            <h3>1</h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="">$ 50,00</p>
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
                            <h3>2</h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="">$ 20,00</p>
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
                            <h3>3</h3>
                          </td>
                          <td className="nicdark_padding_20">
                            <p className="">$ 80,00</p>
                          </td>
                        </tr>


                      </tbody>
                    </table>

                  </div>


                </div>

                <div className="grid grid_6">

                  <div className="nicdark_section nicdark_bg_grey nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box  nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">



                    <table className="nicdark_section">
                      <thead>
                        <tr className="">
                          <td className="nicdark_padding_20_10 nicdark_width_50_percentage">
                            <h6 className="nicdark_text_transform_uppercase">MY DETAILS</h6>
                          </td>
                          <td className="nicdark_padding_20_10 nicdark_width_50_percentage">
                          </td>
                        </tr>
                      </thead>
                      <tbody>



                        <tr className="nicdark_border_top_2_solid_grey nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>User</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">@buyer</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Name</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">John</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Surname</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">Doe</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Email</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">johndoe@gmail.com</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Country</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">USA</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Address</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">Boulevard Street 12</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>City</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">New York</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20_10">
                            <p>Payment Method</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">Paypal</p>
                          </td>
                        </tr>
                        <tr className="">
                          <td className="nicdark_padding_20_10">
                            <p>Transiction ID</p>
                          </td>
                          <td className="nicdark_padding_20_10 ">
                            <p className="nicdark_color_greydark">dgsae23e32e387e3ee3</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>




                    <div className="nicdark_section">
                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_orange nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                          href="account.html">GO TO ACCOUNT PAGE</a>
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
