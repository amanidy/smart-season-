import { FieldUpdate } from "@/types/field-update";
import FieldUpdateCard from "./FieldUpdateCard";

interface Props {
  updates: FieldUpdate[];
}

export default function FieldUpdateTimeline({
  updates,
}: Props) {
  if (updates.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        No updates have been submitted yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {updates.map((update) => (
        <FieldUpdateCard
          key={update.id}
          update={update}
        />
      ))}
    </div>
  );
}