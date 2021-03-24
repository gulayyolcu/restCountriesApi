import React from 'react';
import {Link,useLocation} from "react-router-dom";

const Country = () => {  

    const location = useLocation();
    console.log(location.country);

    const theme=location.theme.theme;

    const curr=[];
    const lang=[];
    const border=[];
      
    
    if(location.country.country.currencies){
        curr.push(...location.country.country.currencies);
    }
      
    if(location.country.country.languages){
        lang.push(...location.country.country.languages);
    }
      
    if(location.country.country.borders){
        border.push(...location.country.country.borders);
    } 

    return (
        <div style={{backgroundColor:theme.background,color:theme.text}} className="min-h-screen w-full px-6 md:px-10 md:py-16 pb-8 mx-auto">
           
            <div>
                <div style={{backgroundColor:theme.inputColor,color:theme.text}} className="mb-8 w-32">
                    <Link to="/">
                        <input style={{backgroundColor:theme.inputColor,color:theme.textColor}} type="submit" value="Back" className="relative pl-4 py-2 border-2 outline-none border-gray-200 border-opacity-30 shadow-md w-full rounded rounded-lg" />
                        <svg style={{color:theme.textColor}} className="w-5 absolute -mt-8 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>     
                </div>

                

                <div style={{color:theme.textColor}} key={location.country.country.callingCodes} >

                                <div className="flex flex-col lg:flex lg:flex-row lg:space-x-16">
                                    <div className="lg:w-1/2">
                                        <img className="sm:w-full" src={location.country.country.flag} alt=""/>
                                    </div>
                                    <div  className="lg:w-1/2">
                                        <div>
                                            <h1 className="font-bold text-2xl py-6 pl-6">{location.country.country.name}</h1>
                                        </div>
                                        <div className="flex flex-col lg:flex-row">
                                            <div>
                                                <p className="text-lg pl-6"><span className="font-semibold">Native Name</span> {location.country.country.nativeName}</p>
                                                <p className="text-lg pb-1 pl-6"><span className="font-semibold">Population:</span> {location.country.country.population}</p>
                                                <p className="text-lg pl-6"><span className="font-semibold">Region:</span> {location.country.country.region}</p>
                                                <p className="text-lg pl-6"><span className="font-semibold">Sub Region:</span> {location.country.country.subregion}</p>
                                                <p className="text-lg pt-1 pb-4 pl-6 mb-12"><span className="font-semibold">Capital:</span> {location.country.country.capital}</p>
                                            </div>
                                            <div className="pb-4 ">
                                                <p className="text-lg pl-6"><span className="font-semibold">Top Level Domain:</span> {location.country.country.topLevelDomain}</p>
                                                <p className="text-lg  px-6 py-1 font-semibold ">Currencies: 
                                                {
                                                    curr.map((c)=>(
                                                        <span className="font-normal"> {c.code}</span>
                                                    ))
                                                }
                                                </p>
                                                <p className="text-lg px-6 py-1 font-semibold">Languages: 
                                                {
                                                    lang.map((l)=>(
                                                        <span className="font-normal pr-2"> {l.name}</span>
                                                    ))
                                                }
                                                </p>
                                            </div>
                                        </div>
                                        
                                            
                                      

                                        <div className="flex flex-col">
                                            <p className="text-lg px-6 py-2 font-semibold">Border Countries:</p>
                                            <div className="flex flex-wrap px-2">
                                                {
                                                    border.map((b)=>(
                                                        <span className="font-normal text-lg border-2 border-gray-300 border-opacity-30 my-2 mx-2 px-2 py-1 pr-2 rounded rounded-md"> {b}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Country;
