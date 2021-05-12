import React from "react";
import { connect } from "react-redux";
import { Container, Row, Spinner } from "reactstrap";
import { filterInstructionReport, getInstructionReport, sort_qec_ipe_1_report } from "../../actions";
import { IFilterPayload, IPagination, ISortPayload } from "../../interfaces";
import ReportTable from "../../components/ReportTable";
import Header from "../../components/Header";

const defaultColumnProperties = {
  filterable: true,
  sortable: true,
};

const columns = [
  {
    key: "customerName",
    name: "Customer",
    type: "text",
  },
  {
    key: "instructionId",
    name: "Instruction Id",
    type: "text",
  },
  {
    key: "status",
    name: "Status",
    type: "text",
  },
  {
    key: "processed",
    name: "Processed",
    type: "text",
  },
  {
    key: "createdAt",
    name: "Created At",
    type: "date",
  },
].map((c) => ({ ...c, ...defaultColumnProperties }));
class InstructionReport extends React.Component<{
  dispatch: any;
  instructionReport: {
    data: Array<any>;
    paging: IPagination;
    loading: boolean;
  };
}> {
  componentDidMount() {
    this.getReport();
  }
  getReport = () => {
    this.props.dispatch(getInstructionReport());
  };
  onFilter = (payload: IFilterPayload) => {
    this.props.dispatch(filterInstructionReport(payload));
  };
  onSort = (payload: ISortPayload) => {
    this.props.dispatch(sort_qec_ipe_1_report(payload));
  };

  render() {
    const { instructionReport } = this.props;
    const data = instructionReport.data.map((item: any) => ({
      customerName: item.request.customer.customerName,
      instructionId: item.request.instructionId,
      status: item.status,
      processed: item.processedByCBS ? "Yes" : "No",
      createdAt: item.createdAt.$date,
    }));

    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <ReportTable
            onReset={this.getReport}
            onFilter={this.onFilter}
            onSort={this.onSort}
            paging={instructionReport.paging}
            headers={columns}
            title="Inbound Instructions Report"
            data={data}
            loading={instructionReport.loading}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  instructionReport: state.instructionReport,
});

export default connect(mapStateToProps)(InstructionReport);
