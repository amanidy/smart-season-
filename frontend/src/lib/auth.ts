import { User } from "@/types/auth";

export function saveAuth(
  accessToken: string,
  refreshToken: string,
  user: User
) {
  localStorage.setItem(
    "accessToken",
    accessToken
  );

  localStorage.setItem(
    "refreshToken",
    refreshToken
  );

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
}

export function getAccessToken() {
  return localStorage.getItem(
    "accessToken"
  );
}

export function getUser() {
  const user =
    localStorage.getItem("user");

  return user
    ? JSON.parse(user)
    : null;
}

export function clearAuth() {
  localStorage.clear();
}