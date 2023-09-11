import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import herobg from "./assets/herobg.png"
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        
        <div className='relative z-0' style={{
          background:`url(${herobg})`
        }}>
          <div style={{
          width:"100%",
          height:"20vh",
          position:"absolute",
          background:"linear-gradient(to top, transparent, rgba(5,8,22,1))",
          // zIndex:1000
        }}></div>
          <Contact />
          
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
