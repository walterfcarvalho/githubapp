
'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

storiesOf('UserInfo', module)
  .add('Default', () => (
    <UserInfo
      userinfo={{
        photo: 'https://avatars.githubusercontent.com/u/11591494?v=4',
        repos: 50,
        followers: 1,
        following: 3,
        username: 'walterfcarvalho'
      }}
    />
  ))
