import Header from './components/header/Header';
import SideNav from './components/sideNav/SideNav';

import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <div className="App-container">
        <Header />
        <div className="App-body">
          <SideNav />
          <div className="content" />
          <div className="sideNav" />
        </div>
        <div className="footer start">
          <div className="l-blue">Terms&Conditions | Privacy policy</div>
        </div>
      </div>
    </div>
  );
}

export default App;
