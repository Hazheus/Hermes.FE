import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import { HealthPage } from './Pages/health';
import { SideBar } from './Components/SideBar';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <SideBar />
    <HealthPage />
  </React.StrictMode>,
  document.getElementById('root')
);