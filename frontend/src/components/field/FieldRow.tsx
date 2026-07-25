import Link from "next/link";

import Button from "@/components/ui/Button";
import StatusBadge from "./StatusBadge";

import { Field } from "@/types/field";

interface Props {
  field: Field;
  role: "ADMIN" | "AGENT";
}

export default function FieldRow({
  field,
  role,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-4">
        {field.name}
      </td>

      <td className="px-4 py-4">
        {field.crop}
      </td>

      <td className="px-4 py-4">
        {field.location}
      </td>

      <td className="px-4 py-4">
        {field.acreage}
      </td>

      <td className="px-4 py-4">
        <StatusBadge
          status={field.status}
        />
      </td>

      <td className="px-4 py-4">
        <div className="flex gap-2">

          <Link href={`/fields/${field.id}`}>
            <Button>
              View
            </Button>
          </Link>

          <Link href={`/fields/${field.id}/edit`}>
            <Button>
              Edit
            </Button>
          </Link>

          {role === "ADMIN" && (
            <Button>
              Delete
            </Button>
          )}

        </div>
      </td>
    </tr>
  );
}