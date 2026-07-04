import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({
  children,

}: CardProps) {
  return (
    <div  className="rounded-xl border border-gray-200 text-black bg-white shadow-sm p-6">
      {children}
    </div>
  );
}