import React from 'react';
import NaviBar from '../Components/NaviBar';
import Banner from '../Components/Banner';
import Sections from '../Components/Sections'
import Footer from '../Components/Footer';
import './App.css'

const  App: React.FC = () => {
  return (
    <div className= "App">
      <NaviBar />
      <Banner />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
