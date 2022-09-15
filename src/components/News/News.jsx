import styles from './News.module.scss'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNews} from '../../selectors/news.selectors';
import {Link} from 'react-router-dom';
import rocket2 from './../../assets/img/rocket2.svg';
import {getAllData} from '../../redux/news/news.actions';

const News = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getAllData())
    },[])

    const news = useSelector(state=>getAllNews(state))

    return (
        <div className={styles.content}>
            <ul>
                {news.map(e=><li><Link to={`/news/${e.id}`} className={styles.link}>
                        <img src={rocket2} alt='rocket'/>
                        {e.title}
                </Link></li>)}
            </ul>
        </div>
    )
}

export default News