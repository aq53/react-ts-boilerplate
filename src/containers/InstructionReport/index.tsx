import React from "react";
import { connect } from "react-redux";
import { Container, Row, Spinner } from "reactstrap";
import { filterInstructionReport, getInstructionReport } from "../../actions";
import { IFilterPayload, IPagination } from "../../interfaces";
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
  },
  {
    key: "instructionId",
    name: "Instruction Id",
  },
  {
    key: "status",
    name: "Status",
  },
  {
    key: "processed",
    name: "Processed",
  },
  {
    key: "createdAt",
    name: "Created At",
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
