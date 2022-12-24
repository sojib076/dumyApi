import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    const {
        id,
        text,
        image,
    } = post;
    return (
        <div>
            <div className="card w-80 h-[80%] bg-[#5e3131] shadow-xl">
                <figure><img src={image} alt="Shoes" className='h-[100%] w-[60%]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {text}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <Link to={`/post/${id}`}>    <button className='btn btn-primary'> See more </button></Link>

                </div>
            </div>
        </div>
    );
};

export default Card;