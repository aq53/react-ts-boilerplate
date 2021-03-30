import { filter } from "lodash";
import React, { useEffect, useState } from "react";
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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown,
  InputGroup,
  Input,
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
  fileName,
  data,
  loading
}: IReportTable) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [keyword, setKeyword] = useState({name: "", value: ""})
  const [sortData, setSortData] = useState(data)
  const [direction, setDirection] = useState("ascending")
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setSortData(data)
  }, [data])

  const onSetFilters = () => {
    onFilter({
      fromDate,
      toDate,
      pageNumber: paging.pageNumber,
      keyword
    });
    setFilters({
      fromDate,
      toDate,
      keyword
    });
  };

  const onPageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > paging.totalPages) {
      return;
    }
    console.log({pageNumber})
    onFilter({ ...filters, pageNumber });
  };

  const onClickReset = () => {
    onReset();
    setFilters({});
  };
  const intialSliceIndex = (paging.pageNumber - 1) * 10;
  const endSliceIndex = paging.pageNumber * 10;

  const sortWith = (headerName: string) => {
    const items = [...sortData]

    let sortItems = items.sort((a, b) => {
      if (a[headerName] <= b[headerName]) {
        return direction === 'ascending' ? -1 : 1;
      } 
      if (a[headerName] >= b[headerName]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0
    })

    direction === "ascending" 
    ? setDirection("descending") 
    : setDirection("ascending")

    setSortData(sortItems)
  }

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

                <div className="col-md-2">
                  <Label>Column</Label>
                  <div className="d-flex flex-row">
                    <div >
                      <Input 
                        className="form-control"
                        style={{width: "150px"}}
                        onChange={(e) => setKeyword({...keyword, value: e.target.value})}
                      />
                    </div>
                    <div>
                      <Input 
                        type="select" 
                        name="select"
                        className="form-control"
                        style={{width: "150px"}}
                        onChange={(e) => setKeyword({...keyword, name: e.target.value})}
                      >
                        <option>Select field</option>
                        {headers.map((header) => (
                          <option>
                            {header.key}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 flex-end">
                  <Button onClick={onClickReset}>Reset</Button>
                  <Button onClick={onSetFilters}>Apply</Button>
                  <CSVLink
                    data={data}
                    filename={`${fileName}.csv`}
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
                      <th 
                        key={header.key} 
                        scope="col" 
                        onClick={() => sortWith(header.key)}
                      >
                        {header.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortData.slice(intialSliceIndex, endSliceIndex).map((item) => (
                    <tr>
                      {headers.map(header => (
                        <td>{item[header.key]}</td>
                      ))}
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
