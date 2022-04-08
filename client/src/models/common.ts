export interface PaginationParams {
  limit: number;
  page: number;
  total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination?: PaginationParams;
}

export interface ListParams {
  filter?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";

  [key: string]: any;
}
