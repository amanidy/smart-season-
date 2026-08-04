"use client";

import { useMemo, useState } from "react";

import Breadcrumbs from "@/components/search/Breadcrumbs";
import SearchBar from "@/components/search/SearchBar";
import SearchFilters from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import Pagination from "@/components/search/Pagination";
import SearchSkeleton from "@/components/search/SearchSkeleton";

import { useSearch } from "@/hooks/useSearch";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState("ALL");
  const [page, setPage] = useState(1);

  const {
    data,
    loading,
    error,
  } = useSearch(query, page);

  const filteredResults = useMemo(() => {
    if (!data) return [];

    if (category === "ALL") {
      return data.results;
    }

    return data.results.filter(
      (result) =>
        result.category === category
    );
  }, [data, category]);

  const totalPages = data
    ? Math.max(
        1,
        Math.ceil(data.total / data.pageSize)
      )
    : 1;

  return (
    <div className="space-y-8">

      <Breadcrumbs
        items={[
          {
            label: "Dashboard",
            href: "/dashboard",
          },
          {
            label: "Search",
          },
        ]}
      />

      <div>

        <h1 className="text-3xl font-bold">
          Global Search
        </h1>

        <p className="text-gray-500">
          Search across fields, reports,
          weather, users and notifications.
        </p>

      </div>

      <SearchBar
        value={query}
        onChange={(value) => {
          setQuery(value);
          setPage(1);
        }}
      />

      <SearchFilters
        category={category}
        onCategoryChange={setCategory}
      />

      {loading && <SearchSkeleton />}

      {error && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <SearchResults
            results={filteredResults}
          />

          {filteredResults.length > 0 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}

    </div>
  );
}