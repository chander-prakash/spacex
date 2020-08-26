/* eslint-disable space-before-function-paren */
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Loader from './components/common/Loader'
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
        <section className="container" role="main">
          <HeaderWrapper />
          <section className="body-container">
            <FilterWrapper />
            <Suspense fallback={<Loader />}>
              <SpaceXWrapper />
            </Suspense>
          </section>
        </section>
        <footer className="footer">
          <h2>Developed by:</h2>
          <span>Chander Prakash</span>
        </footer>
      </MissionProvider>
    </BrowserRouter>
  )
}

export default App
