const STORAGE_TOKEN = "FRVUP83B4AFRGTJ8CUT4MJR4WOCWR5M4L0DQUDIXDB";
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

/**
 * This function saves Data into the backend.
 *
 * @param {string} key - Takes a key for any sort of data.
 * @param {string} value - Takes a value in form of JSON.
 * @returns the stringifyed data.
 */
async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, { method: "POST", body: JSON.stringify(payload) }).then((res) =>
    res.json()
  );
}

/**
 * This function recieves and loads Data from the backend.
 *
 * @param {string} key - Key of an data type e.g. an object
 * @returns parsed Data from the backend.
 */
async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        return res.data.value;
      }
      throw `Could not find data with key "${key}".`;
    });
}
