import React from 'react';
import MainPage from "./pages/MainPage/MainPage";
import {DefaultContainer} from "./providers/ThemeProvider/themeStyles";



export default function App() {
    return (
      <DefaultContainer>
          <MainPage/>
      </DefaultContainer>
    );
}