export const getCacheLangKey = (item) => `LANG_${item}`;
export const getCacheProgKey = (item) => `PROG_${item}`;

export function GetRepoDetails(owner, name) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function GetRepoLanguages(owner, name) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${name}/languages`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
