import React from 'react';
import MyTaskTable from './MyTaskTable';

const MyTask = () => {
    return (
        <div>
            <h2 className='text-center text-4xl text-green-800 my-6'>List of daily task</h2>
            <MyTaskTable></MyTaskTable>
        </div>
    );
};

export default MyTask;