
function setItemInCache(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function has(key) {
    const item = localStorage.getItem(key)
    return !!item && Object.keys(item).length>0
}
function getItemFromCache(key) {
    return JSON.parse(localStorage.getItem(key))
}

export {
    setItemInCache,
    getItemFromCache,
    has
}