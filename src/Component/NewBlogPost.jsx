import React, { useState } from 'react';
import { addNewPost } from '../API/ApiServices';

const NewBlogPost = ({ apiData, setApiData }) => {

        const [formData, setFormData] = useState({
                title: '',
                body: ''
        });

        const handleChange = (e) => {

                const name = e.target.name;
                const value = e.target.value;

                setFormData({
                        ...formData,
                        [name]: value
                });
        }

        const handleSubmit = async (e) => {
                e.preventDefault();
                const res = await addNewPost(formData);
                console.log(res);

                if (res.status === 201) {
                        setApiData([...apiData, res.data]);
                        setFormData({
                                title: '',
                                body: ''
                        });
                }

        };

        return <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate={true}>
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Title
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title" name='title' value={formData.title} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                                        Body
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" placeholder="Enter body" value={formData.body} name='body' onChange={handleChange} ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Submit
                                </button>
                        </div>




                </form>
        </div>;
};

export default NewBlogPost;
