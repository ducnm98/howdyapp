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
import s from './Blogs.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import SmallBanner from '../../components/SmallBanner';
import Footer from '../../components/Footer';
import BlogItem from '../../components/BlogItem';
import Pagination from '../../components/Pagination';

import Link from '../../components/Link';

class Main extends React.Component {
  render() {
    const { blogData } = this.props;

    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar user={this.props.user} />
            <HeaderBar />
            <SmallBanner title="Bài Viết" bg="/img/banner/writer4.jpg" />

            <Height h={'50px'} />
            <div className="nicdark_section">
              <div className="nicdark_container nicdark_clearfix">
                <div className="grid grid_8">
                  {blogData.map(item => {
                    return <BlogItem blogItem={item} />;
                  })}
                  <div className="nicdark_section nicdark_height_50" />

                  <Pagination
                    totalPage={this.props.totalPage}
                    currentPage={this.props.currentPage}
                    linkPage="/blogs"
                  />
                  <div className="nicdark_section nicdark_height_50" />
                </div>
                <div className="grid grid_4">
                  <div className="nicdark_section nicdark_border_1_solid_grey">
                    <div className="nicdark_datepicker" />
                  </div>
                  <div className="nicdark_section nicdark_height_40" />
                  <h3>
                    <strong>Tags Cloud</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_30" />
                  <div className="nicdark_section">
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Vegan Food
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Recipies
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      Vegetarian
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      Fruit
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Italian Food
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Pizza
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      Lasagne
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Vegan Food
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      # Recipies
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      Vegetarian
                    </a>
                    <a
                      className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_margin_bottom_10"
                      href="#"
                    >
                      Fruit
                    </a>
                  </div>
                  <div className="nicdark_section nicdark_height_30" />
                  <h3>
                    <strong>Next Courses</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_30" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img1.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Learn To Fish Course Online</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by John Doe on 21/12/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <a
                        className="nicdark_display_inline_block nicdark_color_white  nicdark_bg_green nicdark_padding_5_10 nicdark_border_radius_3 nicdark_font_size_13"
                        href="#"
                      >
                        FREE
                      </a>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_25" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img2.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Pasta & Pizza Italian Course</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by Nick Hope on 30/11/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <a
                        className="nicdark_display_inline_block nicdark_color_white  nicdark_bg_red nicdark_padding_5_10 nicdark_border_radius_3 nicdark_font_size_13"
                        href="#"
                      >
                        COMPLETED
                      </a>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_25" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img3.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Vegan Course Cousin</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by Jane on 07/03/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <a
                        className="nicdark_display_inline_block nicdark_color_white  nicdark_bg_green nicdark_padding_5_10 nicdark_border_radius_3 nicdark_font_size_13"
                        href="#"
                      >
                        $ 80,00
                      </a>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_50" />
                  <h3>
                    <strong>Search</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_10" />
                  <div className="nicdark_section">
                    <div className="nicdark_width_60_percentage nicdark_padding_10  nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                      <img
                        alt=""
                        className="nicdark_position_absolute nicdark_top_0 nicdark_left_0 nicdark_margin_top_20 nicdark_margin_left_10"
                        width="15"
                        src="img/icons/icon-pen.svg"
                      />
                      <input
                        className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                        type="text"
                        placeholder="Keyword"
                      />
                    </div>
                    <div className="nicdark_width_40_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative">
                      <a
                        className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                        href="#"
                      >
                        SEARCH
                      </a>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_50" />
                  <h3>
                    <strong>Categories</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_10" />
                  <table className="nicdark_section">
                    <tbody>
                      <tr className="nicdark_border_bottom_2_solid_grey">
                        <td className="nicdark_padding_10 ">
                          <img
                            alt=""
                            className="nicdark_margin_right_5"
                            width="10"
                            src="img/icons/icon-next-grey.svg"
                          />
                          <p className="nicdark_display_inline_block">
                            Food Courses ( 10 )
                          </p>
                        </td>
                      </tr>
                      <tr className="nicdark_border_bottom_2_solid_grey">
                        <td className="nicdark_padding_10 ">
                          <img
                            alt=""
                            className="nicdark_margin_right_5"
                            width="10"
                            src="img/icons/icon-next-grey.svg"
                          />
                          <p className="nicdark_display_inline_block">
                            Vegan Dishes ( 20 )
                          </p>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="nicdark_padding_10 ">
                          <img
                            alt=""
                            className="nicdark_margin_right_5"
                            width="10"
                            src="img/icons/icon-next-grey.svg"
                          />
                          <p className="nicdark_display_inline_block">
                            School News ( 12 )
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="nicdark_section nicdark_height_50" />
                  <h3>
                    <strong>Best Rated Courses</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_30" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img1.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Learn To Fish Course Online</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by John Doe on 21/12/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <div className="nicdark_section">
                        <div className="nicdark_section nicdark_height_3" />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-half.svg"
                        />
                        <img
                          alt=""
                          className="nicdark_margin_right_10"
                          width="15"
                          src="img/icons/icon-star.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_25" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img2.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Pasta & Pizza Italian Course</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by Nick Hope on 30/11/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <div className="nicdark_section">
                        <div className="nicdark_section nicdark_height_3" />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-half.svg"
                        />
                        <img
                          alt=""
                          className="nicdark_margin_right_10"
                          width="15"
                          src="img/icons/icon-star.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_25" />
                  <div className="nicdark_section nicdark_position_relative">
                    <img
                      alt=""
                      className="nicdark_position_absolute"
                      width="100"
                      src="img/courses/square/img3.png"
                    />
                    <div className="nicdark_section nicdark_padding_left_120 nicdark_box_sizing_border_box">
                      <div className="nicdark_section nicdark_height_5" />
                      <h4>Vegan Course Cousin</h4>
                      <div className="nicdark_section nicdark_height_10" />
                      <p className="">by Jane on 07/03/2016</p>
                      <div className="nicdark_section nicdark_height_10" />
                      <div className="nicdark_section">
                        <div className="nicdark_section nicdark_height_3" />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-full.svg"
                        />
                        <img
                          alt=""
                          className=""
                          width="15"
                          src="img/icons/icon-star-half.svg"
                        />
                        <img
                          alt=""
                          className="nicdark_margin_right_10"
                          width="15"
                          src="img/icons/icon-star.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_height_50" />
                  <h3>
                    <strong>Working Hours</strong>
                  </h3>
                  <div className="nicdark_section nicdark_height_30" />
                  <table className="nicdark_section">
                    <tbody>
                      <tr className="nicdark_border_bottom_2_solid_grey">
                        <td className="nicdark_padding_10 nicdark_padding_top_0">
                          <p className="">Mon - Fri</p>
                        </td>
                        <td className="nicdark_padding_10 nicdark_padding_top_0">
                          <p className=" nicdark_text_align_right">
                            8:00 - 17:00
                          </p>
                        </td>
                      </tr>
                      <tr className="nicdark_border_bottom_2_solid_grey">
                        <td className="nicdark_padding_10">
                          <p className="">Saturday</p>
                        </td>
                        <td className="nicdark_padding_10">
                          <p className=" nicdark_text_align_right">
                            9:30 - 17:30
                          </p>
                        </td>
                      </tr>
                      <tr className="nicdark_border_bottom_2_solid_grey">
                        <td className="nicdark_padding_10">
                          <p className="">Saturday</p>
                        </td>
                        <td className="nicdark_padding_10">
                          <p className=" nicdark_text_align_right">
                            9:30 - 17:30
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="nicdark_padding_10 nicdark_padding_botttom_0">
                          <p className="">Sunday</p>
                        </td>
                        <td className="nicdark_padding_10 nicdark_padding_botttom_0 nicdark_text_align_right">
                          <a
                            className="nicdark_display_inline_block nicdark_color_white  nicdark_bg_red nicdark_padding_5_10 nicdark_border_radius_3 nicdark_font_size_13"
                            href="#"
                          >
                            CLOSED
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="nicdark_section nicdark_height_50" />
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
