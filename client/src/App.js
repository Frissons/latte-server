import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Register, Dashboard} from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header/Header';
import Welcome from './pages/welcome/Welcome';

function App() {
  
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={ <Dashboard/> } />
            <Route path='/welcome' element={ <Welcome/> } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
