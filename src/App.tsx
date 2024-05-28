import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import SiteRouterProvider from './routes/routes';

function App() {
  return (
    <>
      <SiteRouterProvider />
      <GlobalStyle/>
    </>
  );
}

export default App;
