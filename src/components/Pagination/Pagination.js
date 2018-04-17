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
import s from './Pagination.css';

class Pagination extends React.Component {
  render() {
    const linkPage = this.props.linkPage;
    const currentPage = this.props.currentPage || 1;
    const totalPage = this.props.totalPage || 1;

    let previous = (
      <a className="nicdark_display_inline_block nicdark_padding_10">
        <strong>previous</strong>
      </a>
    );
    let nextPage = (
      <a className="nicdark_display_inline_block nicdark_padding_10">
        <strong>next</strong>
      </a>
    );

    if (currentPage != totalPage) {
      nextPage = (
        <a
          className="nicdark_display_inline_block nicdark_color_greydark nicdark_padding_10"
          href={[linkPage, currentPage + 1].join('/')}>
          <strong>next</strong>
        </a>
      );
    }
    if (currentPage <= totalPage && currentPage != 1) {
      previous = (
        <a
          className="nicdark_display_inline_block nicdark_color_greydark nicdark_padding_10"
          href={[linkPage, currentPage - 1].join('/')}>
          <strong>previous</strong>
        </a>
      );
    }

    return (
      <div className="nicdark_section nicdark_text_align_center">
        {previous}
        {nextPage}
      </div>
    );
  }
}

export default withStyles(s)(Pagination);
