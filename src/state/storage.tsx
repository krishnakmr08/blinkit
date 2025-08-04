
import { MMKV } from 'react-native-mmkv';
export const tokenStorage = new MMKV({
  id: 'token-storage',
  encryptionKey: 'token_secret',
});
export const storage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'app_secret',
});

export const mmkvStorage = {
  setItem: (key: string, value: string) => {
    return storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value ?? null;
  },
  removeItem: (key: string) => {
    return storage.delete(key);
  },
};
