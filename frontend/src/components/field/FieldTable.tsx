import FieldRow from "./FieldRow";

import { Field } from "@/types/field";

interface Props {
  fields: Field[];
  role: "ADMIN" | "AGENT";
}

export default function FieldTable({
  fields,
  role,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-4 py-3 text-left">
              Field
            </th>

            <th className="px-4 py-3 text-left">
              Crop
            </th>

            <th className="px-4 py-3 text-left">
              Location
            </th>

            <th className="px-4 py-3 text-left">
              Acreage
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {fields.map((field) => (
            <FieldRow
              key={field.id}
              field={field}
              role={role}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}