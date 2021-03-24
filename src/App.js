import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import MainPage from './components/MainPage';;


const App=()=>{

  return (
    <React.Fragment>
    <ThemeContextProvider>
        <MainPage/>
    </ThemeContextProvider>
    </React.Fragment>
  );
}

export default App;

