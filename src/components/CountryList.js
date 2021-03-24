import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import {ThemeContext} from '../contexts/ThemeContext';
import { Link,useHistory} from "react-router-dom";

const CountryList=()=>{

    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/country');
    };

    const {theme}=useContext(ThemeContext);
    const [selected,setSelected]=useState(false);
    const [searched,setSearched]=useState(false);

    const [country,setCountry]=useState([]);
    const [cntry,setCntry]=useState("");

     const getData=()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response => setCountry(response.data))
        .catch((err)=>console.log(err))
 
    }

    useEffect(()=>{
       getData();
       
    })

       const allData=country.filter((all)=>all);

       const filtered = Array.from(new Set(country.map(c=>c.region)));

        const filterDropdown = country.filter(function(result) {
                return result.region===cntry;
        })

        const filterByInput=country.filter(con => {
            return (
              con.name.toLowerCase().includes(cntry.toLowerCase())
            )
        }
        );

        const searchCountry=(event)=>{
            setCntry(event.target.value);
            setSearched(true);
        }

        
    
        const selectCountry=(event)=>{
            
            if(event.target.value===""){
                
                setCntry(country);
            }else{
                setCntry(event.target.value);
                setSelected(true);
            }
            
        }  

        const dropdown=filtered.map((contry,index) =>(
                                            
                                            <option key={index} value={contry}>
                                                {contry}
                                            </option>
                                    )                        
                                );



        const countryList= (selected===false && searched===false)?(allData.map((country)=>
      
            <Link to={{ pathname:`/country/${country.callingCodes}`,country:{country},theme:{theme}}} >
                
                
                <div style={{backgroundColor:theme.background,color:theme.text}} className="px-6 py-6" key={country.callingCodes}>
                    <div style={{backgroundColor:theme.elementColor,color:theme.text}} className="shadow-md rounded rounded-lg">
                        <img className="rounded rounded-t-lg" src={country.flag} alt=""/>
                        <h1 className="font-bold text-xl py-6 pl-6">{country.name}</h1>
                        <p style={{color:theme.text}} className="text-lg pb-1 pl-6"><span className="font-semibold">Population:</span> {country.population}</p>
                        <p className="text-lg pl-6"><span className="font-semibold">Region:</span> {country.region}</p>
                        <p className="text-lg pt-1 pb-4 pl-6"><span className="font-semibold">Capital:</span> {country.capital}</p>
                    </div>
                </div>
            </Link>
     
       
    )):(selected===true && searched===false)?(filterDropdown.map((country)=>
        
          (
           
                <Link to={{ pathname:`/country/${country.callingCodes}`,country:{country},theme:{theme}}}> 
                
                    <div style={{backgroundColor:theme.background,color:theme.text}} className="px-6 py-6" key={country.callingCodes}>
                        <div style={{backgroundColor:theme.elementColor,color:theme.text}} className="shadow-md rounded rounded-lg">
                            <img className="rounded rounded-t-lg" src={country.flag} alt=""/>
                            <h1 className="font-bold text-xl py-6 pl-6">{country.name}</h1>
                            <p style={{color:theme.text}} className="text-lg pb-1 pl-6"><span className="font-semibold">Population:</span> {country.population}</p>
                            <p className="text-lg pl-6"><span className="font-semibold">Region:</span> {country.region}</p>
                            <p className="text-lg pt-1 pb-4 pl-6"><span className="font-semibold">Capital:</span> {country.capital}</p>
                        </div>
                    </div>
                </Link>
     
           
            )
            
    )):(selected===false && searched===true)?(filterByInput.map((country)=>
        
    (
       
            <Link to={{ pathname:`/country/${country.callingCodes}`,country:{country},theme:{theme}}}>
                
                <div style={{backgroundColor:theme.background,color:theme.text}} className="px-6 py-6" key={country.callingCodes}>
                    <div style={{backgroundColor:theme.elementColor,color:theme.text}} className="shadow-md rounded rounded-lg">
                        <img className="rounded rounded-t-lg" src={country.flag} alt=""/>
                        <h1 className="font-bold text-xl py-6 pl-6">{country.name}</h1>
                        <p style={{color:theme.text}} className="text-lg pb-1 pl-6"><span className="font-semibold">Population:</span> {country.population}</p>
                        <p className="text-lg pl-6"><span className="font-semibold">Region:</span> {country.region}</p>
                        <p className="text-lg pt-1 pb-4 pl-6"><span className="font-semibold">Capital:</span> {country.capital}</p>
                    </div>
                </div>
            </Link>
  
       
      )
      
)):null;
    

    return(
        <div>
            <div style={{backgroundColor:theme.background,color:theme.textColor}} className="px-6 space-y-10">
                <form onSubmit={handleSubmit} style={{backgroundColor:theme.background,color:theme.textColor}}>
                    <div style={{background:theme.elementColor,color:theme.text}} className="mb-4 ">
                        <input onChange={searchCountry} style={{background:theme.elementColor,color:theme.text}} type="text" className="relative pl-14 py-2 border-2 outline-none border-gray-200 border-opacity-30 shadow-md w-full rounded rounded-lg" placeholder="Search for a country.."/>
                        <svg  className="w-5 absolute -mt-8 ml-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#AEB6BF">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div style={{background:theme.background,color:theme.text}}>
                            <select id="select_id" onChange={selectCountry} style={{background:theme.elementColor,color:theme.text}} name="region" className="w-72 outline-none pl-6 py-2 border-2 border-gray-300 border-opacity-50 shadow-lg rounded rounded-md font-semibold">
                            <option value="" disabled selected>Filter by Region</option>
                                    {dropdown}       
                            </select>
                    </div>     
                </form>
            </div>
            <div style={{backgroundColor:theme.background}} className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-auto lg:grid lg:grid-cols-3 lg:gap-auto xl:grid xl:grid-cols-4 xl:gap-auto">
                
                    {countryList}
              
                
            </div>
     
        </div>
    )
}

export default CountryList;

