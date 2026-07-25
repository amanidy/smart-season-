import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FieldEmptyState() {
  return (
    <div className="rounded-lg border border-dashed p-10 text-center">
      <h2 className="text-2xl font-semibold">
        No fields found
      </h2>

      <p className="mt-3 text-gray-600">
        Register your first field to begin monitoring crops.
      </p>

      <div className="mt-6">
        <Link href="/fields/create">
          <Button>
            Register Field
          </Button>
        </Link>
      </div>
    </div>
  );
}