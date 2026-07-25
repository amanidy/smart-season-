import { FieldUpdate } from "@/types/field-update";

interface Props {
  update: FieldUpdate;
}

export default function FieldUpdateCard({
  update,
}: Props) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {update.cropStage}
        </h3>

        <span className="text-sm text-gray-500">
          {new Date(update.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          <strong>Moisture:</strong>{" "}
          {update.moisture ?? "--"}%
        </p>

        <p>
          <strong>Temperature:</strong>{" "}
          {update.temperature ?? "--"}°C
        </p>

        <p>
          <strong>Humidity:</strong>{" "}
          {update.humidity ?? "--"}%
        </p>

        <p>
          <strong>Notes:</strong>
        </p>

        <p className="text-gray-600">
          {update.notes}
        </p>

        <p className="text-xs text-gray-400">
          Updated by {update.user.fullName}
        </p>
      </div>
    </div>
  );
}