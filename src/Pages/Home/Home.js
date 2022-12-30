import { Carousel } from 'flowbite-react';
import React from 'react';
import Rate from './Rate';
import img1 from '../../assets/task2.jfif'
import img2 from '../../assets/task3.png'
import img3 from '../../assets/task4.webp'

const Home = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-5">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src={img1} alt="" />
                        Go to your task
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src={img2} alt="" />
                        Set the task and Complete the task
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className='w-full' src={img3} alt="" />
                    </div>
                </Carousel>
            </div>
            <h2 className='text-3xl text-blue-900 text-center mt-5'>Explore Your Daily Task</h2>
            <Rate></Rate>
        </div>
    );
};

export default Home;