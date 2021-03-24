import React,{useContext} from 'react';
import '../index.css';
import {ThemeContext} from '../contexts/ThemeContext';

const Form=()=>{
    const {theme}=useContext(ThemeContext);


    return(
        <div style={{backgroundColor:theme.background,color:theme.textColor}} className="px-6 space-y-10 mb-32">
            <form style={{backgroundColor:theme.background,color:theme.textColor}}>
                <div style={{background:theme.elementColor,color:theme.text}} className="mb-4 ">
                    <input style={{background:theme.elementColor,color:theme.text}} type="text" className="relative pl-14 py-2 border-2 outline-none border-gray-200 border-opacity-30 shadow-md w-full rounded rounded-lg" placeholder="Search for a country.."/>
                    <svg  className="w-5 absolute -mt-8 ml-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#AEB6BF">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <div style={{background:theme.background,color:theme.text}}>
                    <select style={{background:theme.elementColor,color:theme.text}} name="region" className="w-72 outline-none pl-6 py-2 border-2 border-gray-300 border-opacity-50 shadow-lg rounded rounded-md font-semibold">
                            <option>Filter by Region</option>
                            <option className="border-none rounded rounded-t-md" value="Africa">Africa</option>
                            <option value="Amerika">Amerika</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;