"use client";

import { useMemo, useState } from "react";

import NotificationBadge from "@/components/notifications/NotificationBadge";
import NotificationFilters from "@/components/notifications/NotificationFilters";
import NotificationList from "@/components/notifications/NotificationList";
import NotificationsSkeleton from "@/components/notifications/NotificationsSkeleton";

import { useNotifications } from "@/hooks/useNotifications";

export default function NotificationsPage() {
  const {
    data,
    loading,
    error,
  } = useNotifications();

  const [filter, setFilter] =
    useState("ALL");

  if (loading) {
    return <NotificationsSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        No notifications found.
      </div>
    );
  }

  const filteredNotifications =
    useMemo(() => {
      switch (filter) {
        case "UNREAD":
          return data.notifications.filter(
            (n) => !n.read
          );

        case "FIELD":
        case "WEATHER":
        case "REPORT":
        case "SYSTEM":
          return data.notifications.filter(
            (n) => n.type === filter
          );

        default:
          return data.notifications;
      }
    }, [data.notifications, filter]);

  function handleMarkAsRead(id: string) {
    console.log("Mark notification:", id);

    // Backend integration later
  }

  function handleMarkAllAsRead() {
    console.log("Mark all notifications");

    // Backend integration later
  }

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-500">
            Stay updated with field activities,
            weather alerts and system events.
          </p>

        </div>

        <div className="flex items-center gap-4">

          <NotificationBadge
            count={data.unreadCount}
          />

          <button
            onClick={handleMarkAllAsRead}
            className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
          >
            Mark All as Read
          </button>

        </div>

      </div>

      <NotificationFilters
        filter={filter}
        onChange={setFilter}
      />

      <NotificationList
        notifications={
          filteredNotifications
        }
        onMarkAsRead={
          handleMarkAsRead
        }
      />

    </div>
  );
}