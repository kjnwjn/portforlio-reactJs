import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet'; 
AOS.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Helmet>
      <meta property="og:title" content="Phạm Nguyễn Hoàng Quân" />
      <meta property="og:description" content="My Portfolio" />
      <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg"  />
      <meta property="og:image:type" content="image/jpg"></meta>
    </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
