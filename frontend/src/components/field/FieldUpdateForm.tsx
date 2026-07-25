"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { fieldUpdateService } from "@/services/field-update.service";

interface Props {
  fieldId: string;
}

export default function FieldUpdateForm({
  fieldId,
}: Props) {
  const [cropStage, setCropStage] =
    useState("");

  const [moisture, setMoisture] =
    useState("");

  const [temperature, setTemperature] =
    useState("");

  const [humidity, setHumidity] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  function validate() {
    if (!cropStage.trim()) {
      return "Crop stage is required.";
    }

    if (!notes.trim()) {
      return "Notes are required.";
    }

    return "";
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setSuccess("");

    const validation = validate();

    if (validation) {
      setError(validation);
      return;
    }

    try {
      setLoading(true);

      await fieldUpdateService.create({
        fieldId,
        cropStage,
        notes,
        moisture: moisture
          ? Number(moisture)
          : undefined,
        temperature: temperature
          ? Number(temperature)
          : undefined,
        humidity: humidity
          ? Number(humidity)
          : undefined,
      });

      setSuccess(
        "Update submitted successfully."
      );

      setCropStage("");
      setMoisture("");
      setTemperature("");
      setHumidity("");
      setNotes("");

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Unable to submit update."
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
        label="Crop Stage"
        value={cropStage}
        onChange={(e) =>
          setCropStage(e.target.value)
        }
        placeholder="Vegetative"
      />

      <Input
        label="Moisture (%)"
        type="number"
        value={moisture}
        onChange={(e) =>
          setMoisture(e.target.value)
        }
      />

      <Input
        label="Temperature (°C)"
        type="number"
        value={temperature}
        onChange={(e) =>
          setTemperature(e.target.value)
        }
      />

      <Input
        label="Humidity (%)"
        type="number"
        value={humidity}
        onChange={(e) =>
          setHumidity(e.target.value)
        }
      />

      <div className="space-y-2">
        <label className="font-medium">
          Notes
        </label>

        <textarea
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
          rows={5}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Update"}
      </Button>
    </form>
  );
}