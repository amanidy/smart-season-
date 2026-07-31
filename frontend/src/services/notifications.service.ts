import { apiFetch } from "./api";
import { NotificationsResponse } from "@/types/notifications";

export const notificationsService = {
  getNotifications() {
    return apiFetch<NotificationsResponse>(
      "/notifications"
    );
  },

  markAsRead(id: string) {
    return apiFetch<void>(
      `/notifications/${id}/read`,
      {
        method: "PATCH",
      }
    );
  },

  markAllAsRead() {
    return apiFetch<void>(
      "/notifications/read-all",
      {
        method: "PATCH",
      }
    );
  },
};