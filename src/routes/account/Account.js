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
import s from './Account.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import SmallBanner from '../../components/SmallBanner';
import Footer from '../../components/Footer';

class Template extends React.Component {
  render() {
    return (
      <div className={s.root} role="Template">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar user={this.props.user} />
            <HeaderBar />
            <SmallBanner />

            {/* CONTENT */}
            <Height h={'50px'} />
            <div className="nicdark_section">
              <div className="nicdark_container nicdark_clearfix">
                <div className="grid grid_4">
                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section">
                      <div className="nicdark_section nicdark_position_relative">
                        <img alt="" className="nicdark_section" src="img/avatar/avatar-chef-6.png" />
                        <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                          <div className="nicdark_position_absolute nicdark_bottom_20">
                            <h2 className="nicdark_color_white">@jane</h2>
                          </div>
                        </div>
                      </div>
                      <div className="nicdark_section nicdark_box_sizing_border_box">
                        <div className="nicdark_section nicdark_bg_greydark">
                          <table className="nicdark_section ">
                            <tbody>
                              <tr className="">
                                <td className="nicdark_padding_30">
                                  <h5 className="nicdark_font_size_13 nicdark_text_transform_uppercase nicdark_color_grey">Name</h5>
                                  <div className="nicdark_section nicdark_height_5"></div>
                                  <p className="nicdark_color_white nicdark_line_height_16">Jane</p>
                                </td>
                                <td className="nicdark_padding_30">
                                  <h5 className="nicdark_font_size_13 nicdark_text_transform_uppercase nicdark_color_grey">Last Name</h5>
                                  <div className="nicdark_section nicdark_height_5"></div>
                                  <p className="nicdark_color_white nicdark_line_height_16">Spitch</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="nicdark_section nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">
                          <table className="nicdark_section">
                            <tbody>
                              <tr className="">
                                <td className="nicdark_padding_10">
                                  <div className="nicdark_display_table nicdark_float_left">
                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                      <img alt="" className="nicdark_margin_right_20" width="25" src="img/icons/icon-email-grey.svg" />
                                    </div>
                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                      <h5 className="nicdark_font_size_13 nicdark_text_transform_uppercase">
                                        <strong>Email</strong>
                                      </h5>
                                      <div className="nicdark_section nicdark_height_5"></div>
                                      <p className="">info@educationlab.net</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_10">
                                  <div className="nicdark_display_table nicdark_float_left">
                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                      <img alt="" className="nicdark_margin_right_20" width="25" src="img/icons/icon-link-grey.svg" />
                                    </div>
                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                      <h5 className="nicdark_font_size_13 nicdark_text_transform_uppercase">
                                        <strong>Url</strong>
                                      </h5>
                                      <div className="nicdark_section nicdark_height_5"></div>
                                      <p className="">www.educationlab.net</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_10">
                                  <h5 className="nicdark_font_size_13 nicdark_text_transform_uppercase">
                                    <strong>About Me</strong>
                                  </h5>
                                  <div className="nicdark_section nicdark_height_5"></div>
                                  <p className="nicdark_line_height_25">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum
                                    tellus, sit amet viverra felis. Cras sagittis sem sit amet urna.</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box nicdark_bg_white ">
                        <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left nicdark_text_align_center">
                          <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                            href="#">EDIT PROFILE</a>
                        </div>
                        <div className="nicdark_width_50_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left nicdark_text_align_center">
                          <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_red nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                            href="#">LOGOUT</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid_8">
                  <div className="nicdark_section">
                    <div className="nicdark_tabs">
                      <ul className="nicdark_list_style_none nicdark_margin_0 nicdark_padding_0 nicdark_section nicdark_border_bottom_2_solid_grey">
                        <li className="nicdark_display_inline_block">
                          <h4>
                            <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark"
                              href="#tabs-1">Premium Orders</a>
                            <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                              href="#">5</a>
                          </h4>
                        </li>
                        <li className="nicdark_display_inline_block">
                          <h4>
                            <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark"
                              href="#tabs-2">Free Orders</a>
                            <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                              href="#">7</a>
                          </h4>
                        </li>
                        <li className="nicdark_display_inline_block">
                          <h4>
                            <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark"
                              href="#tabs-3">Bookmark</a>
                            <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                              href="#">9</a>
                          </h4>
                        </li>
                        <li className="nicdark_display_inline_block">
                          <h4>
                            <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark"
                              href="#tabs-4">Compare</a>
                            <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                              href="#">3</a>
                          </h4>
                        </li>
                      </ul>
                      <div className="nicdark_section nicdark_height_20"></div>
                      <div className="nicdark_section" id="tabs-1">
                        <div className="nicdark_section nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">
                          <table className="nicdark_section">
                            <thead>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">ID ORDER</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">DATE</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">PAYMENT</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">TOTAL</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>Paypal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 50,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>Paypal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 50,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>Paypal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 50,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>Paypal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 50,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>Paypal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 50,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="nicdark_section" id="tabs-2">
                        <div className="nicdark_section nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">
                          <table className="nicdark_section">
                            <thead>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">ID ORDER</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">DATE</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">PAYMENT</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                  <h6 className="nicdark_text_transform_uppercase">TOTAL</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_20_percentage">

                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>FREE</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 0,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="nicdark_border_bottom_1_solid_grey">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>FREE</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 0,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>FREE</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 0,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>FREE</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 0,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <p># 5649</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>21/12/2016</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p>FREE</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <p className="nicdark_color_greydark">$ 0,00</p>
                                </td>
                                <td className="nicdark_padding_20">
                                  <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                    href="#">VIEW ORDER</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="nicdark_section" id="tabs-3">
                        <div className="nicdark_section nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">
                          <table className="nicdark_section">
                            <thead>
                              <tr className="">
                                <td className=" nicdark_width_25_percentage">
                                </td>
                                <td className=" nicdark_width_55_percentage">
                                </td>
                                <td className=" nicdark_width_15_percentage">
                                </td>
                                <td className=" nicdark_width_5_percentage">
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img1.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                              <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img2.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img3.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="nicdark_section" id="tabs-4">
                        <div className="nicdark_section nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">
                          <table className="nicdark_section">
                            <thead>
                              <tr className="">
                                <td className=" nicdark_width_25_percentage">
                                </td>
                                <td className=" nicdark_width_55_percentage">
                                </td>
                                <td className=" nicdark_width_15_percentage">
                                </td>
                                <td className=" nicdark_width_5_percentage">
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img1.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                              <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img2.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                              <tr className="">
                                <td className="nicdark_padding_20">
                                  <img alt="" className="nicdark_section" src="img/courses/img3.png" />
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
                                  <img alt="" width="15" src="img/icons/icon-remove-red.svg" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Height h={'40px'} />

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Template);
