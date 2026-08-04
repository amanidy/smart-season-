export type SearchCategory =
  | "FIELD"
  | "REPORT"
  | "WEATHER"
  | "NOTIFICATION"
  | "USER";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  createdAt: string;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  page: number;
  pageSize: number;
}