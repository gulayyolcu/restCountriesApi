import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const Header=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext);
    
    return(
        <div style={{backgroundColor:theme.elementColor,color:theme.textColor}} className="px-6 py-10 mb-6 flex rounded rounded-lg justify-between items-center sm:text-lg">
            <h1 style={{color:theme.textColor}} className="font-bold text-md">Where in the world?</h1>
            <p style={{color:theme.textColor}} onClick={toggleTheme} className="flex items-center justify-center">
                <svg className="w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span style={{color:theme.textColor}} className="pl-1 font-semibold text-sm">Dark Mode</span>
            </p>
        </div>
    )
}

export default Header;