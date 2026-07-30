import { apiFetch } from "./api";
import {
  UserProfile,
  UpdateProfileRequest,
  ChangePasswordRequest,
} from "@/types/profile";

export const profileService = {
  getProfile() {
    return apiFetch<UserProfile>("/profile");
  },

  updateProfile(data: UpdateProfileRequest) {
    return apiFetch<UserProfile>("/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  changePassword(data: ChangePasswordRequest) {
    return apiFetch<void>("/profile/change-password", {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
};