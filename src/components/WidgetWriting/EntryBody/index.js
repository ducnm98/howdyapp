import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import EntryList from '../EntryList';
import s from './styles.css';

const Temp = (props) => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.body}>
          <div className={s.list}>
            <h3>Thử thách đã hoàn thành</h3>
            <EntryList {...props} />
          </div>

          <div className={s.example}>
            <h3>Example</h3>
            <div className={s.content}
              dangerouslySetInnerHTML={{
                __html: props.topic.example.replace(new RegExp('\n', 'g'), '<br/>')
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(s)(Temp);
