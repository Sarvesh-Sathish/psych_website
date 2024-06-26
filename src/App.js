import './App.css';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar';
import { Connect } from './pages/Connect';
import { Features } from './pages/Features';
import {Home} from './pages/Home_And_About/Home';
import {Link, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
        <main className={"main-content"}>
          <Routes>
              <Route path={'/'} element={
                (<Home />) } />
              <Route path={'/connect'} element={<Connect />} />
              <Route path={'/features'} element={<Features/>}/>
          </Routes>

        </main>

    </>
  );
}

export default App;
