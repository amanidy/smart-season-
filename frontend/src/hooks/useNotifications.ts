"use client";

import { useEffect, useState } from "react";

import { notificationsService } from "@/services/notifications.service";

import {
  NotificationsResponse,
} from "@/types/notifications";

export function useNotifications() {
  const [data, setData] =
    useState<NotificationsResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadNotifications() {
      try {
        const response =
          await notificationsService.getNotifications();

        setData(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to load notifications."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadNotifications();
  }, []);

  return {
    data,
    loading,
    error,
  };
}