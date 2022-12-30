import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddTask = () => {
    return (
        <div className='p-12'>
            <h1 className='flex justify-center text-4xl text-yellow-500 mb-4'>Add Daily Task</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your Task"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="task name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        type="text"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="date1"
                            value="Working Date"
                        />
                    </div>
                    <TextInput
                        id="date1"
                        type="text"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="hour1"
                            value="Working Hour"
                        />
                    </div>
                    <TextInput
                        id="hour1"
                        type="text"
                        required={true}
                    />
                </div>

                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                    />
                </div>
                <Link to='/myTask'>  <Button type="submit">
                    Add This Task
                </Button></Link>
            </form>
        </div>
    );
};

export default AddTask;