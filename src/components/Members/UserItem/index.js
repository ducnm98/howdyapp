import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.css';

const UserItem = ({ model }) => {
  return (
    <div className={s.main}>
      <div className={s.avatar}>
        <img src={model.avatar} alt=""/>
      </div>
      <h6 className={s.name}>{model.displayName}</h6>
    </div>
  );
};

export default withStyles(s)(UserItem);
