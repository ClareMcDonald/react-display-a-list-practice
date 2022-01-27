import logo from './logo.svg';
import './App.css';
import CandiesList from './CandiesList';
import CatsList from './CatsList';
import HomegoodsList from './HomegoodsList';
import PostsList from './PostsList';

// import your arrays here
import { candies } from './candies-data';
import { myCats } from './cats-data';
import { homegoods } from './homegoods-data';
import { posts } from './posts-data';

function App() {
  return (
    <div className="App">
      <div>
        <CandiesList candies={candies}/>
      </div>
      <div>
        <CatsList cats={myCats}/>
      </div>
      <div>
        <HomegoodsList homegoods={homegoods} />
      </div>
      <div>
        <PostsList posts={posts}/>
      </div>
    </div>
  );
}

export default App;
