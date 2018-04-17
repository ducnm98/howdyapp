import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

const UserList = (props) => {
  const { challengeAcceptedList, totalEntry } = props;

  return (
    <div className={s.main}>
      <div className={s.body}>
        {challengeAcceptedList.map(item => {
          return (
            <div className={s.item} key={item._id}>
              <img src={item.avatar} alt="" />
            </div>
          );
        })}
      </div>

      {challengeAcceptedList.length ? (
        <span className={s.label}>đã có {totalEntry} người đã tham gia thử thách.</span>
      ) : (
        <span>Hãy là người đầu tiên tham gia thử thách.</span>
      )}
    </div>
  );
}

export default withStyles(s)(UserList);
