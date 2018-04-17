/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import config from '../config';
import moment from 'moment-timezone';

async function action({ store, fetch }) {
  const user = store.getState().user || {};
  const dateStr = moment().tz('Asia/Ho_Chi_Minh').format('YYYYMMDD');

  const qChallenge = {
    state: 'published',
    dateStr,
  };
  const qEntry = {
    dateStr,
    state: 'published'
  };
  const qChallengeAccepted = {
    dateStr,
  };

  const fetchUser = () => fetch(
    `${config.api}/user?sort=-lastAccessedAt&limit=8`,
  ).then(res => res.json());

  const fetchTopic = () => fetch(
    `${config.api}/topic?query=${JSON.stringify(qChallenge)}`,
  ).then(res => res.json());

  const fetchChallengeAccepted = () => fetch(
    `${config.api}/entry?query=${JSON.stringify(qChallengeAccepted)}
      &populate=author&limit=3`,
  ).then(res => res.json()).then(body => {
    return body.map(i => i.author);
  });

  const fetchEntry = () => fetch(
    `${config.api}/entry?query=${JSON.stringify(qEntry)}&populate=author`,
  ).then(res => res.json());

  const fetchUserEntry = () => fetch(
    `${config.api}/entry?query=${JSON.stringify({
        author: user._id, dateStr,
      })}&populate=author&limit=3`,
    ).then(res => res.json());

  const fetchTotalEntry = () => fetch(
    `${config.api}/entry/count?query=${JSON.stringify(qChallengeAccepted)}`,
  ).then(res => res.json());

  const [
    userList,
    topicList,
    challengeAcceptedList,
    entryList,
    totalEntry,
    userEntryList,
  ] = await Promise.all([
    fetchUser(),
    fetchTopic(),
    fetchChallengeAccepted(),
    fetchEntry(),
    fetchTotalEntry(),
    fetchUserEntry(),
  ]);

  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Home
        user={user}
        userList={userList}
        topic={topicList[0] || null}
        challengeAcceptedList={challengeAcceptedList || []}
        entryList={entryList}
        totalEntry={totalEntry.count}
        userEntry={userEntryList[0] || null}
      />
    ),
  };
}

export default action;
