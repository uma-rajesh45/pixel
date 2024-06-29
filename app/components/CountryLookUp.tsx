"use client";
import React, { useEffect, useState } from 'react'

const CountryLookUp = () => {
    const [coutry,setCountry] = useState("");
    useEffect(()=>{
        const getCountry =async ()=>{
            const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            .then((res)=>res.json())
            .then((data)=>data.country)
            console.log(response)
            if(!response) return;
            setCountry(response)
        }
        getCountry()
    },[])
  return (
    <div>{coutry}</div>
  )
}

export default CountryLookUp