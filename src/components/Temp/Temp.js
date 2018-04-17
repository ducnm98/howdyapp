import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Temp.css';

class Temp extends React.Component {
  render() {
    return (
      <div className={s.root}>
      </div>
    );
  }
}

export default withStyles(s)(Temp);
