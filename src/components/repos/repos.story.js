'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('With title', () => (
    <Repos
      className='repos-info'
      title='Favoritos'
    />
  ))
  .add('With Repos', () => (
    <Repos
      title='Favoritos'
      repos={[{
        link: 'http://www.google.com',
        name: 'google'
      }, {
        link: 'http://www.uol.com.br',
        name: 'uol'
      }
      ]}
    />
  ))
