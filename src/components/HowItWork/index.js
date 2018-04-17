import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.css';

class WhyHowdy extends React.Component {
  render() {
    return (
      <div className={s.main}>
        <div className={s.bg}></div>

        <div className="container">
          <h1 className={s.header}>
            Cách sử dụng Howdy?
          </h1>

          <div className="row">
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/accept.png" alt=""/>
                <h4 className={s.subtitle}>Chấp nhận thử thách </h4>
                <p>Bạn cần nhấn nút “Chấp nhận thử thách” để bắt đầu viết bài trên Howdy.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/submit.png" alt=""/>
                <h4 className={s.subtitle}>Đăng bài viết</h4>
                <p>Bài viết cần được đăng trong vòng 24 giờ kể từ khi bạn chấp nhận thử thách.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/feedback.png" alt=""/>
                <h4 className={s.subtitle}>Nhận Feedback và cải thiện</h4>
                <p>Sau khi đăng bài viết, bạn sẽ nhận được Feedback từ Howdy trong vòng 24 giờ qua Email và Facebook.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WhyHowdy);
