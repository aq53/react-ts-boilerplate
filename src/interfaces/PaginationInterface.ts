export interface IPagination {
  totalPages: number;
  pageNumber: number;
  onPageChange: (pageNumber: number) => void;
}
