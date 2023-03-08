
import { useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, text: state.text }
    case "toggleShowText":
      return { count: state.count, text: !state.text }
    default:
      return state
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: true })
  return (
    <div style={{ display: 'grid' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }} >{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
        style={{ fontSize: '1rem', textAlign: 'center', padding: '1rem 2rem', backgroundColor: 'blue', color: 'white', border: 'white', margin: 'auto', cursor: 'pointer' }} >Increment</button>

      {state.text && <h1 style={{ fontSize: '3rem', textAlign: 'center', paddingTop: '1rem' }}>Show or Hide Me</h1>}
    </div>
  );
}

export default Reducer;
