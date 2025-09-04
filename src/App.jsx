import { useEffect, useState } from 'react';
import './App.css';
import { getApiData } from './API/ApiServices';

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

  return <div>App</div>;
};

export default App;
