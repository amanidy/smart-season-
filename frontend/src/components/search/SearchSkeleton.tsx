export default function SearchSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-24 rounded-xl bg-gray-200"
        />
      ))}

    </div>
  );
}