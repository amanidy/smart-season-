"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { fieldService } from "@/services/field.service";
import { CreateFieldDto } from "@/types/field";

export default function FieldForm() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<CreateFieldDto>({
      name: "",
      crop: "",
      location: "",
      acreage: 0,
      status: "",
      ownerId: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        name === "acreage"
          ? Number(value)
          : value,
    }));
  }

  function validateForm() {
    if (!formData.name.trim()) {
      return "Field name is required.";
    }

    if (!formData.crop.trim()) {
      return "Crop is required.";
    }

    if (!formData.location.trim()) {
      return "Location is required.";
    }

    if (formData.acreage <= 0) {
      return "Acreage must be greater than zero.";
    }

    if (!formData.status.trim()) {
      return "Status is required.";
    }

    return "";
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess("");

    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      await fieldService.create({
        ...formData,

        // temporary until authentication
        ownerId: "TEMP_OWNER_ID",
      });

      setSuccess(
        "Field registered successfully."
      );

      setTimeout(() => {
        router.push("/fields");
      }, 1000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Unable to register field."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {error && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-lg bg-green-100 p-4 text-green-700">
          {success}
        </div>
      )}

      <Input
        label="Field Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="North Farm"
      />

      <Input
        label="Crop"
        name="crop"
        value={formData.crop}
        onChange={handleChange}
        placeholder="Maize"
      />

      <Input
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Nakuru"
      />

      <Input
        label="Acreage"
        name="acreage"
        type="number"
        value={formData.acreage}
        onChange={handleChange}
      />

      <Input
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        placeholder="Healthy"
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Registering..."
          : "Register Field"}
      </Button>
    </form>
  );
}