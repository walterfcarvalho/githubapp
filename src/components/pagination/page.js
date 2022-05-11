'use strict'

import React from 'react'

const Page = ({ page, pageLink, onClick }) => {
    
    const dots = () => <spam  className='pagination-link'>...</spam>
    
    const Componente =  page === '...' ? dots : 'a' 
    
    const handleClick = !onClick ? null : (e) => {
        e.preventDefault()
        onClick(page)
    }
    return (
        <Componente className='pagination-link'
            href={pageLink} 
            onClick={handleClick}>
            {page} 
        </Componente>         
    )
}

export default Page