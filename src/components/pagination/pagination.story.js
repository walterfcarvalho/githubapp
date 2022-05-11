
import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Pagination from './index'

storiesOf('Pagination', module)
.add('whitout propos', () => (
    <Pagination />
))

.add('with total and active page', () => (
    <Pagination 
        total = {10} 
        activePage = {5} 
    />
))

.add('with pageLink', () => (
    <Pagination 
        total = {10} 
        activePage = {5} 
        pageLink = 'http://mypage.com/page/%page%' 
    />
))

.add('with callback', () => (
    <Pagination 
        total = {10} 
        activePage = {5} 
        pageLink = 'http://mypage.com/page/%page%' 
        onClick={ (page) => {
            window.alert(page)        
        }}    
    />
))
