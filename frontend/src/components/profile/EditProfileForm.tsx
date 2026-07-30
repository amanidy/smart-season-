"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

import {
  UpdateProfileRequest,
  UserProfile,
} from "@/types/profile";

interface Props {
  profile: UserProfile;
  onSubmit: (
    data: UpdateProfileRequest
  ) => Promise<void>;
}

export default function EditProfileForm({
  profile,
  onSubmit,
}: Props) {
  const [form, setForm] =
    useState<UpdateProfileRequest>({
      fullName: profile.fullName,
      email: profile.email,
      phone: profile.phone ?? "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await onSubmit(form);
  }

  return (
    <Card>

      <h2 className="mb-6 text-xl font-semibold">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <Input
        label="name"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) =>
            setForm({
              ...form,
              fullName: e.target.value,
            })
          }
        />

        <Input
        label="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <Input
        label="number"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <Button type="submit">
          Save Changes
        </Button>

      </form>

    </Card>
  );
}