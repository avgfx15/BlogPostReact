import React, { useEffect, useState } from 'react';
import { addNewPost, updatePost } from '../API/ApiServices';

const NewBlogPost = ({ apiData, setApiData, updateData, setUpdateData }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const isUpdateDataEmpty = Object.keys(updateData).length === 0;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const buttonValue = e.nativeEvent.submitter.value;

    if (!formData.title || !formData.body) {
      console.log('Please give Input');
    } else {
      if (buttonValue === 'Submit') {
        const res = await addNewPost(formData);

        if (res.status === 201) {
          setApiData([...apiData, res.data]);
          setFormData({
            title: '',
            body: '',
          });
        }
      } else {
        try {
          const res = await updatePost(updateData.id, formData);

          if (res.status === 200) {
            const updatedData = apiData.map((item) => {
              if (item.id === updateData.id) {
                return {
                  ...item,
                  title: formData.title,
                  body: formData.body,
                };
              }
              return item;
            });
            setApiData(updatedData);
            setUpdateData({});
          }
        } catch (error) {
          console.log('Error to Update Post', error.message);
        }
      }
    }
  };

  useEffect(() => {
    updateData &&
      setFormData({
        title: updateData.title || '',
        body: updateData.body || '',
      });
  }, [updateData, setApiData]);

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <form onSubmit={handleSubmit} className='' noValidate={true}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            placeholder='Enter title'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='body'
          >
            Body
          </label>
          <textarea
            className='shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='body'
            placeholder='Enter body'
            value={formData.body}
            name='body'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-300'
            type='submit'
            value={isUpdateDataEmpty ? 'Submit' : 'Update'}
          >
            {isUpdateDataEmpty ? 'Submit' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlogPost;
