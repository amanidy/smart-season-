export default function NotificationsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">

      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="h-28 rounded-xl bg-gray-200"
        />
      ))}

    </div>
  );
}