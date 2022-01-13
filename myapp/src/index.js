import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/dashboard/layout";
import 'boxicons';
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();