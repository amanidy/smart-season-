import NotificationCard from "./NotificationCard";

import { Notification } from "@/types/notifications";

interface Props {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

export default function NotificationList({
  notifications,
  onMarkAsRead,
}: Props) {
  if (notifications.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        No notifications available.
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
        />
      ))}

    </div>
  );
}