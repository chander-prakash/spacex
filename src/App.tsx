/* eslint-disable space-before-function-paren */
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import FilterWrapper from './components/filter/FilterWrapper'
// importing filters component
import HeaderWrapper from './components/header/HeaderWrapper'
// import the provider
import { MissionProvider } from './context/mission'
const SpaceXWrapper = React.lazy(() => import('./components/spacex/SpaceXWrapper'))

function App() {
  return (
    <BrowserRouter>
      <MissionProvider>
        <div className="container">
          <HeaderWrapper />
          <div className="body-container">
            <FilterWrapper />
            <Suspense fallback={() => <div className='loader'>Loading...</div>}>
              <SpaceXWrapper />
            </Suspense>
          </div>
        </div>
        <div className="footer">
          <h2>Developed by:</h2>
          <span>Chander Prakash</span>
        </div>
      </MissionProvider>
    </BrowserRouter>
  )
}

export default App
