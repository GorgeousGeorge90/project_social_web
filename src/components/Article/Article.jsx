import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFetching, getSingleData, getSingleNews} from '../../redux/news/news.actions';
import {getIsFetching, getSingle} from '../../selectors/news.selectors';
import styles from './Article.module.scss';
import Preloader from "../common/Preloader/Preloader";


const Article = ()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
       dispatch(getSingleData(id))
    },[id])

    const article = useSelector(state=>getSingle(state))
    const isFetching = useSelector(state=>getIsFetching(state))
    const navigate = useNavigate()


    if (!article || isFetching) {
        return <Preloader/>
    }

    return (
        <div className={styles.content}>
            <div>
                <button onClick={()=>navigate('/news')}>BACK</button>
            </div>
            <div className={styles.pic}>
                <img src={article.imageUrl} alt="pic"/>
            </div>
            <div className={styles.main}>
                <p><span>{article.title}</span></p>
                <p>{article.summary}</p>
            </div>
        </div>
    )
}

export default Article