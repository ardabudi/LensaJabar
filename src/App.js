import React, { Component } from 'react';
import './App.css';
import M from "materialize-css";
import Topnav from './Components/Nav/Topnav'
import Sidenav from "./Components/Nav/Sidenav";
import LeftAd from './Components/Ads/LeftAd'
import RightAd from './Components/Ads/RightAd'
import Secondarynav from './Components/Nav/Secondarynav'
import TopAd from './Components/Ads/TopAd'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <Router>
        <Topnav />
        <div className="container">
          <img
            src="https://lensasriwijaya.com/wp-content/uploads/2020/04/Banner-Pemkab-Muba.jpg"
            alt="banner"
            className="banner"
          />
        </div>
        <Sidenav />
        <LeftAd />
        <RightAd />
        <Secondarynav />
        <TopAd />
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
