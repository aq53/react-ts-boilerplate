import { httpMethods } from "../constants/httpMethods";
import RestClient from "../utils/restClient";

export class MockReportApiService {
  static restClient = new RestClient();
  static url = "https://jsonplaceholder.typicode.com/albums";

  static getMockReport() {
    return MockReportApiService.restClient.execute(
      MockReportApiService.url,
      httpMethods.get
    );
  }
}
