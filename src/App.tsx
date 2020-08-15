import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FilterWrapper from "./components/filter/FilterWrapper";
// importing filters component
import HeaderWrapper from "./components/header/HeaderWrapper";
import SpaceXWrapper from "./components/spacex/SpaceXWrapper";
// import the provider
import { MissionProvider } from "./context/mission";



function App() {
  return (
    <BrowserRouter>
      <MissionProvider>
        <div className="container">
          <HeaderWrapper />
          <div className="body-container">
            <FilterWrapper />
            <SpaceXWrapper />
          </div>

        </div>
        <div className="footer">
          <h3>Developed by:</h3>
          <span>Chander Prakash</span>
        </div>
      </MissionProvider>
    </BrowserRouter>
  );
}

export default App;
