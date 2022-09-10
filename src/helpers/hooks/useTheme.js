import {useEffect, useState} from 'react';


const useTheme = ()=>{

    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
        if (theme !== 'dark') {
            localStorage.setItem('theme','dark')
            setTheme('dark')
        } else {
            localStorage.setItem('theme','light')
            setTheme('light')
        }
    }

    useEffect(()=>{
        let storage = localStorage.getItem('theme')
        if (storage) {
            setTheme(storage)
        }
    },[])

    return {
        theme,
        toggleTheme
    }
}

export default useTheme