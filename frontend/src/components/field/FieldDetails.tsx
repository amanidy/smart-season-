import Card from "@/components/ui/Card";

export default function FieldDetails() {
  return (
    <Card>
      <h1 className="mb-4 text-3xl font-bold">
        Field Details
      </h1>

      <div className="space-y-2">
        <p>
          <strong>Name:</strong> North Farm
        </p>

        <p>
          <strong>Crop:</strong> Maize
        </p>

        <p>
          <strong>Location:</strong> Nakuru
        </p>

        <p>
          <strong>Status:</strong> Healthy
        </p>

        <p>
          <strong>Assigned Agent:</strong> Jane Doe
        </p>
      </div>
    </Card>
  );
}