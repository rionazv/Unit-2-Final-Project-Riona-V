import './App.css'
import { Routes, Route, Navigate } from 'react-router'
import Footer from './components/Footer'
import Header from './components/header-components/Header.'
import MainBody from './components/MainBody'
import HomeBody from './components/landing-page-components/HomeBody'
import AboutBody from './components/landing-page-components/AboutBody'

function Home() {
  // Homepage
  return(
    <HomeBody/>
  );

}

function About() {
  // About Page
  return(
    <AboutBody/>
  );

}

function Stickers() {
  // Sticker organizer
  return(
    <MainBody/>
  );

}

function App() {

  return (

    <div id='content'>
        
      <Header/>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/assets' element={<Stickers />} />

        <Route path='*' element={<Navigate to="/" />} />

      </Routes>

      <Footer/>

    </div>
    
  );

}

export default App
