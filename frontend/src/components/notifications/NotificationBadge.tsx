import Badge from "@/components/ui/Badge";

interface Props {
  count: number;
}

export default function NotificationBadge({
  count,
}: Props) {
  if (count === 0) return null;

  return (
    <Badge>
      {count} Unread
    </Badge>
  );
}