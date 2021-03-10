import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { IPagination } from "../../interfaces";

const CustomPagination = ({
  pageNumber,
  totalPages,
  onPageChange,
}: IPagination) => {
  const range = totalPages > 10 ? 10 : totalPages;
  const doPaging = () => {
    let start = 1;

    let paging = [];
    if (pageNumber < range / 2 + 1) {
      start = 1;
    } else if (pageNumber >= totalPages - range / 2) {
      start = Math.floor(totalPages - range + 1);
    } else {
      start = pageNumber - Math.floor(range / 2);
    }

    for (let i = start; i <= start + range - 1; i++) {
      paging.push(i);
    }
    return paging;
  };

  return (
    <Pagination
      className="pagination justify-content-end mb-0"
      listClassName="justify-content-end mb-0"
    >
      <PaginationItem>
        <PaginationLink
          href="#pablo"
          onClick={() => onPageChange(pageNumber - 1)}
        >
          <i className="fas fa-angle-left" />
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>

      {doPaging().map((page: number) => (
        <PaginationItem
          key={page}
          className={pageNumber === page ? "active" : ""}
        >
          <PaginationLink href="#pablo" onClick={() => onPageChange(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          href="#pablo"
          onClick={() => onPageChange(pageNumber + 1)}
        >
          <i className="fas fa-angle-right" />
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default CustomPagination;
