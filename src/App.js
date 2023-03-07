import { useState } from 'react';
import './App.css';

function App() {
  const [inputField, setInputField] = useState('');
  const [count, setCount] = useState(0);

  const handleChanges = (e) => {
    setInputField(e.target.value);
    console.log(e.target.value)
  }
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  return (
    <>
      <form>
        <input type="text" onChange={handleChanges} />
      </form>
      <div>

        <div>{inputField}</div>
        <div>{count}</div>
        <button onClick={handleClick} >Increment</button>
      </div>
    </>
  );
}

export default App;
