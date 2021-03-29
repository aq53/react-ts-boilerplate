import { httpMethods } from "../constants/httpMethods";
import RestClient from "../utils/restClient";

export class ReportApiService {
  static restClient = new RestClient();
  static baseUrl = "https://localhost:5001/api"
  static qec_ipe_1_report_url = "/reports/QEC/IPE/1";

  static get_qec_ipe_1_report() {
    return ReportApiService.restClient.execute(
      ReportApiService.baseUrl + ReportApiService.qec_ipe_1_report_url,
      httpMethods.get
    );
  }
}
