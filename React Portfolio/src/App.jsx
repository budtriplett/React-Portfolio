import { Outlet } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './components/UI/Footer.jsx';
import Header from './components/UI/Header.jsx';

function App() {
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <Header /> 
      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;