import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlogItem.css';
import Link from '../Link';
import moment from 'moment';

class BlogItem extends React.Component {
  render() {
    const model = this.props.blogItem;
    const slug = `/blog/${model.slug}`;
    const image = model.image
      ? model.image.url
      : '/img/avatar/avatar-chef-1.png';
    const date = moment(model.publishedDate).format('MMMM Do YYYY');
    const avatar = model.author.avatar || '/img/avatar/avatar-chef-1.png';

    return (
      <div>
        <div className="nicdark_section nicdark_box_sizing_border_box">
          <div className="nicdark_section nicdark_border_1_solid_grey">
            <div className={s.body}>
              <img alt="" className="nicdark_section" src={image} />
              <div className="nicdark_bg_greydark_alpha_gradient_2 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_30 nicdark_box_sizing_border_box">
                <div className="nicdark_display_none_all_iphone nicdark_position_absolute nicdark_bottom_30">
                  <div className="nicdark_display_table nicdark_float_left">
                    <img
                      alt=""
                      width="30"
                      className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                      src={avatar}
                    />
                    <p className=" nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle ">
                      {model.author.displayName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nicdark_section nicdark_padding_30 nicdark_box_sizing_border_box">
              <h5 className="nicdark_second_font">{date}</h5>
              <div className="nicdark_section nicdark_height_10" />
              <h2>
                <Link className={s.title} to={slug}>
                  {model.title}
                </Link>
              </h2>
              <div className="nicdark_section nicdark_height_20" />
              <h4
                contentEditable="false"
                dangerouslySetInnerHTML={{ __html: `${model.brief.split("\r\n<")[0].slice(0, 128)}` }}
              />
              <div className="nicdark_section nicdark_height_20" />
              <Link
                className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box  nicdark_color_white nicdark_bg_green nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                to={slug}
              >
                Đọc tiếp...
              </Link>
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_40" />
      </div>
    );
  }
}

export default withStyles(s)(BlogItem);
