import { apiFetch } from "./api";
import { SearchResponse } from "@/types/search";

export const searchService = {
  search(query: string, page = 1) {
    return apiFetch<SearchResponse>(
      `/search?q=${encodeURIComponent(
        query
      )}&page=${page}`
    );
  },
};