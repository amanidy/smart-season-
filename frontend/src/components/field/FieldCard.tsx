import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DeleteFieldButton from "./DeleteFieldButton";

type Field = {
  id: string;
  name: string;
  crop: string;
  location: string;
  acreage: number;
  status: string;
  agent: string;
};

type Props = {
  field: Field;
};

const userRole = "ADMIN"; // Change to AGENT to test

export default function FieldCard({
  field,
}: Props) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">
            {field.name}
          </h2>

          <Badge>
            {field.status}
          </Badge>
        </div>

        <div className="space-y-1 text-sm">
          <p>
            <strong>Crop:</strong> {field.crop}
          </p>

          <p>
            <strong>Location:</strong> {field.location}
          </p>

          <p>
            <strong>Acreage:</strong> {field.acreage} Acres
          </p>

          <p>
            <strong>Assigned Agent:</strong>{" "}
            {field.agent}
          </p>
        </div>

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

          {userRole === "ADMIN" && (
            <DeleteFieldButton />
          )}
        </div>
      </div>
    </Card>
  );
}