
'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search', module)
  .add('Default', () => (
    <Search
      handleSearch={() => {}}
      isDisabled={() => {}}
    />
  ))
