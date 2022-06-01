import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
