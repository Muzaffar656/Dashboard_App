import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
// https://jsonplaceholder.typicode.com/posts/1/comments

function App() {
  const [data, setData] = useState([]);
const [isEditing,setIsEditing] = useState(false)
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments/');
          const data = await response.json();
          setData(data);
      };

      fetchData();
  }, []);
const handleEdit = (id)=>{
  console.log(id)
}
  return (
    <div className='grid'>
    {
      data.map((item,i)=>(
        <Card
        key={i}
        id={item.id}
        posted={item.postId}
          name={item.name}
          email={item.email}
          body={item.body}
          handleEdit={handleEdit}
        />
      ))
    }
    </div>
  );
}

export default App;
