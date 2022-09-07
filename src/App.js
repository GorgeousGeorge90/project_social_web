import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {UsersWrapper} from './components/Users/UsersWrapper';
import {ProfileWrapper} from './components/Profile/ProfileWrapper';
import Login from './components/Login/Login';
import Dialogs from './components/Dialogs/Dialogs';



const App = ()=>{
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<ProfileWrapper/>} />
            <Route path='/dialogs' element={<Dialogs/>} />
            <Route path='/users' element={<UsersWrapper/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
        </Routes>
        <div className='sidebar'/>
    </div>
  )
}

export default App
