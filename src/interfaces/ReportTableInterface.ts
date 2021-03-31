import { IFilterPayload } from "./FilterPayload";
import { IPagination } from "./PaginationInterface";
import { ISortPayload } from "./SortPayload";

export interface IReportTable {
  onReset: () => void;
  onFilter: (payload: IFilterPayload) => void;
  onSort: (payload: ISortPayload) => void;
  title: string;
  paging:IPagination;
  headers: Array<any>;
  data: Array<any>;
  loading:boolean;
  fileName:string;
}
