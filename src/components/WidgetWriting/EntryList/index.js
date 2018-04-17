import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment';

import Author from 'components/Author';
import s from './styles.css';

const EntryList = (props) => {
  const { entryList } = props;

  return (
    <div className={s.main}>
      {entryList.map(i => {
        return (
          <div className={s.item} key={i._id}>
            <div className={s.top}>
              <div className={s.left}>
                <Author model={i.author} />
              </div>
              <div className={s.right}>
                <small className={s.time}>
                  {moment(i.createdAt).format('MMMM Do, h:mm:ss a')}
                </small>
              </div>
            </div>

            <div className={s.content}
              dangerouslySetInnerHTML={{
                __html: i.content.replace(new RegExp('\n', 'g'), '<br/>')
              }}
            ></div>
          </div>
        )
      })}

      {!entryList.length && (
        <p>Hãy là người đầu tiên hoàn thành thử thách!</p>
      )}
    </div>
  );
}

export default withStyles(s)(EntryList);
