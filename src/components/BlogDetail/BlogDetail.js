import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlogDetail.css';
import Link from '../Link';
import PropTypes from 'prop-types';
import moment from 'moment';

class BlogDetail extends React.Component {
  render() {
    const { blogDetail } = this.props;
    const date = moment(blogDetail.publishedDate).format('MMMM Do YYYY');
    const avatar = blogDetail.author.avatar || '/img/avatar/avatar-chef-1.png';
    const image = '/img/banner/writer3.jpg';

    return (
      <div className={s.root}>
        <div
          className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_bottom"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_2">
            <div className="nicdark_container nicdark_clearfix">
              <div className="nicdark_section nicdark_height_200" />
              <div className="grid grid_12">
                <strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">
                  {blogDetail.title}
                </strong>
                <div className="nicdark_section nicdark_height_10" />

                <div className="nicdark_section">
                  <div className="nicdark_display_inline_block">
                    <div className="nicdark_section nicdark_height_10" />
                    <div className="nicdark_section nicdark_position_relative nicdark_padding_right_40 nicdark_box_sizing_border_box">
                      <img
                        alt=""
                        width="35"
                        className="nicdark_position_absolute nicdark_border_radius_100_percentage"
                        src={avatar}
                      />
                      <div className="nicdark_section nicdark_padding_left_45 nicdark_box_sizing_border_box">
                        <div className="nicdark_section nicdark_height_5" />
                        <h3 className="nicdark_color_white">
                          {blogDetail.author.displayName}
                        </h3>
                      </div>
                    </div>
                    <div className="nicdark_section nicdark_height_10" />
                  </div>

                  <div className="nicdark_display_inline_block">
                    <div className="nicdark_section nicdark_height_10" />
                    <div className="nicdark_section nicdark_position_relative nicdark_padding_right_40 nicdark_box_sizing_border_box">
                      <img
                        alt=""
                        width="30"
                        className="nicdark_position_absolute"
                        src="img/icons/icon-calendar.svg"
                      />
                      <div className="nicdark_section nicdark_padding_left_45 nicdark_box_sizing_border_box">
                        <div className="nicdark_section nicdark_height_5" />
                        <h3 className="nicdark_color_white">{date}</h3>
                      </div>
                    </div>
                    <div className="nicdark_section nicdark_height_10" />
                  </div>

                  <div className="nicdark_display_inline_block">
                    <div className="nicdark_section nicdark_height_10" />
                    <div className="nicdark_section nicdark_position_relative">
                      <img
                        alt=""
                        className="nicdark_position_absolute"
                        width="30"
                        src="img/icons/icon-clock.svg"
                      />
                    </div>
                    <div className="nicdark_section nicdark_height_10" />
                  </div>
                </div>
                <div className="nicdark_section nicdark_height_10" />
              </div>
            </div>
          </div>
        </div>

        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_12">
              <div className="nicdark_width_100_percentage nicdark_float_left">
                <div
                  contentEditable="false"
                  dangerouslySetInnerHTML={{ __html: `${blogDetail.desc}` }}
                />

                <div className="nicdark_section nicdark_height_50" />

                <div className="nicdark_section">
                  <a
                    className="nicdark_display_inline_block nicdark_padding_8 nicdark_first_font nicdark_margin_right_10 nicdark_color_greydark nicdark_padding_left_0"
                    href="#"
                  >
                    Tag :
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    # Vegan Food
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    # Recipies
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    Vegetarian
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    Fruit
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    # Italian Food
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    # Pizza
                  </a>
                  <a
                    className="nicdark_display_inline_block nicdark_font_size_13 nicdark_border_1_solid_grey nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_10"
                    href="#"
                  >
                    Lasagne
                  </a>
                </div>

                <div className="nicdark_section nicdark_height_30" />

                <div className="nicdark_section">
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-facebook-color.svg"
                  />
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-twitter-color.svg"
                  />
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-pinterest-color.svg"
                  />
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-linkedin-color.svg"
                  />
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-google-color.svg"
                  />
                  <img
                    alt=""
                    width="40"
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-mail-color.svg"
                  />
                </div>
              </div>
              <div className="nicdark_section nicdark_height_50" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogDetail.propTypes = {
  blogDetail: PropTypes.string.isRequired,
};

export default withStyles(s)(BlogDetail);
