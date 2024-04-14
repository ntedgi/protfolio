import data from '../../../../assets/cache.json'

function validateData(key, value) {

    if (!value ||
         Object.keys(value).length === 0 ||
         JSON.stringify(value).includes("API rate limit exceeded")||
         JSON.stringify(value).includes("abuse-rate-limits")
        ){
        return data[key]
    }
    return value
}

function setItemInCache(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function has(key) {
    const item = localStorage.getItem(key)
    return !!item && Object.keys(item).length > 0
}
function getItemFromCache(key) {
    return JSON.parse(localStorage.getItem(key))
}

export {
    setItemInCache,
    getItemFromCache,
    has,
    validateData
}