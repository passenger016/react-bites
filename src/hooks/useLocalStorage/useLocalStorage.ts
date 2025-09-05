const useLocalStorage = (key: string) => {
  // 1. first function is for adding items to the localStorage
  const setItem = (inputValue: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(inputValue));
    } catch (e) {
      console.error(e);
    }
  };
  // 2. second function is for getting items from the localStorage
  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      // it is important to JSON.parse(item) in order to convert the JSON file back to the original format
      if (item) return JSON.parse(item);
    } catch (e) {
      console.error(e);
    }
  };
  // 3. second function is for removing items from the localStorage
  //TODO: Add a 'removed item {item} kind of return statement'
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  };

  return { setItem, getItem, removeItem };
};
export default useLocalStorage;
