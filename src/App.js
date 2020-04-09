import React from 'react';
import Header from './components/Header/Header';
import MainScreen from './components/MainScreen/MainScreen';
import Characteristic from './components/Characteristic/Characteristic';
import SectionApartments from './components/SectionApartments/SectionApartments';
import SectionRequest from './components/SectionRequest/SectionRequest';
import SectionVideo from './components/SectionVideo/SectionVideo';
import SectionDistrict from './components/SectionDistrict/SectionDistrict';
import SectionQuestions from './components/SectionQuestions/SectionQuestions';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <Characteristic />
      <SectionApartments />
      <SectionRequest />
      <SectionVideo />
      <SectionDistrict />
      <SectionQuestions />
      <Footer />
    </>
  );
}

export default App;

