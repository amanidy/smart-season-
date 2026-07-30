interface Props {
  fullName: string;
  avatarUrl?: string;
}

export default function UserAvatar({
  fullName,
  avatarUrl,
}: Props) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={fullName}
        className="h-24 w-24 rounded-full object-cover border"
      />
    );
  }

  const initials = fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600 text-3xl font-bold text-white">
      {initials}
    </div>
  );
}