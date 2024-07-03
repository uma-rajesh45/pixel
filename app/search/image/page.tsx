import ImageSearch from '@/app/components/ImageSearch';
import Link from 'next/link';
import React, { Suspense } from 'react'
const page =async ({searchParams}:{searchParams:{searchTerm:string,start:string}}) => {
  const start = searchParams.start || "1"
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.G_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${start}`);
  if(!response.ok){
    throw new Error("something went wrong ! please try again")
  }
  const data =await response.json();
  const results:{title:string}[] = data.items;
  if(!results){
    return(
      <div className='flex flex-col justify-center items-center mt-9'>
        <h1 className='text-3xl mb-4'>Nothing is found for the word {searchParams.searchTerm}!</h1>
        <p className='flex flex-col items-center'>Try Again! By Navigating To Home Page
          <Link href="/" className='text-blue-600'>Home</Link>
        </p>
      </div>
    )
  }
  return (
    <div>
      {results&&
      <Suspense>
      <ImageSearch results={data}/>
      </Suspense>
      }
    </div>
    
  )
}

export default page