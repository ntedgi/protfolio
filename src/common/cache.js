import { data } from "./store";

Object.keys(data).forEach((key) => {
  localStorage.setItem(key, JSON.stringify(data[key]));
});

function validateData(key, value) {
  if (
    !value ||
    Object.keys(value).length === 0 ||
    JSON.stringify(value).includes("API rate limit exceeded") ||
    JSON.stringify(value).includes("abuse-rate-limits")
  ) {
    return data[key];
  }
  return value;
}

function setItemInCache(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function has(key) {
  const item = localStorage.getItem(key) || data[key];
  return !!item && Object.keys(item).length > 0;
}

function getItemFromCache(key) {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch (e) {
    console.log("error with key ", key);
    return undefined;
  }
}

export { setItemInCache, getItemFromCache, has, validateData };
