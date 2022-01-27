import logo from './logo.svg';
import './App.css';
import CandiesList from './CandiesList';
import CatsList from './CatsList';
import HomegoodsList from './HomegoodsList';

// import your arrays here
import { candies } from './candies-data';
import { myCats } from './cats-data';
import { homegoods } from './homegoods-data';

function App() {
  return (
    <div className="App">
      <div>
        <h3>Candies</h3>
        <CandiesList candies={candies}/>
      </div>
      <div>
        <h3>Cats</h3>
        <CatsList cats={myCats}/>
      </div>
      <div>
        <h3>Home Goods</h3>
        <HomegoodsList homegoods={homegoods} />
      </div>
    </div>
  );
}

export default App;
