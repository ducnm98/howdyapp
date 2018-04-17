/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Header from 'components/Header';
import WidgetWriting from 'components/WidgetWriting';
import Members from 'components/Members';
import Footer from 'components/Footer';
import WhyHowdy from 'components/WhyHowdy';
import HowItWork from 'components/HowItWork';
import EntryBody from 'components/WidgetWriting/EntryBody';

import s from './Home.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: this.props.userEntry,
      challengeAcceptedList: this.props.challengeAcceptedList,
      totalEntry: this.props.totalEntry,
    };
    this.setUserEntry = this.setUserEntry.bind(this);
  }

  setUserEntry(value) {
    let totalEntry = this.state.totalEntry;
    const accepted = this.state.challengeAcceptedList;
    const acceptedStr = accepted.map(i => i._id).join(',');

    if (acceptedStr.indexOf(this.props.user._id) === -1) {
      accepted.push(this.props.user);
      totalEntry += 1;
    }

    this.setState({
      userEntry: value,
      challengeAcceptedList: accepted,
      totalEntry,
    });
  }

  render() {
    return (
      <div className="nicdark_site">
        <div className="nicdark_site_fullwidth nicdark_site_fullwidth_boxed nicdark_clearfix">
          <Header user={this.props.user}/>

          <WidgetWriting
            user={this.props.user}
            topic={this.props.topic}
            entryList={this.props.entryList}

            challengeAcceptedList={this.state.challengeAcceptedList}
            totalEntry={this.state.totalEntry}
            userEntry={this.state.userEntry}

            setUserEntry={this.setUserEntry}
          />
          <WhyHowdy user={this.props.user} />

          <EntryBody
            topic={this.props.topic}
            entryList={this.props.entryList}
          />

          <HowItWork />
          <Members userList={this.props.userList} />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Main);
