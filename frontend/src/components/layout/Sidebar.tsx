import Link from "next/link";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <Logo />

      <nav className="mt-8 flex text-black flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/fields">Fields</Link>
        <Link href="/weather">Weather</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
}