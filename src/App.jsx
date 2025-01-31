import React from 'react';

import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Arts, Contact } from './pages';

import Navbar  from './components/Navbar';
const App = () => {
    return ( 
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                      <Route path="/mahathig_portfolio" element= {<Home />} />
                    <Route path="/mahathig_portfolio/about" element= {<About />} />
                    <Route path="/mahathig_portfolio/projects" element= {<Projects />} />
                    <Route path="/mahathig_portfolio/contact" element= {<Contact />} />
                    <Route path="/mahathig_portfolio/arts" element= {<Arts />} />
                </Routes>
            </Router>
        </main>
    )
}
export default App;
