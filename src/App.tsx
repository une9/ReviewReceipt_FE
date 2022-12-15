import Home from "./pages/Home";
import ReviewDetail from "./pages/ReviewDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { fonts, globalStyles } from "./emotion/globalStyles";
import Router from "./Router";
import { NavContextProvider } from "./contexts/NavContext";

function App() {
  return (
    <NavContextProvider>
      <Global styles={fonts} />
      <Global styles={globalStyles} />
      <Router />
    </NavContextProvider>
  );
}

export default App;
