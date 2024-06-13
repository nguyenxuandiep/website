import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import Train from '../../components/Train/Train'
import Overview from '../../components/Overview/Overview';
import IspaceNumber from '../../components/IspaceNumber/IspaceNumber';
import YearOfFormation from '../../components/YearOfFormation/YearOfFormation';
import Promotion from '../../components/Promotion/Promotion';
import Member from '../../components/Member/Member';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode}/>
      <Carousel />
      <Train isDarkMode ={isDarkMode}/>
      <Overview />
      <IspaceNumber isDarkMode ={isDarkMode}/>
      <YearOfFormation />
      <Promotion />
      <Member />
      <Footer />
    </div>
  )
}
