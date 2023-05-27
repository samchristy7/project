import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './component/Add';
import Navbar from './component/Navbar';
import Home from './component/Home';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>

    </div>
  );
}

export default App;
