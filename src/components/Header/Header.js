import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Header.css';

class Header extends React.Component {
  render() {
    const user = this.props.user;
    let userAction = (
      <div className={s.profile}>
        <a href="/login/facebook" className={s.username}>
          Đăng nhập với Facebook
        </a>
      </div>
    );

    if (user && user.displayName) {
      userAction = (
        <div className={s.profile}>
          <span className={s.username}>{user.displayName}</span>
          <img alt={user.displayName} src={user.avatar} />
        </div>
      )
    };

    return (
      <div className={s.main}>
        <div className={s.bg} />
        <div className={`${s.body} container`}>
          <div className={s.left}>
            <div className={s.title}>
              <h1>
                <img src="/img/assets/howdy.png" alt="howdy icon"/>
                Howdy
              </h1>
              <small>Học tiếng anh từ cộng đồng</small>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.login}>
              {userAction}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
