import './App.css';
import AppFooter from './Components/AppFooter';
import AppBanner from './Components/Banner';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">

      <AppBanner/>
      <space>
        <SideMenu/>
      </space>
      <AppFooter/>

    </div>
  );
}

export default App;
