const token = "token";

export const setToken = (accessToken: string): void => {
  localStorage.setItem(token, accessToken);
};
export const getToken = (): string | null => {
  return localStorage.getItem(token) || null;
};
export const removeToken = (): void => {
  localStorage.removeItem(token);
};
export const isAuthenticated = (): boolean => {
  const userToken = getToken();
  return Boolean(userToken);
};
