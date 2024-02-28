import './App.css';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar';
import {Home} from './pages/Home';

import { OurPurpose } from './pages/OurPurpose';
import {WhatMakesUsDifferent} from './pages/WhatMakesUsDifferent';
import {HowItWorks} from './pages/HowItWorks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OurPurpose />
      <WhatMakesUsDifferent />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
