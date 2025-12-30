import React from 'react'; 
import { createBrowserRouter } from "react-router"; 
import Root from '../pages/Root/Root';
 import ErrorPages from '../pages/ErrorPage/ErrorPages';
  import Home from '../pages/Home/Home'; 
  import About from '../pages/About/About';
   import AppDetails from '../pages/AppDetails/AppDetails'; 
   export const router = createBrowserRouter([
     { 
      path: "/", 
      Component: Root,
       errorElement:<ErrorPages/>, 
       children:[
         { 
          index:true,
          loader:()=>fetch('../appData.json'),
           path:'/', 
           Component:Home 
          },
            {
               path: '/about',
                Component:About 
              }, 
              {
                 path:'/appDetails/:Id',
                  loader:()=>fetch('../appData.json'),
                   Component:AppDetails 
                  } 
                ] 
              },
             ]);