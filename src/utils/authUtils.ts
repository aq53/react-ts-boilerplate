import { localStorageService } from "../services/storageService";

export function accessTokenHandler(token?: string) {
  if (token === undefined) {
    return localStorageService.getItem("accessToken");
  }
  return localStorageService.setItem("accessToken", token);
}

export const saveAuthTokensInStorage = (accessToken:string) => {
  accessTokenHandler(accessToken);
};

export const getAuthTokensFromStorage = () => {
  const accessToken = accessTokenHandler();

  return accessToken || null;
};

export const clearAuthTokensFromStorage = () => {
  localStorageService.removeItem("accessToken");
};

export const generateAuthHeaders = () => ({
  Authorization: "bearer " + getAuthTokensFromStorage(),
});
