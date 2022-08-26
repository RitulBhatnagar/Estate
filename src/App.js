import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Property from "./pages/Property";
import Footer from "./components/Footer"
import SearchBySale from "./pages/SearchBySale"
import SearchByRent from "./pages/SearchByRent";
function App() {
  return (
   <div>
    <Navbar/>
   <Routes>
    <Route  path = "/" element = {<Home/>}/>
    <Route  path = "/search/purpose/:id" element = {<SearchByRent/>}/>
    <Route  path = "/search/purpose/:id" element = {<SearchBySale/>}/>
    <Route  path = "/property/:id" element = {<Property/>}/>
   </Routes>
   <Footer/>
   </div>
  );
}

export default App;
