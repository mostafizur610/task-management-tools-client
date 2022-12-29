import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const NavigationBar = () => {
    return (
        <div className='p-6 bg-orange-300'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt=""
                    />
                    <span className="self-center whitespace-nowrap font-semibold dark:text-white text-green-800 text-3xl">
                        Task Manager
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Navbar.Link>

                        <Link to='/'>Home</Link>
                    </Navbar.Link>

                    <Navbar.Link>
                        <Link to='/addTask'>Add Task</Link>
                    </Navbar.Link>

                    <Navbar.Link  >
                        <Link to='/myTask'>My Task</Link>
                    </Navbar.Link>

                    <Navbar.Link >
                        <Link to='/completedTask'> Completed Task</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;