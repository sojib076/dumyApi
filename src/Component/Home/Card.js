import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Card = ({ post }) => {
    AOS.init();
    const {
        id,
        text,
        image,
    } = post;
    return (
        <div>
            <div className="card w-80 h-[80%] bg-[#95B1CC] shadow-xl !text-black" data-aos='fade-up'>
                <figure><img src={image} alt="Shoes" className='h-[100%] w-[60%]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {text}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                </div>
                <Link to={`/post/${id}`}>    <button className='btn btn-primary'> See more </button></Link>
            </div>
            
        </div>
    );
};

export default Card;