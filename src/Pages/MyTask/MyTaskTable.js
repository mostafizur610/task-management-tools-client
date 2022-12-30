import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from "react-icons/hi2";

const MyTaskTable = () => {
    return (
        <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Delete
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Image
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Task name
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Working Date
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Working Hours
                    </Table.HeadCell>

                    <Table.HeadCell>
                        Edit
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Completed
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                            <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500"><HiOutlineTrash /></Link>
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Image of task 02
                        </Table.Cell>
                        <Table.Cell>
                            Daily task 02
                        </Table.Cell>
                        <Table.Cell>
                            21/10/2023
                        </Table.Cell>
                        <Table.Cell>
                            9hrs
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </Link>
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 dark:text-blue-500"
                            >
                                <Button size="xs">
                                    <Link to='/completedTask'>Complete</Link>
                                </Button>
                            </Link>
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>

                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                            <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500"><HiOutlineTrash /></Link>
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Image of task 03
                        </Table.Cell>
                        <Table.Cell>
                            Daily task 03
                        </Table.Cell>
                        <Table.Cell>
                            22/10/2023
                        </Table.Cell>
                        <Table.Cell>
                            8hrs
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </Link>
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 dark:text-blue-500"
                            >
                                <Button size="xs">
                                    <Link to='/completedTask'>Complete</Link>
                                </Button>
                            </Link>
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                            <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500"><HiOutlineTrash /></Link>
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Image of task
                        </Table.Cell>
                        <Table.Cell>
                            Daily task 01
                        </Table.Cell>
                        <Table.Cell>
                            20/10/2023
                        </Table.Cell>
                        <Table.Cell>
                            10hrs
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </Link>
                        </Table.Cell>

                        <Table.Cell>
                            <Link
                                className="font-medium text-blue-600 dark:text-blue-500"
                            >
                                <Button size="xs">
                                    <Link to='/completedTask'>Complete</Link>
                                </Button>
                            </Link>
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyTaskTable;