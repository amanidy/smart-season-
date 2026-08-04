"use client";

import Input from "@/components/ui/Input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <Input
      label="search"
      type="search"
      placeholder="Search fields, reports, weather..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}