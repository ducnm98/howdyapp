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
import moment from 'moment';
import Link from '../Link';
import Popup from '../Popup';

import s from './VideoItem.css';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup = () => {
    this.setState({
      isOpen: true,
    });
  };

  closePopup = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { model } = this.props;
    const videoId = model.embededLink;
    const coverImg = '/img/courses/img1.png';
    const date = moment(new Date(model.date)).format('LL');

    return (
        <div className="col-md-4">
          <div className={s.main}>
            <div className={s.layer} onClick={this.openPopup}></div>
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder="0"
            />
          </div>

          <Popup show={this.state.isOpen} onClose={this.closePopup}>
            <div className={s.popup}>
              <iframe
                width="800" height="450"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                allow="autoplay; encrypted-media"
                frameborder="0" allowfullscreen
              />
            </div>
          </Popup>
        </div>
    );
  }
}

export default withStyles(s)(EventItem);
