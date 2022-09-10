export const setItemLocal = data => {
    localStorage.setItem(`${data}`,data)
}

export const getItemLocal = data => {
    localStorage.getItem(`${data}`)
}

export const removeItemLocal = data => {
    localStorage.removeItem(`${data}`)
}