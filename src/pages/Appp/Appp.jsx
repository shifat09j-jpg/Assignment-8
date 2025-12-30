import React from 'react';
import { Link } from 'react-router';

const Appp = ({singleApp}) => {
    const {id,image, description, reviews, ratingAvg, title} = singleApp
    return (
      <Link to={`/appDetails/${id}`}>
        <div className="card bg-base-100  h-[435px] shadow-sm border p-6">
  <figure className='p-4 mx-auto  bg-gray-100 w-2/3'>
     <img className='h-[316px] ' src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{ratingAvg}</div>
      <div className="badge badge-outline">{reviews}</div>
    </div>
  </div>
</div>
      </Link>
    );
};

export default Appp;