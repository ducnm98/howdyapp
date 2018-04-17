import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import config from 'routes/config';

import s from './styles.css';


class ContentEditable extends React.Component {
  constructor(props) {
    super(props);
    this.emitChange = this.emitChange.bind(this);
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      ReactDOM.findDOMNode(this).focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
  }

  emitChange() {
    var value = ReactDOM.findDOMNode(this).innerHTML;
    if (this.props.onChange && value !== this.lastHtml) {
      this.props.onChange({
        target: { value, },
      });
    }
    this.lastHtml = value;
  }

  render() {
    return (
      <div {...this.props} contentEditable
        onInput={this.emitChange}
        onBlur={this.emitChange}
        dangerouslySetInnerHTML={{__html: this.props.value}}>
      </div>
    );
  }
};

class WritingSection extends React.Component {
  constructor(props) {
    super(props);

    const entry = this.props.userEntry;
    this.state = {
      form: entry ? entry.content : '',
      html: entry ? entry.content : '',
      submitting: false,
      wordCount: entry ? entry.content.split(' ').length : 0,
    };

    this.setForm = this.setForm.bind(this);
    this.submit = this.submit.bind(this);
  }

  setForm(e) {
    const wordCount = e.target.value.split(' ');
    this.setState({
      form: e.target.value,
      wordCount: wordCount.length,
    });
  }

  submit(e) {
    e.preventDefault();
    this.setState({ submitting: true });

    const payload = {
      author: this.props.user._id,
      topic: this.props.topic._id,
      title: this.props.topic.title,
      content: this.state.form,
    };

    const entry = this.props.userEntry;
    const entryId = entry ? entry._id : '';
    fetch(`${config.api}/entry/${entryId}`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: `${entryId ? 'PUT' : 'POST'}`,
        body: JSON.stringify(payload),
      },
    ).then(res => res.json()).then(d => {
      if (payload.content.split(' ').length < 120) {
        alert('Cảm ơn bạn đã tham gia thử thách, hãy viết ít nhất 120 chữ để hoàn thành thử thách và nhận được feedback từ tutor.');
      } else {
        alert('Chúc mừng, bạn đã hoàn thành thử thách viết lách. Tutor sẽ gởi feedback cho bạn sớm thông qua email!');
        this.props.onClose();
      }
      this.props.setUserEntry(d);
      this.setState({ submitting: false });
    });
  }

  render() {
    return (
      <div className={s.main}>
      <div className={s.headers}>
        <h3 className={s.title}>BÀI VIẾT</h3>
        <small className={s.count}>
          {this.state.wordCount} từ - (tối thiểu 120 từ)
        </small>
      </div>
        <form onSubmit={this.submit}>
          <ContentEditable autoFocus className={s.textarea}
            value={this.state.html}
            onChange={this.setForm}
          />

          <div className={s.action}>
            <button type="submit" className="btn btn-lg btn-warning">
              Đăng bài{this.state.submitting && '...'}
            </button>
            <button type="button" className="btn btn-lg btn-outline-secondary"
              onClick={this.props.onClose}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default withStyles(s)(WritingSection);
