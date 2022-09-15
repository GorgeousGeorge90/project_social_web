import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from './components/News/News';
import {UsersWrapper} from './components/Users/UsersWrapper';
import {ProfileWrapper} from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import useTheme from './helpers/hooks/useTheme';
import Article from './components/Article/Article';
import Dialogs from './components/Dialogs/Dialogs';




const App = ()=>{
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`App ${theme}`}>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Navbar/>
            <Routes>
                <Route path='login' element={<Login/>} />
                <Route path='profile' element={<ProfileWrapper/>}>
                    <Route path=':userId' element={<ProfileWrapper/>}/>
                </Route>
                <Route path='dialogs' element={<Dialogs/>} />
                <Route path='users' element={<UsersWrapper/>} />
                <Route path='news' element={<News/>}/>
                <Route path='news/:id' element={<Article/>}/>
            </Routes>
            <div className='sidebar'/>
        </div>
  )
}

export default App
