export const getDataFromStorage = () => {
  try {
    const appState = localStorage.getItem("diveManagerApp");
    if (typeof appState !== "undefined") {
      return JSON.parse(appState);
    } else {
      return undefined;
    }
  } catch (e) {
    return {};
  }
};

export const setDataToStorage = data => {
  try {
    localStorage.setItem("diveManagerApp", JSON.stringify(data));
  } catch (e) {
    throw new Error(`Unable to store data in localstorage ${e}`);
  }
};
