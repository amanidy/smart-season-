import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function FieldForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Field Name
        </label>

        <Input
          placeholder="Enter field name"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Crop
        </label>

        <Input
          placeholder="Maize"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Location
        </label>

        <Input
          placeholder="Nakuru"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Acreage
        </label>

        <Input
          type="number"
          placeholder="10"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <Input
          placeholder="Healthy"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Assigned Agent
        </label>

        <Input
          placeholder="Jane Doe"
        />
      </div>

      <Button type="submit">
        Save Field
      </Button>
    </form>
  );
}