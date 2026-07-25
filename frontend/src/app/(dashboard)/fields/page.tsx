import FieldList from "@/components/field/FieldList";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function FieldsPage() {
  return (
    <div className="space-y-8">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Fields</h1>
          <p className="text-gray-600">
            Manage registered farm fields.
          </p>
        </div>

        <Link href="/fields/create">
          <Button>Register Field</Button>
        </Link>
      </div>

      <FieldList />
    </div>
  );
}