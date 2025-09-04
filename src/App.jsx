import { useEffect, useState } from 'react';
import './App.css';
import { getApiData } from './API/ApiServices';
import CardComponent from './Component/CardComponent';

const App = () => {
  const [apiData, setApiData] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col items-center flex-wrap gap-4 p-4 justify-center'>
      <h1>Blog Post</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {apiData?.map((item) => (
          <CardComponent key={item.id} cardItem={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
