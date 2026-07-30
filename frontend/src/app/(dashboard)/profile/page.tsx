"use client";

import ProfileCard from "@/components/profile/ProfileCard";
import EditProfileForm from "@/components/profile/EditProfileForm";
import ChangePasswordForm from "@/components/profile/ChangePasswordForm";
import AccountSettings from "@/components/profile/AccountSettings";
import ProfileSkeleton from "@/components/profile/ProfileSkeleton";

import { useProfile } from "@/hooks/useProfile";
import {
  UpdateProfileRequest,
  ChangePasswordRequest,
} from "@/types/profile";

export default function ProfilePage() {
  const {
    profile,
    loading,
    error,
  } = useProfile();

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        Profile not found.
      </div>
    );
  }

  async function handleUpdateProfile(
    data: UpdateProfileRequest
  ) {
    console.log("Update Profile", data);

    // Backend integration later
  }

  async function handleChangePassword(
    data: ChangePasswordRequest
  ) {
    console.log("Change Password", data);

    // Backend integration later
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      <ProfileCard profile={profile} />

      <div className="grid gap-8 lg:grid-cols-2">

        <EditProfileForm
          profile={profile}
          onSubmit={handleUpdateProfile}
        />

        <ChangePasswordForm
          onSubmit={handleChangePassword}
        />

      </div>

      <AccountSettings
        role={profile.role}
      />

    </div>
  );
}