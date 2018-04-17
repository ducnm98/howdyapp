import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.css';

class WhyHowdy extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className={s.main}>
        <div className={s.bg}></div>
        <div className="container">
          <h1 className={s.header}>
            Tại sao nên sử dụng Howdy?
          </h1>

          <div className="row">
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/free.png" alt=""/>
                <h4 className={s.subtitle}>Miễn phí</h4>
                <p>Các dịch vụ của Howdy hoàn toàn miễn phí. Chúng tôi đặt mục tiêu giúp người dùng chuẩn bị tốt cho kỳ thi cũng như cải thiện tiếng Anh của người Việt Nam.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/easy.png" alt=""/>
                <h4 className={s.subtitle}>Dễ dàng</h4>
                <p>Bạn chỉ cần đăng bài viết. Howdy sẽ tự động kiểm tra ngữ pháp, từ vựng và cách hành văn dựa trên sự kết hợp giữa công nghệ và cộng đồng. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={s.item}>
                <img src="/img/assets/community.png" alt=""/>
                <h4 className={s.subtitle}>Cộng đồng</h4>
                <p>Howdy được xây dựng bởi đội ngũ các giáo viên tiếng Anh, trợ giảng và đặc biệt hàng ngàn người học tiếng Anh toàn quốc.</p>
              </div>
            </div>
          </div>

          {!(user && user._id) && (
            <div className="row">
              <div className="col-md-12">
                <div className={s.login}>
                    <a href="/login/facebook" className="btn btn-warning btn-lg">
                      Đăng nhập với Facebook
                    </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WhyHowdy);
