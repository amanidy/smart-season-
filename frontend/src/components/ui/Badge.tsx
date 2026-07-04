import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
      {children}
    </span>
  );
}