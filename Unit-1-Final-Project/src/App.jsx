import './App.css'
import { Routes, Route, Navigate } from 'react-router'
import Footer from './components/Footer'
import Header from './components/header-components/Header.'
import MainBody from './components/MainBody'
import HomeBody from './components/landing-page-components/HomeBody'
import AboutBody from './components/landing-page-components/AboutBody'
import AdminPortalBody from './components/admin-components/AdminPortalBody'
import AdminPortalSetsBody from './components/admin-components/AdminPortalSetsBody'
import AdminPortalImagesBody from './components/admin-components/AdminPortalImagesBody'

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

function Assets() {
  // Sticker organizer
  return(
    <MainBody/>
  );

}

function AdminPortal() {
  // Admin Portal
  return(
    <AdminPortalBody/>
  );

}

function AdminPortalSetsManager() {
  // Admin Portal - Manage sets
  return(
    <AdminPortalSetsBody/>
  );

}

function AdminPortalImagesManager() {
  // Admin Portal - Upload new images
  return(
    <AdminPortalImagesBody/>
  );

}

function App() {

  return (

    <div id='content'>
        
      <Header/>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/assets' element={<Assets />} />

        <Route path='/admin' element={<AdminPortal />} />

        <Route path='/admin/sets-manager' element={<AdminPortalSetsManager />} />

        <Route path='/admin/images-manager' element={<AdminPortalImagesManager />} />

        <Route path='*' element={<Navigate to="/" />} />

      </Routes>

      <Footer/>

    </div>
    
  );

}

export default App
