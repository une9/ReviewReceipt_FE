import Home from './pages/Home';
import ReviewDetail from './pages/ReviewDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { fonts, globalStyles } from "./utils/emotion/globalStyles";
import Router from './Router';

function App() {
  return(
    <>
      <Global styles={fonts} />
      <Global styles={globalStyles} />
      <Router />
    </>
);
}

export default App;
