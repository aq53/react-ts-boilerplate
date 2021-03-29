import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { instructionReportReducer, mockReportReducer,qec_ipe_1_report_reducer } from "../reducers";
import rootSaga from "../sagas";

const reducers = {
  mockReport: mockReportReducer,
  instructionReport: instructionReportReducer,
  qEC_IPE_1_Report: qec_ipe_1_report_reducer,
};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application

export default store;
