import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.css';

const Author = (props) => {
  const { model } = props;

  return (
    <div className={s.main}>
      <div className={s.avt}>
        <img src={model.avatar} alt=""/>
      </div>
      <h6 className={s.name}>{model.displayName}</h6>
    </div>
  );
}

export default withStyles(s)(Author);
