import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';

function App() {
 

  return (
  <>
  <Router>
      <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<Home/>}/>
   
      </Routes>
  </Router>
  </>
  );
}

export default App
