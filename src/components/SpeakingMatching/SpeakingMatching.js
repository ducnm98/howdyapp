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

import Link from '../Link';
import MemberItem from '../MemberItem';

import s from './SpeakingMatching.css';

class SpeakingMatching extends React.Component {
  render() {
    return (
      <div className="nicdark_section">
        <div className="nicdark_container nicdark_clearfix">
          {this.props.activeUsers.map(user => {
            return (
              <MemberItem model={user} key={user._id} />
            );
          })}
          <div className="nicdark_section nicdark_height_70"></div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SpeakingMatching)
