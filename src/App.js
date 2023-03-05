import './App.css';
import { data } from './data';
import Planet from './Planet';

function App() {
  return (
    <div>
      {data.map((value, key) => {
        return (
          <Planet key={key} name={value.name} isGas={value.isGasPlanet} />
        )
      })}
    </div>
  );
}

export default App;
