import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import UserItem from './UserItem';
import s from './Members.css';

class Members extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={s.main}>
          <h1 className={s.title}>
            Thành viên tích cực
            <small>Đóng góp nhiều cho cộng đồng</small>
          </h1>

          <div className="row">
            {this.props.userList.map(item => {
              return (
                <div className="col-md-3" key={item._id}>
                  <UserItem model={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Members);
