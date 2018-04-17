import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import moment from 'moment-timezone';
import config from 'routes/config';

import Calendar from 'components/Calendar';
import UserList from './UserList';
import WritingSection from './WritingSection';
import EntryList from './EntryList';

import s from './WidgetWriting.css';

class WidgetWriting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { topic, user } = this.props;

    if (topic === null) {
      return (
        <div className="container">
          <p>Không có thử thách nào hôm nay.</p>
        </div>
      );
    }

    const totalEntry = this.props.totalEntry || 0;
    const cover = topic && topic.cover && topic.cover.filename
      ? 'https://api.goingsunny.com/uploads/' + topic.cover.filename
      : null;

    return (
      <div className="container">
        <div className={s.main}>
          <h1 className={s.mainTitle}>Thử thách viết lách</h1>
          <p>
            Hãy tham gia thử thách viết bài ngay hôm nay để nhận
            được feedback từ đội ngũ tutor có nhiều kinh nghiệm của Howdy.
            Bên dưới là chủ đề của ngày hôm nay.
          </p>

          <div className={s.body}>
            <div className={s.title}>
              <Calendar date={moment().tz('Asia/Ho_Chi_Minh').toDate()} />
              <h3>{topic.title}</h3>
            </div>
            {cover && <img className={s.img} src={cover} alt="" />}
            <p className={s.topic}>{topic.topic}</p>
          </div>

          <div className={s.block}>
            <UserList
              challengeAcceptedList={this.props.challengeAcceptedList}
              totalEntry={totalEntry}
            />
          </div>

          {!this.state.showForm && (
            <div className={s.block}>
              {(user && user._id) ? (
                <button className={`${s.btn} btn btn-warning btn-lg`}
                  onClick={this.toggleForm}
                >
                  Chấp nhận thử thách
                </button>
              ) : (
                <a href="/login/facebook" className="btn btn-outline-warning btn-lg">
                  Đăng nhập với Facebook
                </a>
              )}
            </div>
          )}

          {this.state.showForm && (
            <WritingSection {...this.props} onClose={this.toggleForm} />
          )}
        </div>
      </div>
    );
  }
};

export default withStyles(s)(WidgetWriting);
