import './App.css';
import Hero from './components/Home/Hero';
import Navbar from './components/shared/Navbar';
import TextTranslate from "./pages/text-translate/TextTranslate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="translate" element={<TextTranslate />} />
          <Route path="face-detection" element={<TextTranslate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;