import React from 'react'
import CountryLookUp from './CountryLookUp'

const Footer = () => {
    const listLeftItems = [
        {label:"About",class:"hover:underline cursor-pointer"},
        {label:"Advertising",class:"hover:underline cursor-pointer"},
        {label:"Business",class:"hover:underline cursor-pointer"},
        {label:"How Search Works?",class:"hover:underline cursor-pointer"},
    ]
    const listRightItems = [
        {label:"Privacy",class:"hover:underline cursor-pointer"},
        {label:"Terms",class:"hover:underline cursor-pointer"},
        {label:"Settings",class:"hover:underline cursor-pointer"},

    ]
  return (
    <footer className='w-full text-sm text-gray-500 absolute bottom-0 bg-[#f2f2f2]'>
        <div className='px-4'>
            <CountryLookUp/>
        </div>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between sm:px-4 py-3 space-y-4 sm:space-y-0'>
            <ul  className='flex items-center space-x-6'>
               {listLeftItems.map((item)=>(
                <li key={item.label} className={item.class}>{item.label}</li>
               ))}
            </ul>
            <ul className='flex items-center space-x-6'>
            {listRightItems.map((item)=>(
                <li key={item.label} className={item.class}>{item.label}</li>
               ))} 
            </ul>
        </div>
    </footer>
  )
}

export default Footer