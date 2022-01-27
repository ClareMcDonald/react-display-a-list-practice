import logo from './logo.svg';
import './App.css';
import CandiesList from './CandiesList';

// import your arrays here
import { candies } from './candies-data';


function App() {
  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;
