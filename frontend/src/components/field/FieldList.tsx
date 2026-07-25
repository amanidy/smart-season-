import FieldCard from "./FieldCard";

const fields = [
  {
    id: "1",
    name: "North Farm",
    crop: "Maize",
    location: "Nakuru",
    acreage: 15,
    status: "Healthy",
    agent: "Jane Doe",
  },
  {
    id: "2",
    name: "West Field",
    crop: "Beans",
    location: "Eldoret",
    acreage: 8,
    status: "Needs Attention",
    agent: "John Smith",
  },
];

export default function FieldList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {fields.map((field) => (
        <FieldCard
          key={field.id}
          field={field}
        />
      ))}
    </div>
  );
}