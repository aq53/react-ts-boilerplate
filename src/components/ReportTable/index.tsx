import React, { useState } from "react";
import { CSVLink } from "react-csv";
import DatePicker from "react-datepicker";

import {
  Card,
  CardHeader,
  CardFooter,
  Table,
  Row,
  CardBody,
  Label,
  Button,
} from "reactstrap";
import { IReportTable } from "../../interfaces";
import Loader from "../Loader";
import CustomPagination from "../Paging";
// core components

const ReportTable = ({
  title,
  headers,
  onFilter,
  onReset,
  paging,
  data,
  loading
}: IReportTable) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [filters, setFilters] = useState({});

  const onSetFilters = () => {
    onFilter({
      fromDate,
      toDate,
      pageNumber: paging.pageNumber,
    });
    setFilters({
      fromDate,
      toDate,
    });
  };

  const onPageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > paging.totalPages) {
      return;
    }
    onFilter({ ...filters, pageNumber });
  };

  const onClickReset = () => {
    onReset();
    setFilters({});
  };
  const intialSliceIndex = (paging.pageNumber - 1) * 10;
  const endSliceIndex = paging.pageNumber * 10;
  return (
    <>
      <Row>
        <div className="col-md-12">
          <Card className="shadow">
            <CardHeader>
              <h3 className="mb-0">Filters</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <div className="col-md-2">
                  <Label for="from-date">From</Label>
                  <DatePicker
                    className="form-control"
                    id="from-date"
                    maxDate={toDate}
                    selected={fromDate}
                    onChange={(date: Date) => setFromDate(date)}
                  />
                </div>

                <div className="col-md-2">
                  <Label for="to-date">To</Label>
                  <DatePicker
                    className="form-control"
                    id="to-date"
                    selected={toDate}
                    minDate={fromDate}
                    onChange={(date: Date) => setToDate(date)}
                  />
                </div>

                <div className="col-md-8 flex-end">
                  <Button onClick={onClickReset}>Reset</Button>
                  <Button onClick={onSetFilters}>Apply</Button>
                  <CSVLink
                    data={data}
                    headers={headers.map(
                      (column: { name: string; key: string }) => ({
                        label: column.name,
                        key: column.key,
                      })
                    )}
                  >
                    <Button>Download CSV</Button>
                  </CSVLink>
                </div>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">{title}</h3>
            </CardHeader>
            <Loader loading={loading}>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {headers.map((header) => (
                      <th key={header.key} scope="col">
                        {header.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(intialSliceIndex, endSliceIndex).map((item) => (
                    <tr>
                      <td>{item.customerName}</td>

                      <td>{item.instructionId}</td>

                      <td>{item.status}</td>

                      <td>{item.processed}</td>

                      <td>{item.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Loader>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <CustomPagination {...paging} onPageChange={onPageChange} />
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </>
  );
};

export default ReportTable;
