import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const loading = () => {
    const results = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="w-full px-3 pb-30 md:pl-[14%] lg:pl-52">
          
          {results.map((result) => (
            <div className="mb-5 max-w-xl space-y-2 mt-5" key={result}>
                <Skeleton/>
                <Skeleton 
                />
              <Skeleton/>
              
            </div>
          ))}
        </div>
      );
}


export default loading
