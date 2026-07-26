export default function ReportsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-24 rounded-xl bg-gray-200" />

      <div className="grid gap-6 md:grid-cols-4">

        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="h-28 rounded-xl bg-gray-200"
          />
        ))}

      </div>

      <div className="h-80 rounded-xl bg-gray-200" />

      <div className="h-80 rounded-xl bg-gray-200" />

    </div>
  );
}