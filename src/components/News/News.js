import styles from './News.module.scss'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNews} from '../../selectors/news.selectors';
import {Link, useNavigate} from 'react-router-dom';
import rocket2 from './../../assets/img/rocket2.svg';
import {getAllData} from '../../redux/news/news.actions';
import {getIsAuth} from "../../selectors/auth.selectors";

const News = () => {

    const isAuth = useSelector(state=>getIsAuth(state))
    const news = useSelector(state=>getAllNews(state))
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
        if (!isAuth) {
            navigate('/login')
        } else {
            dispatch(getAllData())
        }
    },[isAuth])


    return (
        <div className={styles.content}>
            <ul>
                {
                    news.map(e=><li key={e.id}><Link key={e.id} to={`/news/${e.id}`} className={styles.link}>
                        <img src={rocket2} alt='rocket'/>
                        {e.title}
                </Link></li>)
                }
            </ul>
        </div>
    )
}

export default News