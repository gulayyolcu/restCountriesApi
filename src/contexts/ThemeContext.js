import {createContext,useState} from 'react';
import '../index.css';

const themes={
    light:{
        textColor:"var(veryDarkBlueLightText)",
        background:"var(--veryLightGrayLightBck)",
        elementColor:"var(--veryLightGrayLightBck)",
        type:"light",
        inputColor:"var(--veryLightGrayLightBck)"
    },
    dark:{
        textColor:"var(--whiteTextLightEl)",
        background:"var(--veryDarkBlueBck)",
        elementColor:"var(--darkBlueEl)",
        type:"dark",
        inputColor:"var(--darkBlueEl)"     
    }
}

export const ThemeContext=createContext();

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState(themes.light);
    const [activeTheme,setActiveTheme]=useState("light");

    const toggleTheme=()=>{
        const nextTheme=activeTheme==="light"?"dark":"light";
        setTheme(themes[nextTheme]);
        setActiveTheme(nextTheme);
        console.log("toggleTheme",theme,activeTheme);
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;