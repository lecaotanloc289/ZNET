import './App.scss';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import HomePage from '../pages/HomePage/HomePage';
import Messenger from '../pages/Messenger/Messenger';
import { Route, Router, Routes } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import ListReels from '../pages/Reels Container/ListReels';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/messenger' element={<Messenger />} />
        <Route path='/reels' element={<ListReels />} />
      </Routes>
    </div>
  );
}

export default App;
