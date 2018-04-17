import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Popup.css';

class Popup extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={'nicdark_section ' + s.backdrop}>
        <div className={'nicdark_section ' + s.popup}>
          <button className={s.btnClose} onClick={this.props.onClose}>
            ✕
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Popup);
