import React, { useEffect } from 'react';
import './App.scss';
import logo from './assets/logo.png'
import BdayMain from './components/BdayMain';
import BdayGift from './components/BdayGift';
import BdayHistory from './components/BdayHistory';
import BdayIllust from './components/BdayIllust';
import footerLogo from './assets/footer_logo.png'

function App() {

  const onScroll = (e) => {
    var header = document.getElementById("nav");
    if (e.target.scrollTop > header.offsetTop) {
      header.classList.add("navFixed");
    } else {
      header.classList.remove("navFixed");
    }
  };

  const goToComponent = (navText) => {
    // var header = document.getElementById(navText)
    var location = document.querySelector("#gift").offsetTop;
    console.log(location)
    var scrollNum = 0
    switch(navText) {
      case 'hbd' : 
        scrollNum = 98
        break;
      case 'gift' :
        scrollNum = location
        break;
      case 'history' :
        scrollNum = 1465
        break;
      case 'illust' :
        scrollNum = 2150
        break;
      default : scrollNum = 0
    }
    var container = document.getElementById('container')
    container.scrollTop = scrollNum
  }
  
  useEffect(() => {
    document.title="너만의 생일선물 (찡_긋)"
    document.bgColor = "#F6F6F6"
  })

  return (
    <div id="container" className="App" style={{overflowY:'scroll'}} onScroll={onScroll}>
      <header>
        <div className="logo-header" id="logo-header">
          <img src={logo} className="logo" alt="Responsive image" />
        </div>
        <div className="nav" id="nav">
          <span className="nav-text" onClick={() => goToComponent('hbd')}>HBD</span>
          <span className="nav-text" onClick={() => goToComponent('gift')}>Gift</span>
          <span className="nav-text" onClick={() => goToComponent('history')}>History</span>
          <span className="nav-text" onClick={() => goToComponent('illust')}>Illust</span>
        </div>
      </header>
      <div id="hbd"> < BdayMain /> </div>
      <div id="gift"><BdayGift /></div>
      <div style={{overflowX: 'scroll', width: '100vw'}}><BdayHistory /></div>
      <div id="illust"><BdayIllust/></div>
      <footer>
        <div className="footer">
          <div className="footer-item">
            <div className="footer-left">
              <div className="copy">© 2020 HBD Project Mangchungs</div>
              <div className="footer-info">경기도 동두천시 송내중앙중 망충이들</div>
            </div>
            <div className="footer-right">
              <img src={footerLogo}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
