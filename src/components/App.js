import React, { useEffect } from "react";

import { Home } from '../pages';

const App = () => {

  useEffect(()=>{
    console.log("App called!!!");
  })

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;