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
import s from './Contact.css';

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
            <SocialBar user={this.props.user} />
            <HeaderBar />
            <SmallBanner title="Liên Hệ" bg="/img/banner/contract.jpg" />

            <Height h={'50px'} />
            <div className="nicdark_section">
              <div className="nicdark_container nicdark_clearfix">
                <div className="grid grid_6">
                  <p><strong>Hotline:</strong> <a href="tel:0969 77 2193">0969 77 2193</a></p>
                  <p>​​<strong>Địa chỉ:</strong> Toà nhà Flemington, 182 Lê Đại Hành, Quận 11, Tp. HCM</p>
                  <p>​​<strong>Facebook:</strong> <a href="https://www.facebook.com/howdy.chat" target="_blank">https://www.facebook.com/howdy.chat</a></p>
                  <p>​​<strong>Email:</strong> <a href="mailto:nhan.bum@gmail.com">nhan.bum@gmail.com</a></p>
                  <div className="nicdark_section nicdark_height_100"></div>
                </div>
                <div className="grid grid_6"></div>
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
