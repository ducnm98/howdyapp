/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User, UserLogin, UserClaim, UserProfile } from './data/models';
import config from './config';
import fetch from 'isomorphic-fetch';
import randomString from 'randomstring';

/**
 * Sign in with Facebook.
 */
passport.use(
  new FacebookStrategy(
    {
      clientID: config.auth.facebook.id,
      clientSecret: config.auth.facebook.secret,
      callbackURL: '/login/facebook/return',
      profileFields: [
        'displayName',
        'name',
        'email',
        'link',
        'locale',
        'timezone',
      ],
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      /* eslint-disable no-underscore-dangle */
      const queryObj = {
        provider: profile.provider,
        providerId: profile.id,
      };
      const fetchLink = `${config.api.goingsunny}/user?query=${JSON.stringify(queryObj)}`;

      fetch(fetchLink)
      .then(res => res.json())
      .then(data => {
        return fetch(`https://graph.facebook.com/${profile.id}/picture?redirect=false&type=large`)
        .then(res => res.json())
        .then(avatar => {
          if (!data.length) {
            const newUser = {
              providerId: profile.id,
              email: profile._json.email,
              displayName: profile.displayName,
              gender: profile.gender,
              provider: profile.provider,
              profileUrl: profile.profileUrl,
              password: randomString.generate(10),
              avatar: avatar.data.url,
              accessToken,
              lastAccessedAt: new Date(),
              name: {
                first: profile.name.familyName,
                last: profile.name.givenName,
              },
            };

            fetch(`${config.api.goingsunny}/user`, {
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
              body: JSON.stringify(newUser),
            })
            .then(res => res.json())
            .then(user => {
              done(null, user);
            })
            .catch(done);
          } else {
            // The account is exists
            const user = data[0];
            fetch(`${config.api.goingsunny}/user/${user._id}`, {
              headers: { 'Content-Type': 'application/json' },
              method: 'PUT',
              body: JSON.stringify({
                avatar: avatar.data.url,
                lastAccessedAt: new Date(),
              }),
            });
            // dont need to wait for update data
            done(null, user);
          }
        });
      })
      .catch(done);
    },
  ),
);

export default passport;
