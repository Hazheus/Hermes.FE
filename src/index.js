import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import { SideBar } from './Components/Root/SideBar';
import { HomePage } from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <SideBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);