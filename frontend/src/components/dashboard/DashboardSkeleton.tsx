export default function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="h-32 rounded-xl bg-gray-200" />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-28 rounded-xl bg-gray-200"
          />
        ))}

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="h-72 rounded-xl bg-gray-200" />

        <div className="h-72 rounded-xl bg-gray-200" />

      </div>

    </div>
  );
}