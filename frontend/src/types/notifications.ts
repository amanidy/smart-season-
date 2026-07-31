export type NotificationType =
  | "FIELD"
  | "WEATHER"
  | "SYSTEM"
  | "REPORT";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
}

export interface NotificationsResponse {
  unreadCount: number;
  notifications: Notification[];
}