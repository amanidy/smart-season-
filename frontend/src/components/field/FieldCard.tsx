import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DeleteFieldButton from "./DeleteFieldButton";
import { Field } from "@/types/field";


interface Props {
  field: Field;
  role: "ADMIN" | "AGENT";
}



export default function FieldCard({
   field,
  role,
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

          {role === "ADMIN" && (
            <DeleteFieldButton />
          )}
        </div>
      </div>
    </Card>
  );
}