import logo from './logo.svg';
import './App.css';
import CandiesList from './CandiesList';
import CatsList from './CatsList';

// import your arrays here
import { candies } from './candies-data';
import { myCats } from './cats-data';

function App() {
  return (
    <div className="App">
      <div>
      Render all your lists here. Pass the arrays as props.
        <CandiesList candies={candies}/>
      </div>
      <div>
        <CatsList cats={myCats}/>
      </div>
    </div>
  );
}

export default App;
