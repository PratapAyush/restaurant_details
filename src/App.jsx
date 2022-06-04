import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';

import userInfo from "./data/userInfo.json"
import restaurants from "./data/restaurants.json"
import offers from "./data/offers.json"
function App() {

  
  return (
    <div>
      {/* Code Here*/} 
      <Navbar {...userInfo.location}/>
      <Offers offers = {offers}/>

      <section className="near-you">

      <Filters/>
      <Restaurants restaurants={restaurants}/>


      </section>
      

    
    </div>
  );
}

export default App;
