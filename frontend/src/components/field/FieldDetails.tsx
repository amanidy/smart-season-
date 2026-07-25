import Link from "next/link";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "./StatusBadge";

import { Field } from "@/types/field";

interface Props {
  field: Field;
  role: "ADMIN" | "AGENT";
}

export default function FieldDetails({
  field,
  role,
}: Props) {
  const updates = [
    "Irrigation completed",
    "Fertilizer applied",
    "Pest inspection scheduled",
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {field.name}
          </h1>
        </div>

        <StatusBadge status={field.status} />
      </div>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Field Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              Crop
            </p>

            <p className="font-medium">
              {field.crop}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Location
            </p>

            <p className="font-medium">
              {field.location}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Acreage
            </p>

            <p className="font-medium">
              {field.acreage} Acres
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Assigned Agent
            </p>

            <p className="font-medium">
              Jane Doe
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Recent Updates
        </h2>

        <ul className="space-y-3">
          {updates.map((update) => (
            <li
              key={update}
              className="rounded-lg border p-3"
            >
              {update}
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href={`/fields/${field.id}/edit`}>
          <Button>
            Edit Field
          </Button>
        </Link>

        <Link href={`/fields/${field.id}/updates/create`}>
          <Button>
            Add Update
          </Button>
        </Link>

        {role === "ADMIN" && (
          <Button>
            Delete Field
          </Button>
        )}
      </div>
    </div>
  );
}