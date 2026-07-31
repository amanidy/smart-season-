import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { Notification } from "@/types/notifications";

interface Props {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

export default function NotificationCard({
  notification,
  onMarkAsRead,
}: Props) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">

        <div className="flex-1">

          <h3 className="font-semibold">
            {notification.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {notification.message}
          </p>

          <p className="mt-3 text-xs text-gray-400">
            {new Date(
              notification.createdAt
            ).toLocaleString()}
          </p>

        </div>

        {!notification.read && (
          <Button
            onClick={() =>
              onMarkAsRead(notification.id)
            }
          >
            Mark as Read
          </Button>
        )}

      </div>
    </Card>
  );
}