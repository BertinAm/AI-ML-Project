import './App.css';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Home from './components/Home/Home';
import Navbar from './components/shared/Navbar';
import { BrowserRouter,  Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
   <Navbar/>
   <Routes>   
   <Route path='/' element={<Home/>} />
   <Route path='FaceDetection' element={<FaceDetection/>} /> 
  <Route path="translate" element={<TextTranslate />} />

   </Routes>
 </BrowserRouter>

  );
}

export default App;