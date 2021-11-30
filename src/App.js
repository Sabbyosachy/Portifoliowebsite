import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navigation from './Pages/Home/Navigation/Navigation';
import Footer from './Pages/Home/Footer/Footer'
import Details from './Pages/Details/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
