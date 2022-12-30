import { Rating } from 'flowbite-react';
import React from 'react';

const Rate = () => {
    return (
        <div className='mx-6'>
            <React.Fragment>
                <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.95 out of 5
                    </p>
                </Rating>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Rate daily task
                </p>
                <Rating.Advanced percentFilled={70}>
                    5 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={17}>
                    4 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={8}>
                    3 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={4}>
                    2 star
                </Rating.Advanced>
                <Rating.Advanced percentFilled={1}>
                    1 star
                </Rating.Advanced>
            </React.Fragment>
        </div>

    );
};

export default Rate;