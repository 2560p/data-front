import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import SignUp from './pages/register/SignUp'
import ResetPassword from './pages/resetPass/ResetPassword'
import MediaStatistics from './pages/mediaStatistics/MediaStatistics'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/resetPassword"} element={<ResetPassword />} />
          <Route path={"/"} element={<MediaStatistics />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
