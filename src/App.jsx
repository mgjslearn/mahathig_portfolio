import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, About, Projects, Arts, Contact } from './pages';

import {Navbar}  from './components';
const App = () => {
    return ( 
        <main className="bg-slate-300/20">
            <Router basename="/mahathig_portfolio">
                <Navbar />
                <Routes>
                  <Route path='/home' element={<Home />} />
                  <Route
                    path='/mahathig_portfolio'
                    element={
                      <>
                        <Routes>
                           <Route path='/home' element={<Home />} />
                          <Route path='/about' element={<About />} />
                          <Route path='/projects' element={<Projects />} />
                          <Route path='/contact' element={<Contact />} />
                        </Routes>
                        <Footer />
                      </>
                    }
                  />
                </Routes>
              </Router>
            </main>
          );
        };
export default App;
