import Link from "next/link";

interface Props {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({
  items,
}: Props) {
  return (
    <nav className="mb-6 text-sm text-gray-500">

      {items.map((item, index) => (
        <span key={item.label}>

          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-green-600"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span> / </span>
          )}

        </span>
      ))}

    </nav>
  );
}