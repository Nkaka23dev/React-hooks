
import { useReducer, useState } from 'react';
import './App.css';
import Reducer from './components/Reducer';

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1, showText: state.showText };
    case "SHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText]  = useState(true);

  const [state, dispatch] = useReducer(reducer, { count: 0, showtext: true })

  // const handleClick = () => {
  //   setCount(count => count + 1);
  //   setShowText(!showText);
  // }
  return (
    <div>
      {/* <Reducer/> */}
      <div style={{ display: "grid" }}>
        <h1 style={{ margin: "auto" }}>{state.count}</h1>

        <button onClick={() => {
          dispatch({type: "INCREASE"});
          
        }} style={{ margin: "auto" }}>Ruducer counter</button>
        {state.showText && <h1 style={{ margin: "auto" }}>My text is here</h1>}
      </div>
    </div>
  );
}

export default App;
