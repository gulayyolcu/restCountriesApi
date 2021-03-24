import React,{useContext} from 'react';
import CountryList from './CountryList';
import Header from './Header';
//import Country from './Country';

import {ThemeContext} from '../contexts/ThemeContext';


const MainPage=()=>{
  const {theme}=useContext(ThemeContext);
  
  return (
 
      <div style={{backgroundColor:theme.background,color:theme.textColor}} className="min-h-screen w-full sm:px-6 md:px-10 md:py-16">
          <Header/>
          <CountryList/>         
      </div>

  );
}

export default MainPage;
