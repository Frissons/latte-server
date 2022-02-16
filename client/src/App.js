import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Register, Dashboard} from './pages/index'
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;