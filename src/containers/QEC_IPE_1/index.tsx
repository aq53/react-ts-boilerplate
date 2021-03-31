import React from "react";
import { connect } from "react-redux";
import { Container, Row, Spinner } from "reactstrap";
import { filter_qec_ipe_1_report, get_qec_ipe_1_report, sort_qec_ipe_1_report } from "../../actions";
import { IFilterPayload, IPagination, ISortPayload } from "../../interfaces";
import ReportTable from "../../components/ReportTable";
import Header from "../../components/Header";

const defaultColumnProperties = {
  filterable: true,
  sortable: true,
};

const columns = [
  {
    key: "sNo",
    name: "S No",
  },
  {
    key: "faculty",
    name: "Faculty",
  },
  {
    key: "department",
    name: "Department",
  },
  {
    key: "program",
    name: "Program",
  },
  {
    key: "launchDate",
    name: "Launch Date",
  },
  {
    key: "approvedIn",
    name: "Approved In",
  },
].map((c) => ({ ...c, ...defaultColumnProperties }));

class QEC_IPE_1_Report extends React.Component<{
  dispatch: any;
  qEC_IPE_1_Report: {
    data: Array<any>;
    paging: IPagination;
    loading: boolean;
  };
}> {
  componentDidMount() {
    this.getReport();
  }
  getReport = () => {
    this.props.dispatch(get_qec_ipe_1_report());
  };
  onFilter = (payload: IFilterPayload) => {
    this.props.dispatch(filter_qec_ipe_1_report(payload));
  };
  onSort = (payload: ISortPayload) => {
    this.props.dispatch(sort_qec_ipe_1_report(payload));
  };

  render() {
    const { qEC_IPE_1_Report } = this.props;
    //console.log(qEC_IPE_1_Report)
    const data = qEC_IPE_1_Report.data.map((item: any) => ({
        sNo: item.sNo,
        faculty: item.faculty,
        department: item.department,
        program: item.program
    }));
    console.log("TABLE_DATA::",data)
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <ReportTable
            onReset={this.getReport}
            onFilter={this.onFilter}
            onSort={this.onSort}
            fileName="Faculty-Department-wise list of academic program"
            paging={qEC_IPE_1_Report.paging}
            headers={columns}
            title="Faculty-Department-wise list of academic program"
            data={data}
            loading={qEC_IPE_1_Report.loading}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
    qEC_IPE_1_Report: state.qEC_IPE_1_Report,
});

export default connect(mapStateToProps)(QEC_IPE_1_Report);
