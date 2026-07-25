export default function WeatherSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-40 rounded-xl bg-gray-200" />

      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-32 rounded-xl bg-gray-200"
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-24 rounded-xl bg-gray-200"
          />
        ))}
      </div>

    </div>
  );
}