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
import s from './TeacherDetail.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import TeacherBanner from '../../components/TeacherBanner';
import Footer from '../../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar/>
            <HeaderBar />
            <TeacherBanner />

            <Height h={'50px'} />
            <div className="nicdark_section">
              <div className="nicdark_container nicdark_clearfix">
                <div className="nicdark_width_66_percentage nicdark_width_100_percentage_responsive nicdark_float_left">

                  <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">

                    <h2>
                      <strong>Biography</strong>
                    </h2>
                    <div className="nicdark_section nicdark_height_20"></div>

                    <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left ">
                      <p className="nicdark_padding_10 nicdark_padding_0_all_iphone nicdark_padding_left_0">
                        <span className="nicdark_font_size_70 nicdark_float_left nicdark_padding_28 nicdark_line_height_30 nicdark_first_font">
                          <strong>A</strong>
                        </span>ivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit
                        amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada
                        felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.</p>
                    </div>
                    <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left">
                      <p className="nicdark_padding_10 nicdark_padding_0_all_iphone nicdark_padding_right_0">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit
                        amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada
                        felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.</p>
                    </div>

                    <div className="nicdark_section nicdark_height_40"></div>


                    <div className="nicdark_section">


                      <div className="nicdark_tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                        <ul className="nicdark_list_style_none nicdark_margin_0 nicdark_padding_0 nicdark_section nicdark_border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                          role="tablist">
                          <li className="nicdark_display_inline_block ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0"
                            aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                            <h4>
                              <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark ui-tabs-anchor"
                                href="#tabs-1" tabindex="-1" id="ui-id-1">My Courses</a>
                              <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                href="#">5</a>
                            </h4>
                          </li>
                          <li className="nicdark_display_inline_block ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-2" aria-labelledby="ui-id-2"
                            aria-selected="false" aria-expanded="false">
                            <h4>
                              <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark ui-tabs-anchor"
                                href="#tabs-2" tabindex="-1" id="ui-id-2">Followers</a>
                              <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                href="#">9</a>
                            </h4>
                          </li>
                          <li className="nicdark_display_inline_block ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-3" aria-labelledby="ui-id-3"
                            aria-selected="false" aria-expanded="false">
                            <h4>
                              <a className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark ui-tabs-anchor"
                                href="#tabs-3" tabindex="-1" id="ui-id-3">My Reviews</a>
                              <a className="nicdark_display_inline_block nicdark_bg_grey nicdark_margin_right_20 nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                href="#">3</a>
                            </h4>
                          </li>
                        </ul>

                        <div className="nicdark_section nicdark_height_20"></div>

                        <div className="nicdark_section ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel"
                          aria-hidden="false" style={{display: 'block'}}>


                          <div className="nicdark_section nicdark_box_sizing_border_box nicdark_overflow_hidden nicdark_overflow_x_auto nicdark_cursor_move_responsive">
                            <table className="nicdark_section">
                              <thead>
                                <tr className="nicdark_border_bottom_1_solid_grey">
                                  <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                    <h6 className="nicdark_text_transform_uppercase">COURSE</h6>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_width_30_percentage nicdark_display_none_all_iphone">

                                  </td>
                                  <td className="nicdark_padding_20 nicdark_width_20_percentage nicdark_display_none_all_iphone">
                                    <h6 className="nicdark_text_transform_uppercase">RATING</h6>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_width_20_percentage">
                                    <h6 className="nicdark_text_transform_uppercase">PRICE</h6>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_width_10_percentage">

                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="nicdark_border_bottom_1_solid_grey">
                                  <td className="nicdark_padding_20">
                                    <img alt="" className="nicdark_section" src="/img/courses/img1.png"/>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <h4>
                                      <strong>Learn Sushi Food</strong>
                                    </h4>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">

                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-half.svg"/>
                                    <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star.svg"/>

                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">
                                    <p className="nicdark_color_greydark">$ 50,00</p>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                      href="#">VIEW</a>
                                  </td>
                                </tr>

                                <tr className="">
                                  <td className="nicdark_padding_20">
                                    <img alt="" className="nicdark_section" src="/img/courses/img2.png"/>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <h4>
                                      <strong>Maccheroni Dishes</strong>
                                    </h4>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">

                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-half.svg"/>
                                    <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star.svg"/>

                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">
                                    <p className="nicdark_color_greydark">$ 30,00</p>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                      href="#">VIEW</a>
                                  </td>
                                </tr>

                                <tr className="">
                                  <td className="nicdark_padding_20">
                                    <img alt="" className="nicdark_section" src="/img/courses/img3.png"/>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <h4>
                                      <strong>Italian Pizza Napoli</strong>
                                    </h4>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">

                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-half.svg"/>
                                    <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star.svg"/>

                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">
                                    <p className="nicdark_color_greydark">$ 120,00</p>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                      href="#">VIEW</a>
                                  </td>
                                </tr>

                                <tr className="">
                                  <td className="nicdark_padding_20">
                                    <img alt="" className="nicdark_section" src="/img/courses/img4.png"/>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <h4>
                                      <strong>Pasta Spaghetti Course</strong>
                                    </h4>
                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">

                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-full.svg"/>
                                    <img alt="" className="" width="15" src="/img/icons/icon-star-half.svg"/>
                                    <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star.svg"/>

                                  </td>
                                  <td className="nicdark_padding_20 nicdark_display_none_all_iphone">
                                    <p className="nicdark_color_greydark">FREE</p>
                                  </td>
                                  <td className="nicdark_padding_20">
                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                                      href="#">VIEW</a>
                                  </td>
                                </tr>



                              </tbody>
                            </table>
                          </div>


                        </div>
                        <div className="nicdark_section ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-2" aria-labelledby="ui-id-2" role="tabpanel"
                          aria-hidden="true" style={{display: 'none'}}>
                          <div className="nicdark_section">


                            <div className="nicdark_section">

                              <div className="nicdark_width_25_percentage nicdark_width_50_percentage_all_iphone nicdark_padding_20 nicdark_float_left nicdark_box_sizing_border_box">
                                <div className="nicdark_section nicdark_box_sizing_border_box">


                                  <div className="nicdark_section nicdark_position_relative">

                                    <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-2.png"/>

                                    <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_20 nicdark_box_sizing_border_box nicdark_text_align_center">
                                        <h5 className="nicdark_color_white">
                                          <strong>Jane Goleman</strong>
                                        </h5>
                                      </div>

                                    </div>

                                  </div>



                                </div>
                              </div>

                              <div className="nicdark_width_25_percentage nicdark_width_50_percentage_all_iphone nicdark_padding_20 nicdark_float_left nicdark_box_sizing_border_box">
                                <div className="nicdark_section nicdark_box_sizing_border_box">


                                  <div className="nicdark_section nicdark_position_relative">

                                    <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-3.png"/>

                                    <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_20 nicdark_box_sizing_border_box nicdark_text_align_center">
                                        <h5 className="nicdark_color_white">
                                          <strong>Jane Mgrayan</strong>
                                        </h5>
                                      </div>

                                    </div>

                                  </div>



                                </div>
                              </div>


                              <div className="nicdark_width_25_percentage nicdark_width_50_percentage_all_iphone nicdark_padding_20 nicdark_float_left nicdark_box_sizing_border_box">
                                <div className="nicdark_section nicdark_box_sizing_border_box">


                                  <div className="nicdark_section nicdark_position_relative">

                                    <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-4.png"/>

                                    <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_20 nicdark_box_sizing_border_box nicdark_text_align_center">
                                        <h5 className="nicdark_color_white">
                                          <strong>Jack Johnson</strong>
                                        </h5>
                                      </div>

                                    </div>

                                  </div>



                                </div>
                              </div>


                              <div className="nicdark_width_25_percentage nicdark_width_50_percentage_all_iphone nicdark_padding_20 nicdark_float_left nicdark_box_sizing_border_box">
                                <div className="nicdark_section nicdark_box_sizing_border_box">


                                  <div className="nicdark_section nicdark_position_relative">

                                    <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-5.png"/>

                                    <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_20 nicdark_box_sizing_border_box nicdark_text_align_center">
                                        <h5 className="nicdark_color_white">
                                          <strong>Nick Hopiness</strong>
                                        </h5>
                                      </div>

                                    </div>

                                  </div>



                                </div>
                              </div>


                              <div className="nicdark_width_25_percentage nicdark_width_50_percentage_all_iphone nicdark_padding_20 nicdark_float_left nicdark_box_sizing_border_box">
                                <div className="nicdark_section nicdark_box_sizing_border_box">


                                  <div className="nicdark_section nicdark_position_relative">

                                    <img alt="" className="nicdark_section" src="/img/avatar/avatar-chef-6.png"/>

                                    <div className="nicdark_bg_greydark_alpha_gradient_3 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">

                                      <div className="nicdark_position_absolute nicdark_bottom_20 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_20 nicdark_box_sizing_border_box nicdark_text_align_center">
                                        <h5 className="nicdark_color_white">
                                          <strong>Steve Morgan</strong>
                                        </h5>
                                      </div>

                                    </div>

                                  </div>



                                </div>
                              </div>



                            </div>




                          </div>






                        </div>


                        <div className="nicdark_section ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-3" aria-labelledby="ui-id-3" role="tabpanel"
                          aria-hidden="true" style={{display: 'none'}}>

                          <div className="nicdark_section">

                            <div className="nicdark_section nicdark_height_20"></div>

                            <div className="nicdark_section">

                              <div className="nicdark_width_30_percentage nicdark_width_100_percentage_all_iphone nicdark_border_radius_3 nicdark_float_left nicdark_text_align_center nicdark_bg_greydark nicdark_padding_30 nicdark_box_sizing_border_box">

                                <h1 className="nicdark_font_size_70 nicdark_color_white">
                                  <strong>5</strong>
                                </h1>

                                <div className="nicdark_section nicdark_height_20"></div>

                                <div className="nicdark_section ">
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                </div>

                                <p>3 Ratings</p>

                              </div>


                              <div className="nicdark_width_70_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_left_40 nicdark_padding_left_0_all_iphone nicdark_float_left nicdark_box_sizing_border_box">

                                <div className=" nicdark_border_radius_3 nicdark_section nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">
                                  <table className="nicdark_section">
                                    <tr>
                                      <td className="nicdark_width_20_percentage ">
                                        <h5>
                                          <strong>5 Stars</strong>
                                        </h5>
                                      </td>
                                      <td className="nicdark_width_70_percentage ">
                                        <div className="nicdark_section nicdark_bg_yellow nicdark_height_10 nicdark_border_radius_3"></div>
                                      </td>
                                      <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                        <p className="nicdark_font_size_14 nicdark_line_height_30">3</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="nicdark_width_20_percentage ">
                                        <h5>
                                          <strong>4 Stars</strong>
                                        </h5>
                                      </td>
                                      <td className="nicdark_width_70_percentage ">
                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                      </td>
                                      <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                        <p className="nicdark_font_size_14 nicdark_line_height_30">0</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="nicdark_width_20_percentage ">
                                        <h5>
                                          <strong>3 Stars</strong>
                                        </h5>
                                      </td>
                                      <td className="nicdark_width_70_percentage ">
                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                      </td>
                                      <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                        <p className="nicdark_font_size_14 nicdark_line_height_30">0</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="nicdark_width_20_percentage ">
                                        <h5>
                                          <strong>2 Stars</strong>
                                        </h5>
                                      </td>
                                      <td className="nicdark_width_70_percentage ">
                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                      </td>
                                      <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                        <p className="nicdark_font_size_14 nicdark_line_height_30">0</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="nicdark_width_20_percentage ">
                                        <h5>
                                          <strong>1 Stars</strong>
                                        </h5>
                                      </td>
                                      <td className="nicdark_width_70_percentage ">
                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                      </td>
                                      <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                        <p className="nicdark_font_size_14 nicdark_line_height_30">0</p>
                                      </td>
                                    </tr>
                                  </table>
                                </div>

                              </div>



                            </div>


                            <div className="nicdark_section nicdark_height_30"></div>


                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                              <div className="nicdark_display_table nicdark_float_left">
                                <img alt="" className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                                  width="40" src="/img/avatar/avatar-chef-1.png"/>
                                <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                                    <strong>John Doe</strong>
                                  </span>
                                </p>

                                <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                </div>

                              </div>

                              <div className="nicdark_section nicdark_height_20"></div>
                              <div className="nicdark_section">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum sit amet ex pulvinar mattis.
                                  Pellentesque vitae purus viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a nisi
                                  aliquet sollicitudin. Interdum et malesuada fames.</p>
                              </div>

                            </div>

                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                              <div className="nicdark_display_table nicdark_float_left">
                                <img alt="" className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                                  width="40" src="/img/avatar/avatar-chef-2.png"/>
                                <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                                    <strong>Nick Hope</strong>
                                  </span>
                                </p>

                                <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                </div>

                              </div>

                              <div className="nicdark_section nicdark_height_20"></div>
                              <div className="nicdark_section">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum sit amet ex pulvinar mattis.
                                  Pellentesque vitae purus viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a nisi
                                  aliquet sollicitudin. Interdum et malesuada fames.</p>
                              </div>

                            </div>

                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                              <div className="nicdark_display_table nicdark_float_left">
                                <img alt="" className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                                  width="40" src="/img/avatar/avatar-chef-3.png"/>
                                <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                                    <strong>Jane Dark</strong>
                                  </span>
                                </p>

                                <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                  <img alt="" className="nicdark_margin_right_10" width="15" src="/img/icons/icon-star-full-yellow.svg"/>
                                </div>

                              </div>

                              <div className="nicdark_section nicdark_height_20"></div>
                              <div className="nicdark_section">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ipsum sit amet ex pulvinar mattis.
                                  Pellentesque vitae purus viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a nisi
                                  aliquet sollicitudin. Interdum et malesuada fames.</p>
                              </div>

                            </div>



                          </div>

                        </div>

                      </div>
                      <p>This is an animated dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_50"></div>
                </div>

                <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                  <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                    <table className="nicdark_section">
                      <tbody>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img alt="" className="" width="40" src="/img/icons/icon-email-grey.svg"/>
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">Email: hallo@johndoe.com</h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20">
                            <img alt="" className="" width="40" src="/img/icons/icon-mobile-grey.svg"/>
                          </td>
                          <td className="nicdark_padding_20">
                            <h4 className=" nicdark_text_align_right">Phone: +00 80023457</h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img alt="" className="" width="40" src="/img/icons/icon-skype-grey.svg"/>
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">Skype: @johndoe</h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img alt="" className="" width="40" src="/img/icons/icon-link-grey.svg"/>
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">Web: www.johndoe.com</h4>
                          </td>
                        </tr>
                        <tr>
                          <td className="nicdark_padding_20 ">
                            <img alt="" className="" width="40" src="/img/icons/icon-pin-grey.svg"/>
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">Location: Milan ( IT )</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>


                    <div className="nicdark_section nicdark_height_40"></div>


                    <div className="nicdark_section nicdark_bg_white nicdark_border_1_solid_grey">

                      <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_bottom_1_solid_grey nicdark_text_align_center">


                        <h3 className="">
                          <strong>Contact Me</strong>
                        </h3>
                      </div>
                      <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box">

                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Name"/>
                          </div>

                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Email"/>
                          </div>

                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <textarea rows="4" className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                              placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                              href="#">SEND NOW</a>
                          </div>
                        </div>

                      </div>

                    </div>


                  </div>



                  <div className="nicdark_section nicdark_height_50"></div>


                </div>



              </div>

            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
