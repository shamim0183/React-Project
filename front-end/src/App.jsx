import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignInFrom from './pages/SignInFrom';
import SignUpFrom from './pages/SignUpFrom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sign-in' element={<SignInFrom />} />
          <Route path='sign-up' element={<SignUpFrom />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
