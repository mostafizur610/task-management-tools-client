import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddTask = () => {
    return (
        <div className='p-12'>
            <h1 className='flex justify-center text-4xl text-yellow-500 mb-4'>Add Daily Task</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
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

                <Button type="submit">
                    Add This Task
                </Button>
            </form>
        </div>
    );
};

export default AddTask;