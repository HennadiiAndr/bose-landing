import Header from './components/header'
import Recommended from './components/recomended';
import Categories from './components/categories';
import './styles/landingstyle.scss';
import Buydirect from './components/buyDirect';
import Contacts from './components/contacts';
import Footerphoto from './assets/photofooter.png';

function App() {
  return (
    <div className="main">
      <div className="mainflow">
        <Header/>
        <Recommended/>
        <Categories/>
        <Buydirect/>
        <Contacts/>
        <img src={Footerphoto} alt='img'></img>
      </div>
    </div>
  );
}

export default App;
