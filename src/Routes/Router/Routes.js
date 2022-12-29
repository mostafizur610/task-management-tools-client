import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTaask/CompletedTaask";
import Home from "../../Pages/Home/Home";
import MyTask from "../../Pages/MyTask/MyTask";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
            }
        ]
    },
    {
        path: '*',
        element: <div><h1 className='flex justify-center mt-48 text-red-900 text-5xl'>404 Not Found</h1><br /><h4 className='flex justify-center text-yellow-500 text-xl'>This route is not defined</h4></div>
    }

])


export default router;