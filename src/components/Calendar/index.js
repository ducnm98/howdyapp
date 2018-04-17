import React from 'react';
import Type from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment';

import s from './styles.css';

const Calendar = (props) => {
  const date = moment(props.date);
  return (
    <div className={s.main}>
      <div className={s.day}>{date.format('DD')}</div>
      <div className={s.month}>{date.format('MMM')}</div>
    </div>
  );
};

Calendar.propTypes = {
  date: Type.instanceOf(Date).isRequired,
}

export default withStyles(s)(Calendar);
