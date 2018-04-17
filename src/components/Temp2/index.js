import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.css';

const Temp = (props) => {
  return (
    <div className={s.main}>
    </div>
  );
};

export default withStyles(s)(Temp);
