"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

import { ChangePasswordRequest } from "@/types/profile";

interface Props {
  onSubmit: (
    data: ChangePasswordRequest
  ) => Promise<void>;
}

export default function ChangePasswordForm({
  onSubmit,
}: Props) {
  const [form, setForm] =
    useState<ChangePasswordRequest>({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      form.newPassword !==
      form.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    await onSubmit(form);

    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }

  return (
    <Card>

      <h2 className="mb-6 text-xl font-semibold">
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <Input
        label="Password"
          type="password"
          placeholder="Current Password"
          value={form.currentPassword}
          onChange={(e) =>
            setForm({
              ...form,
              currentPassword:
                e.target.value,
            })
          }
        />

        <Input
        label="Password"
          type="password"
          placeholder="New Password"
          value={form.newPassword}
          onChange={(e) =>
            setForm({
              ...form,
              newPassword:
                e.target.value,
            })
          }
        />

        <Input
        label="Password"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword:
                e.target.value,
            })
          }
        />

        <Button type="submit">
          Change Password
        </Button>

      </form>

    </Card>
  );
}