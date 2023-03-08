import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UseLayoutEffect from './components/UseLayoutEffect';


function App() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then((data) => {
      setEmail(data.data[0].email)
      console.log("AN API IS CALLED RIGHT HERE")
    }) 
  },[])
  return (
    <>
    {/* <h2>{email}</h2>
    <h2>{count}</h2>
    <button onClick={() => {
      setCount(prev => prev + 1)
    }} >Change it on click</button> */}
    <UseLayoutEffect/>
    </>
  );
}

export default App;
