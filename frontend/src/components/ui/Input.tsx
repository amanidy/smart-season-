"use client";

import { InputHTMLAttributes } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
      />
    </div>
  );
}