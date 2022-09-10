import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {UsersWrapper} from './components/Users/UsersWrapper';
import {ProfileWrapper} from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import Dialogs from './components/Dialogs/Dialogs';
import useTheme from './helpers/hooks/useTheme';



const App = ()=>{
    const {theme,toggleTheme} = useTheme()
    return (
        <div className={`App ${theme}`}>
            <Header/>
            <button onClick={toggleTheme}>Click</button>
            <Navbar/>
            <Routes>
                <Route path='login' element={<Login/>} />
                <Route path='profile' element={<ProfileWrapper/>}>
                    <Route path=':userId' element={<ProfileWrapper/>}/>
                </Route>
                <Route path='dialogs' element={<Dialogs/>} />
                <Route path='users' element={<UsersWrapper/>} />
                <Route path='news' element={<News/>} />
                <Route path='music' element={<Music/>} />
                <Route path='settings' element={<Settings/>} />
            </Routes>
            <div className='sidebar'/>
        </div>
  )
}

export default App
