const SetItem = <T extends string>(key: string, value: T) =>
  localStorage.setItem(key, value);

const GetItem = <T>(key: string): T | null => localStorage.getItem(key) as T;

function useLocalStorage() {
  return {
    SetItem,
    GetItem,
  };
}

export default useLocalStorage;
