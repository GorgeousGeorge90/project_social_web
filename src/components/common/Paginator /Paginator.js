import styles from './Paginator.module.css'
import {useState} from 'react';


const Paginator = ({totalItemsCount,pageSize,currentPage,onPageChange,portionSize})=> {

    let pages = []

    let pageNumber = Math.ceil(totalItemsCount / pageSize)
    let portionCount = Math.ceil(pageNumber/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorder = (portionNumber - 1) * portionSize + 1
    let rightBorder = portionNumber * portionSize

    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i)
    }

    return <div>
        {portionNumber > 1 &&
            <button onClick={()=>setPortionNumber(portionNumber-1)}>Prev</button>
        }
        {
            pages.filter( p=> p >= leftBorder && p <= rightBorder)
            .map(p => {
            return <span key={p} className={currentPage === p && styles.selectedPage}
                         onClick={() => {
                             onPageChange(p)
                         }}>{p}</span>
        })}
        {portionCount>portionNumber &&
            <button onClick={()=>setPortionNumber(portionNumber+1)}>Next</button>
        }
    </div>
}


export default Paginator