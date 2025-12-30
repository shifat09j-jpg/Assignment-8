import React, { Suspense, useEffect, useState } from 'react';
import Appp from '../Appp/Appp';
import { Link } from 'react-router';



const Apps = ({data}) => {

    const [allApps, setAllApps] = useState([]);

    // useEffect(() => {
    //     fetch("appData.json")
    //     .then(res=> res.json())
    //     .then(data=> {
    //        setAllApps(data);
    //     })
    // },[])

    // const appPromise=fetch('./appsData.json').then(res=>res.json())
    return (
       
        <div className=' p-5 gap-5'>
            <h1 className='text-3xl text-center font-bold'>Trending Apps</h1>
            <p className='text-center '>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 max-w-full h-[886px] gap-4 items-center justify-between mx-auto'>
                <Suspense fallback={<span>loading...</span>}>
               {
                data.slice(0,8).map((singleApp)=><Appp key={singleApp.id} singleApp={singleApp}></Appp>)
               }
            </Suspense>
            </div>
            <div className='mx-auto justify-center px-130 py-7'>
            <Link className='btn btn-outline items-center mx-auto py-5 px-15 bg-[#9f62f2] text-amber-50' to='/About'>Show All</Link>
            </div>
        </div>
    );
};

export default Apps;