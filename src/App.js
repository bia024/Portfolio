import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";
// import fotoprincipal from "./Assets/fotoprincipal.png";
//resetar o codigo com GlobalStyled
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
