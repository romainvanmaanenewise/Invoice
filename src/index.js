import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

import Invoice from './models/invoice'

const invoice = Invoice.create({currency: 'CAD'})

// onPatch laat zien met een pad wat er veranderd word ik mis hier de functionele nut van of dat het alleen voor dev is.
onPatch(invoice, patch => {
  console.log(patch);
})

ReactDOM.render(
  <App invoice={invoice} />,
  document.getElementById('root')
);
makeInspectable(invoice)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
