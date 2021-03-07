import isObjectLike from "lodash/isObjectLike";
import { isJSONString } from "../utils/validations";

class StorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key: string, value: any) {
    let setValue = value;
    if (isObjectLike(value)) {
      setValue = JSON.stringify(value);
    }
    return this.storage.setItem(key, setValue);
  }

  getItem(key: string) {
    const value: any = this.storage.getItem(key);
    return isJSONString(value) ? JSON.parse(value) : value;
  }

  removeItem(key: any) {
    return this.storage.removeItem(key);
  }

  clearAll() {
    this.storage.clear();
  }

  removeItems(keys: string[]) {
    keys.forEach((key) => this.removeItem(key));
  }
}

export const localStorageService = new StorageService();