import axios from "axios";
import * as HttpStatus from "http-status-codes";
import { IClientResponse } from "../interfaces";

export const BASE_API_URL = process.env.REACT_APP_API_URL;

export default class RestClient {
  private clientResponse: IClientResponse;
  constructor() {
    this.clientResponse = {
      hasErrors: false,
      status: 0,
      statusText: "",
      result: {},
    };
  }
  public async execute(
    url: string,
    method: any,
    headers?: any,
    body?: any,
    query?: any,
    restConfigs?: any
  ): Promise<IClientResponse> {
    const options = {
      method,
      url,
      data: body,
      headers: headers,
      ...restConfigs,
    };
    if (query) {
      options.params = query;
    }

    try {
      const apiResponse = await axios(options);
      if (apiResponse) {
        this.clientResponse.status = apiResponse.status;
        this.clientResponse.result = apiResponse.data;
        this.clientResponse.statusText = apiResponse.statusText;
        this.clientResponse.hasErrors = false;
      }
    } catch (err) {
      this.clientResponse.hasErrors = true;
      if (err.response) {
        this.clientResponse.statusText = err.response.statusText;
        this.clientResponse.status = err.response.status;
        this.clientResponse.result = err.response.data;
      } else {
        this.clientResponse.statusText = err.message;
        this.clientResponse.result = err.message;
        this.clientResponse.status = this.getStatusCodeByErrorCode(err.code);
      }
    }
    return this.clientResponse;
  }

  private getStatusCodeByErrorCode(errCode: any) {
    switch (errCode) {
      case "ENOTFOUND":
        return HttpStatus.StatusCodes.NOT_FOUND;
      case "ECONNABORTED":
        return HttpStatus.StatusCodes.GATEWAY_TIMEOUT;
      case "ETIMEDOUT":
        return HttpStatus.StatusCodes.GATEWAY_TIMEOUT;
      default:
        return HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    }
  }
}
