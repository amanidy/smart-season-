import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
    className={`px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...props}>
      {children}
    </button>
  );
}