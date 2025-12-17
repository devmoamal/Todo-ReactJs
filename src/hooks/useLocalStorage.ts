const SetItem = <T extends string>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const GetItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

function useLocalStorage() {
  return {
    SetItem,
    GetItem,
  };
}

export default useLocalStorage;
