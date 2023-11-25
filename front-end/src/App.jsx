import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignInFrom from './pages/SignInFrom';
import SignUpFrom from './pages/SignUpFrom';
import ForgotPasswordForm from './pages/ForgotPasswordForm';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sign-in' element={<SignInFrom />} />
          <Route path='sign-up' element={<SignUpFrom />} />
          <Route path='fogot-password' element={<ForgotPasswordForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
