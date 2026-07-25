"use client";

import { use,useEffect, useState } from "react";

import FieldDetails from "@/components/field/FieldDetails";

import { fieldService } from "@/services/field.service";
import { Field } from "@/types/field";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function FieldPage({ params }: PageProps) {

const unwrappedParams = use(params); 
const fieldId = unwrappedParams.id;

  const [field, setField] =
    useState<Field | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Temporary role until authentication
  const role: "ADMIN" | "AGENT" = "AGENT";

  useEffect(() => {
    async function loadField() {
      try {
        const data =
          await fieldService.getById(
            fieldId
          );

        setField(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Failed to load field."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadField();
  }, [fieldId]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />

        <div className="h-40 animate-pulse rounded bg-gray-200" />

        <div className="h-40 animate-pulse rounded bg-gray-200" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (!field) {
    return (
      <div className="rounded-lg bg-yellow-100 p-4 text-yellow-700">
        Field not found.
      </div>
    );
  }

  return (
    <FieldDetails
      field={field}
      role={role}
    />
  );
}