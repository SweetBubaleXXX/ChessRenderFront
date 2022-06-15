import React, { useEffect, useState } from 'react';
import Toolbar from './components/Toolbar';
import { MobileLayoutContext, MobileBreakpoint } from './components/contexts/MobileLayoutContext';
import './assets/styles/App.scss';

function App(props) {
  const [isMobile, setMobile] = useState(window.innerWidth < MobileBreakpoint);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth < MobileBreakpoint);
    });
  });

  return (
    <MobileLayoutContext.Provider value={isMobile}>
      <Toolbar URL={props.URL} />
    </MobileLayoutContext.Provider>
  );
}

export default App;
