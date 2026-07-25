import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl text-black font-semibold">Dashboard</h1>

      <UserMenu />
    </header>
  );
}