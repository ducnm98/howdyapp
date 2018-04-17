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
import s from './Event.css';

import Height from '../../components/Height';
import SocialBar from '../../components/SocialBar';
import HeaderBar from '../../components/HeaderBar';
import CourseBanner from '../../components/CourseBanner';
import Footer from '../../components/Footer';

import CourseItem from '../../components/CourseItem';
import CourseProgram from '../../components/CourseProgram';
import CourseTeacher from '../../components/CourseTeacher';
import CourseComment from '../../components/CourseComment';
import CourseReview from '../../components/CourseReview';
import CourseAttendees from '../../components/CourseAttendees';
import CourseDesc from '../../components/CourseDesc';

class Main extends React.Component {
  render() {
    const { eventDetail } = this.props;
    console.log(eventDetail);
    const authorName =
      eventDetail.author.displayName ||
      eventDetail.author.name.last + ' ' + eventDetail.author.name.first;
    const avatar = eventDetail.author.avatar || '/img/avatar/avatar-chef-1.png';
    const dateTime = eventDetail.dateStr;

    return (
      <div className={s.root} role="main">
        <div className="nicdark_site">
          <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
            <SocialBar user={this.props.user} />
            <HeaderBar />
            <CourseBanner eventDetail={eventDetail} />
            <Height h={'50px'} />

            <div className="nicdark_section">
              <div className="nicdark_container nicdark_clearfix">
                <div className="nicdark_width_66_percentage nicdark_width_100_percentage_ipad_port nicdark_width_100_percentage_all_iphone nicdark_float_left">
                  <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt=""
                        src={eventDetail.image.url}
                        className="nicdark_section"
                      />
                    </div>

                    <Height h={'50px'} />

                    <div className="nicdark_section">
                      <div className="nicdark_tabs">
                        <div
                          contentEditable="false"
                          dangerouslySetInnerHTML={{
                            __html: `${eventDetail.desc}`,
                          }}
                        />
                        <a href={eventDetail.link} target={eventDetail.link}>
                          {eventDetail.link}
                        </a>
                      </div>
                    </div>
                  </div>
                  <Height h={'50px'} />
                </div>

                <div className="nicdark_width_33_percentage nicdark_width_100_percentage_ipad_port nicdark_width_100_percentage_all_iphone nicdark_float_left">
                  <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                    <table className="nicdark_section">
                      <tbody>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img
                              alt=""
                              className=""
                              width="40"
                              src="/img/icons/icon-availability.svg"
                            />
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">
                              27 Seats Available
                            </h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20">
                            <img
                              alt=""
                              className=""
                              width="40"
                              src="/img/icons/icon-level.svg"
                            />
                          </td>
                          <td className="nicdark_padding_20">
                            <h4 className=" nicdark_text_align_right">
                              Level: Beginner
                            </h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img
                              alt=""
                              className=""
                              width="40"
                              src="/img/icons/icon-clock-grey.svg"
                            />
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">
                              Start at: {dateTime}
                            </h4>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_20 ">
                            <img
                              alt=""
                              className=""
                              width="40"
                              src="/img/icons/icon-pin-grey.svg"
                            />
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">
                              Location: Sidney
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td className="nicdark_padding_20 ">
                            <img
                              alt=""
                              className=""
                              width="40"
                              src="/img/icons/icon-card-grey.svg"
                            />
                          </td>
                          <td className="nicdark_padding_20 ">
                            <h4 className=" nicdark_text_align_right">
                              Price: 35 USD
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="nicdark_section nicdark_height_20" />

                    <div className="nicdark_section nicdark_bg_white nicdark_border_1_solid_grey">
                      <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_bottom_1_solid_grey nicdark_text_align_center">
                        <h3 className="">
                          <strong>Question</strong>
                        </h3>
                      </div>
                      <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box">
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <input
                              className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <input
                              className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <textarea
                              rows="4"
                              className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                              placeholder="Message"
                            />
                          </div>
                        </div>
                        <div className="nicdark_section">
                          <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                            <a
                              className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                              href="contact-1.html"
                            >
                              SEND NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

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
