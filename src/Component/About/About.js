import React from 'react';

const About = () => {
    return (
        <div className='bg-white font-serif text-black'>
            <h1 className='text-5xl '> 
                About  My self 
            </h1> 
            <section> 
                <p className='w-[50%] mx-auto text-xl'> 
                    I am sojb Das ,
                    I am a web developer and a student Of BA on
                    Bangladesh , I am passonate  web developer 
                    and I love to learn new things , I am a Quick learner 
                </p>
                <h1 className='text-5xl'> 
                    Skilss
                </h1>
                <div> 
                    I am a Full stack web developer , I have a good knowledge on 
                    React js , Node js , Express js , MongoDB  , tailwind css , next js ,
                </div>
              <h1 className='text-5xl'> 
                    My Projects
              </h1>
              <div> 
                <ul> 
                    <li> 
                        <span> 
                            <h1 className='text-2xl mt-5'> Moblie trader </h1>
                            <p>
                                This is a E-commerce website , where you can buy 
                                mobile phones , I have used React js , Next js , tailwind css ,
                                and express  for backend
                            </p>
                            <button className='btn btn-accent'> 
                                <a href='https://eleven-deded.web.app/'> 
                                View Live site
                                </a>
                            </button>
                        </span>
                     </li> 
                    <li> 
                        <span> 
                            <h1 className='text-2xl mt-5'> 
                                programming Energy 
                             </h1>
                            <p>
                                this course website , where you can learn programming
                                I have used React js , Next js , tailwind css ,
                                and express  for backend
                            </p>
                            <button className='btn btn-accent'> 
                                <a href='https://assingment10-38a6e.web.app/'> 
                                View Live site
                                </a>
                            </button>
                        </span>
                     </li> 
                </ul>
              </div>
                <h1 className='text-5xl text-black'> 
                    please note I have more projects 
                </h1>
            </section>
        </div>
    );
};

export default About;