import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex h-96 items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}