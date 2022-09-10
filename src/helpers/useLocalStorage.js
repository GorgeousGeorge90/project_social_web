import {useEffect, useState} from 'react';


const useLocalStorage = (defaultValue, key)=> {
    const getValue = () => {
        const localData = localStorage.getItem(key)

        if(localData) {
            return JSON.parse(key)
        }

        return defaultValue
    }

    const [value,setValue] = useState(getValue)

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}

export default useLocalStorage