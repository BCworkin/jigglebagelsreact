import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import NavBarLower from '../components/NavBarLower';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <NavBarLower/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home;