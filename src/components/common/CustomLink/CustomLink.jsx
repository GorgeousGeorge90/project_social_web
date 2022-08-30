import {Link, useMatch } from 'react-router-dom'
import styles from './CustomLink.module.css'


const CustomLink = ({children, to, ...props})=>{
    const match = useMatch(to)
    return (<>
        <Link
            to={to}
            props={props}
            style={{
                color: match ? 'red':'white',
            }}
            className={styles.link}>
            {children}
        </Link>
            </>)
}


export default CustomLink