"use client";

interface Props {
  value: string;
  onChange(value: string): void;
}

export default function FieldSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="search"
      placeholder="Search fields..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-lg border p-3"
    />
  );
}