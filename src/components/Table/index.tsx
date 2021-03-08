import React, { useState } from "react";
import { CSVLink } from "react-csv";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data } from "react-data-grid-addons";
import { Button } from "reactstrap";

function Table({ data, columns }: { data: any; columns: any }) {
  const [filters, setFilters] = useState({});
  const [rows, setRows] = useState(data);
  const selectors = Data.Selectors;
  const filteredRows = getRows(rows, filters);

  const handleFilterChange = (filter: {
    filterTerm: any;
    column: { key: string | number };
  }) => (filters: any) => {
    const newFilters = { ...filters };
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    return newFilters;
  };

  function getValidFilterValues(rows: any[], columnId: string | number) {
    return rows
      .map((r: { [x: string]: any }) => r[columnId])
      .filter((item: any, i: any, a: string | any[]) => {
        return i === a.indexOf(item);
      });
  }

  function getRows(rows: any, filters: {}) {
    return selectors.getRows({ rows, filters });
  }

  const sortRows = (
    initialRows: any,
    sortColumn: string,
    sortDirection: string
  ) => (rows: any) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  return (
    <>
      <ReactDataGrid
        columns={columns}
        rowGetter={(i: string | number) => filteredRows[i]}
        rowsCount={filteredRows.length}
        minHeight={500}
        toolbar={
          <Toolbar enableFilter={true}>
            {rows.length ? (
              <CSVLink
                data={rows}
                headers={columns.map(
                  (column: { name: string; key: string }) => ({
                    label: column.name,
                    key: column.key,
                  })
                )}
              >
                <i className="ni ni-cloud-download-95 ct-download" />
              </CSVLink>
            ) : null}
          </Toolbar>
        }
        onAddFilter={(filter: any) => setFilters(handleFilterChange(filter))}
        onClearFilters={() => setFilters({})}
        getValidFilterValues={(columnKey: any) =>
          getValidFilterValues(rows, columnKey)
        }
        onGridSort={(sortColumn: string, sortDirection: string) =>
          setRows(sortRows(rows, sortColumn, sortDirection))
        }
      />
    </>
  );
}

export default Table;
