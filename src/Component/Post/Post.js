import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const loaderdata = useLoaderData();

    return (
        <div className='bg-white font-serif !text-black p-5'>

            <section>
                {/* post by  */}
                <div className="card w-80 shadow-xl mx-auto">
                    <h1 className='text-black '> Post by {loaderdata.owner.firstName} {loaderdata.owner.lastName} </h1>
                </div>
                {/* user Image */}
                <div className=''>
                    <img src={loaderdata.owner.picture} alt="Shoes" className=' mt-5 h-20 w-20 rounded-full mx-auto' />
                </div>

            </section>
            {/* post details  */}
            <section>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='lg:w-[90%] lg:h-[80%] mx-auto'>
                        <img src={loaderdata.image} alt="" srcset="" className='lg:w-[50%] lg:h-[100%]' />
                    </div>
                    <div>
                        <p className='text-black text-2xl'> {loaderdata.text} </p>
                        <>
                            <h1>
                              This post Got   likes: {loaderdata.likes}
                            </h1>
                            <span> <h1>  Post ON  : {loaderdata.publishDate}</h1></span>
                        </>
                        <div className='mt-5'>
                            Tags used : {loaderdata.tags.map((tag) => {
                                return <div className="badge badge-success">{tag}</div>
                            })}
                        </div>
                        <div className='mt-10'>
                            View US ON : <button className='btn btn-primary'>
                                <a href={loaderdata.link}>
                                    Instagram
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Post;