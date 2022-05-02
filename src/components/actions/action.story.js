'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Actions from './index'

storiesOf('Actions component', module)
  .add('first history', () => (
    <Actions
      handleRepo={action('Get Repos')}
      handleStarred={action('getStarred')}
    />

  ))
