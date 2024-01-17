import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/register/SignUp';
import ResetPassword from './pages/resetPass/ResetPassword';
import Users from './pages/adminpanel-users/Users';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/resetPassword"} element={<ResetPassword />} />
          <Route path={"/adminpanel-users"} element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;