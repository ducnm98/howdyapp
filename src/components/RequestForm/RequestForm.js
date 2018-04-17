import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from 'components/Link';
import s from './RequestForm.css';

class RequestForm extends React.Component {
  render() {
    const model = this.props.model || {};

    return (
      <div clasName={s.formContainer}>
        <div className={s.titleForm}>
          <h2><strong>Xác nhận</strong></h2>
        </div>
        <hr />
        <div className={s.body}>
          <div className={s.avatarContent}>
            <img alt="" className="nicdark_section"
              src={model.avatar || '/img/avatar/avatar-chef-2.png'}
            />
          </div>

          <div className={s.main}>
            <div className={s.widthAuto}>
              <h2><strong>{model.displayName}</strong></h2>
            </div>

            <div className={s.subTitle}>
              <h5><strong>Howdy's Tutor</strong></h5>
            </div>

            <div className={s.intro}>
              Aivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.
            </div>
          </div>
        </div>

        <div className={s.footer}>
          <button className={s.callButton} onClick={this.props.onClose}>
            Gởi yêu cầu nói chuyện
          </button>
          <button className={s.cancelButton} onClick={this.props.onClose} >
            Hủy
          </button>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(RequestForm);
