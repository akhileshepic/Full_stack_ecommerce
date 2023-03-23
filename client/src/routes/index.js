 import React from 'react'
 import HomePage from 'src/pages/home';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';

 const Router = () => {
   return (
    <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<HomePage/>} />
   </Routes>
   </BrowserRouter>
   )
 }
 
 export default Router