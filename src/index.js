import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import { BrowserRouter , Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

