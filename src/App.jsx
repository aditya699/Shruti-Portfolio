import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <CustomCursor />
      <Navbar />
     <div>
          <Routes>
                <Route
                path="/"
                element={
                      <>
                         <Hero/>
                      </>
                }  
                />
                 <Route
                path="/About"
                element={
                      <>
                       <About/>
                      </>
                }  
                />
                 <Route
                path="/Projects"
                element={
                      <>
                       <Projects/>
                      </>
                }  
                />
                 <Route
                path="/Experience"
                element={
                      <>
                       <Experience/>
                      </>
                }  
                />
                 <Route
                path="/Contact"
                element={
                      <>
                       <Contact/>
                      </>
                }  
                />
              
    
      
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
