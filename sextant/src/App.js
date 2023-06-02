import './App.css';
import AppFooter from './Components/AppFooter';
import AppBanner from './Components/Banner/AppBanner';
import Card1 from './Components/Cards/Card';
import LantencyCard from './Components/Cards/LantencyCard';
//import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">

      <AppBanner/>
    
      <space>
       <Card1></Card1>
       <LantencyCard></LantencyCard>

      </space>
      
      <AppFooter/>
    </div>
  );
}

export default App;
