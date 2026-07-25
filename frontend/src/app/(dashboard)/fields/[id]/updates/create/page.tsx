import FieldUpdateForm from "@/components/field/FieldUpdateForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function AddFieldUpdatePage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Add Field Update
        </h1>

        <p className="text-gray-500">
          Record the latest field conditions.
        </p>
      </div>

      <FieldUpdateForm fieldId={id} />
    </div>
  );
}