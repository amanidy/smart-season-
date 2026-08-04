import Card from "@/components/ui/Card";
import { SearchResult } from "@/types/search";

interface Props {
  results: SearchResult[];
}

export default function SearchResults({
  results,
}: Props) {
  if (results.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        No results found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card key={result.id}>
          <h3 className="text-lg font-semibold">
            {result.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {result.description}
          </p>

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>{result.category}</span>

            <span>
              {new Date(
                result.createdAt
              ).toLocaleDateString()}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}