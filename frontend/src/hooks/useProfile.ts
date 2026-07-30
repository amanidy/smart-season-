"use client";

import { useEffect, useState } from "react";
import { profileService } from "@/services/profile.service";
import { UserProfile } from "@/types/profile";

export function useProfile() {
  const [profile, setProfile] =
    useState<UserProfile | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const data =
          await profileService.getProfile();

        setProfile(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unable to load profile.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  return {
    profile,
    loading,
    error,
  };
}