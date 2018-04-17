import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './HeroBanner.css';

class HeroBanner extends React.Component {
  render() {
    return (
      <div className={s.main}>
        <div className={s.bg} style={{backgroundImage: 'url(img/parallax/img2.jpg)'}} />
        <div className="container">
          <div className={s.body}>
            Học hay, viết chất!
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeroBanner);
