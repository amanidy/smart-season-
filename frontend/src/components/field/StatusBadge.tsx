interface Props {
  status: string;
}

export default function StatusBadge({
  status,
}: Props) {
  const styles: Record<string, string> = {
    Healthy: "bg-green-100 text-green-700",
    "Needs Attention": "bg-yellow-100 text-yellow-700",
    Critical: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        styles[status] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}