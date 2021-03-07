import React from "react";
import { Filters } from "react-data-grid-addons";
import { connect } from "react-redux";
import { Card, CardHeader, Button, Container, Col, Row } from "reactstrap";
import { getMockReport } from "../../actions";
import Table from "../../components/Table";
import Header from "../../components/Header";

const defaultColumnProperties = {
  filterable: true,
  sortable: true,
};

const { NumericFilter, AutoCompleteFilter } = Filters;

const columns = [
  {
    key: "id",
    name: "ID",
    filterRenderer: NumericFilter,
    sortDescendingFirst: true,
  },
  {
    key: "userId",
    name: "User Id",
    filterRenderer: NumericFilter,
  },
  {
    key: "title",
    name: "Title",
    filterRenderer: AutoCompleteFilter,
  },
].map((c) => ({ ...c, ...defaultColumnProperties }));
class Reports extends React.Component<{
  dispatch: any;
  mockReport: {
    data: Array<{
      id: string;
      userId: string;
      title: string;
    }>;
    loading: boolean;
  };
}> {
  componentDidMount() {
    this.props.dispatch(getMockReport());
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-12" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Mock Report</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table columns={columns} data={this.props.mockReport.data} />
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ mockReport: state.mockReport });

export default connect(mapStateToProps)(Reports);