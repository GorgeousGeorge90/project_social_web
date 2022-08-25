import {Link, useMatch } from 'react-router-dom'


const CustomLink = ({children, to, ...props})=>{
    const match = useMatch(to)
    return (<>
        <Link
            to={to}
            props={props}
            style={{
                color: match ? 'red':'white',
            }}>
            {children}
        </Link>
            </>)
}


export default CustomLink