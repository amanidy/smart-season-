"use client";

import { useEffect, useState } from "react";
import { fieldService } from "@/services/field.service";
import { Field } from "@/types/field";

export function useFields() {
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFields() {
      try {
        const data = await fieldService.getAll();
        setFields(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load fields.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadFields();
  }, []);

  return {
    fields,
    loading,
    error,
  };
}