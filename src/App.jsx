import { useEffect, useState } from 'react';
import './App.css';
import { deleteApiData, getApiData } from './API/ApiServices';
import CardComponent from './Component/CardComponent';
import NewBlogPost from './Component/NewBlogPost';

const App = () => {
  const [apiData, setApiData] = useState([]);

  const [updateData, setUpdateData] = useState({});

  const getData = async () => {
    try {
      const res = await getApiData();
      console.log(res.data);
      setApiData(res.data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Implement delete functionality here
      const response = await deleteApiData(id);
      if (response.status === 200) {
        // If deletion is successful, update the local state to remove the deleted item
        const updatedApiData = apiData.filter((item) => item.id !== id);
        setApiData(updatedApiData);
        console.log(`Delete item with id: ${id}`);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const handleEdit = async (cardItem) => {
    // Implement edit functionality here
    setUpdateData(cardItem);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col items-center flex-wrap gap-4 p-4 justify-center w-full'>
      <h1 className='text-3xl font-bold text-center'>Blog Post</h1>
      <NewBlogPost
        apiData={apiData}
        setApiData={setApiData}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[85%]'>
        {apiData?.map((item) => (
          <CardComponent
            key={item.id}
            cardItem={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
