import React from 'react'
import SearchHeader from '../components/SearchHeader'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <header><SearchHeader/></header>
        {children}</div>
  )
}

export default layout