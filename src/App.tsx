import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import SignUp from './pages/register/SignUp';
import ResetPassword from './pages/resetPass/ResetPassword';
import Statistics from './pages/statistics/Statistics';
import Profiles from './pages/profiles/Profiles';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/resetPassword"} element={<ResetPassword />} />
          <Route path={"/statistics"} element={<Statistics />} />
          <Route path={"/profiles"} element={<Profiles />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
