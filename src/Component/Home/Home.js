import React, { useEffect, useState } from 'react';
import Apk from './Apk';
import Card from './Card';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Home = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://dummyapi.io/data/v1/post?limit=10', {
            headers: {
                'app-id': '63a73045cb605a19daa87b1f'
            }
        })
            .then(res => res.json())
            .then(data => setData(data.data))
            
    }, []);
 
    return (
        <div className='bg-white'>
            <Apk></Apk>
            <div className=' grid grid-cols-3 gap-10 w-[90%] mx-auto mt-10'>
                {
                    data.map(post => <Card key={post.id} post={post}> </Card>)
                }
            </div>

        </div>
    );
};

export default Home;