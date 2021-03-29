import { IFilterPayload } from "./FilterPayload";
import { IPagination } from "./PaginationInterface";

export interface IReportTable {
  onReset: () => void;
  onFilter: (payload: IFilterPayload) => void;
  title: string;
  paging:IPagination;
  headers: Array<any>;
  data: Array<any>;
  loading:boolean;
  fileName:string;
}
