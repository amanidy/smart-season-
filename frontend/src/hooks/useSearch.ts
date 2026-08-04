"use client";

import { useEffect, useState } from "react";
import { searchService } from "@/services/search.service";
import { SearchResponse } from "@/types/search";

export function useSearch(
  query: string,
  page: number
) {
  const [data, setData] =
    useState<SearchResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!query.trim()) {
      setData(null);
      return;
    }

    async function loadResults() {
      setLoading(true);

      try {
        const response =
          await searchService.search(
            query,
            page
          );

        setData(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to search."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadResults();
  }, [query, page]);

  return {
    data,
    loading,
    error,
  };
}