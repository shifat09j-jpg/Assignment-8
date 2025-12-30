import React from 'react'; import { useLoaderData, useParams } from 'react-router';
 const AppDetails = () => {
     const {Id} = useParams();
      const id = parseInt(Id);
       const data = useLoaderData();
        const singleApp = data.find(app => app.id === id);
         const { image, description} = singleApp;
          return (
          <div className='w-2/3 mx-auto'> 
          <img className='w-48' src={image} alt='image' /> 
          <p>{description}</p>
         <button className="btn btn-accent m-2">Open</button> 
         <button className="btn btn-info m-2">WishList</button>
            </div>
  );
};

export default AppDetails;
