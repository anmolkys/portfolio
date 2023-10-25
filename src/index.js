import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import { BrowserRouter , Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/contact" component ={Contact}/>
      <Route path="/*" component={NotFound} ></Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

