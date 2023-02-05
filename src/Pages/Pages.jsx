import React from 'react'
import Home from "../Components/Home";

import{ Route, Routes, useLocation } from 'react-router-dom';


function Pages() {
  const location = useLocation();
    

  return (
    // <AnimatePresence exitBeforeEnter>
    
        <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home />}/>
       <Route path="/match/:name" element={<Home />} />

    

       </Routes>  
      
        // </AnimatePresence>
  );
};

export default Pages