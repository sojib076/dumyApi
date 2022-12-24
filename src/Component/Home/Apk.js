import React from 'react';

const Apk = () => {
    return (
        <section className="bg-blue-600 2xl:py-24 2xl:bg-white ">
            <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use mobile app for better performance</h2>
                            <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                                </a>

                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="relative px-12">
                          
                            <img className="relative w-[50%] max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Apk;