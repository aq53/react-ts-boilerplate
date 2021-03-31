import { takeEvery, put, call } from "redux-saga/effects";
import { load_qec_ipe_1_report, save_qec_ipe_1_report } from "../actions";
import { ACTION_TYPES } from "../constants/actionTypes";
import store from '../store/store'
import { IClientResponse, IFilterPayload, ISortPayload } from "../interfaces";
import inboundInstructions from "../sampleData/inboundinstructions.json";
import { ReportApiService } from "../services";

const qec_report = {
  "result": [
    {
      "sNo": 1,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (Honors) ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 2,
      "faculty": "Innovation ",
      "department": "Entrepreneurship Center",
      "program": " Entrepreneurship ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 3,
      "faculty": "RnDD",
      "department": "Center for Area and Policy Studies",
      "program": " Economics Law and International Relations",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 4,
      "faculty": "RnDD",
      "department": "Center for Area and Policy Studies",
      "program": " Economics Media and International Relation",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 5,
      "faculty": "Innovation ",
      "department": "Social Entrepreneurship",
      "program": " Social Entrepreneurship and Social Leadership ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 6,
      "faculty": "Innovation ",
      "department": "Industrial ",
      "program": " Industrial ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 7,
      "faculty": "Innovation ",
      "department": "Entrepreneurship Center",
      "program": " in Logistic and Supply Chain ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 8,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 9,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 10,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Executive ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 11,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Executive ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 12,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Comm Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 13,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Comm Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 14,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Media Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 15,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Media Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 16,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Environment and Energy  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 17,
      "faculty": "RnDD",
      "department": "Education",
      "program": "Innovation  Educational  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 18,
      "faculty": "RnDD",
      "department": "Education",
      "program": "Educational ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 19,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Finance and Risk  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 20,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Finance and Risk Mgmt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 21,
      "faculty": "RnD",
      "department": "Industrial Engineering and Mgmt",
      "program": "Innovation  Industrial  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 22,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Industrial  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 23,
      "faculty": "RnDD",
      "department": "Media Studies",
      "program": "Innovation  Media  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 24,
      "faculty": "RnDD",
      "department": "Media Studies",
      "program": "Innovation  Media  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 25,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Weekend",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 26,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 27,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  in Logistic and Supply Chain  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 28,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": "c Organizational Psychology and HRM ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 29,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": "c Organizational Psychology and HRM ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 30,
      "faculty": "RnDD",
      "department": "Education",
      "program": "Innovation  Educational Mgmt - ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 31,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular -  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 32,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular-  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 33,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Media  and Marketing  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 34,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After Innovation 4 ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 35,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (Regular) After (COM)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 36,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After -CS",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 37,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After (I)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 38,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After (J)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 39,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After -MIT",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 40,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Executive After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 41,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Comm After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 42,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Comm Mgt After Innovation 4",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 43,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Media Mgt After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 44,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Adv & Media Mgt After J",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 45,
      "faculty": "RnDD",
      "department": "Education",
      "program": "Innovation  Edu Mgt After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 46,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Fin & Risk Mgt After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 47,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Fin & Risk Mgt After J",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 48,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Industrial Mgt After I",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 49,
      "faculty": "RnDD",
      "department": "Media Studies",
      "program": "Innovation  Media Mgt After Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 50,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Media Mgt After J",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 51,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (Regular) After (COM)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 52,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After ARM",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 53,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  MEDIA MGMT & MKT AFTR ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 54,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After B.E Ele 1.5Y",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 55,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (Regular) After (AML)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 56,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (Regular) After ()",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 57,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  (AMM) After ()",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 58,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Fin & Risk Mgt After ARM",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 59,
      "faculty": "Innovation ",
      "department": "Graduate Business Research",
      "program": "MPhil in Business ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 60,
      "faculty": "Innovation ",
      "department": "Communication and Languages",
      "program": " in English Applied Linguistics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 61,
      "faculty": "Innovation ",
      "department": "Graduate Business Research",
      "program": " Environment and Energy ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 62,
      "faculty": "Innovation ",
      "department": "Graduate Business Research",
      "program": " in Business ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 63,
      "faculty": "Innovation ",
      "department": "Graduate Business Research",
      "program": " Business ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 64,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": " Computer Science ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 65,
      "faculty": "IT",
      "department": "Actuarial Science and Risk",
      "program": " Actuarial Science and Risk  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 66,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": " Mathematics and Economics ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 67,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": " Data Science ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 68,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": " Computer Science",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 69,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": " Mathematics and Scientific Computing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 70,
      "faculty": "IT",
      "department": "Actuarial ScienRnD Mathematics and Statistics",
      "program": " Statistics and Scientific Computing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 71,
      "faculty": "IT",
      "department": "Actuarial Science and Risk",
      "program": " Actuarial Sc & Comp Fin",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 72,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": " Computer Science",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 73,
      "faculty": "IT",
      "department": "Actuarial ScienRnD Mathematics and Statistics",
      "program": " Statistics and Scientific Computing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 74,
      "faculty": "RnD",
      "department": " Engineering",
      "program": "BE  Engineering ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 75,
      "faculty": "RnD",
      "department": " Engineering",
      "program": " in Engineering ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 76,
      "faculty": "RnD",
      "department": " Engineering",
      "program": " in  Engineering",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 77,
      "faculty": "RnDD",
      "department": "Commerce and Professional Studies",
      "program": " (Honors) Accountancy  and Law ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 78,
      "faculty": "RnDD",
      "department": "Media Studies",
      "program": " Media Studies ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 79,
      "faculty": "RnDD",
      "department": "Center for Area and Policy Studies",
      "program": "International Relations",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 80,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": " Joint (Honors) in Business and Psychology ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 81,
      "faculty": "RnDD",
      "department": "Education",
      "program": " in Education",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 82,
      "faculty": "RnDD",
      "department": "Economics",
      "program": " in Economics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 83,
      "faculty": "RnDD",
      "department": "Economics",
      "program": " Economics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 84,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": "c Org Psych & HRM after Innovation H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 85,
      "faculty": "Innovation ",
      "department": "Industrial ",
      "program": " Industrial Engineering and ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 86,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": " - External",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 87,
      "faculty": "RnDD",
      "department": "Commerce and Professional Studies",
      "program": " in Social Science",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 88,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Health and Hospital  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 89,
      "faculty": "Innovation ",
      "department": "Accounting and Finance",
      "program": " Joint Honors Accounting and Finance  ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 90,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Honors - External",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 91,
      "faculty": "RnDD",
      "department": "Economics",
      "program": " (Honors) Economics and Finance",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 92,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Health and Hosp Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 93,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": " Psychology",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 94,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular - External",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 95,
      "faculty": "Innovation ",
      "department": "Graduate Business Research",
      "program": "MPhil in Education",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 96,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Health Hosp & Phar Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 97,
      "faculty": "RnDD",
      "department": "Economics",
      "program": "C ECONOMICS AND FINANCE-",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 98,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": "  & IT ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 99,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": " FINAN MATHE & STATISTICS",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 100,
      "faculty": "RnDD",
      "department": "Commerce and Professional Studies",
      "program": "Commerce",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 101,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Health & Hosp Mgt - Extern",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 102,
      "faculty": "RnD",
      "department": " Engineering",
      "program": "Innovation  Telecomm Mgt ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 103,
      "faculty": "RnD",
      "department": " Engineering",
      "program": "BE Telecommunication ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 104,
      "faculty": "RnDD",
      "department": "Economics",
      "program": " Economics and Finance ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 105,
      "faculty": "RnDD",
      "department": "Economics",
      "program": "B.Ed (Honors) Elementary",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 106,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": " Education & Psychology",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 107,
      "faculty": "RnDD",
      "department": "Education",
      "program": " Education",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 108,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Entrepreneurship and SME Banking and Finance",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 109,
      "faculty": "Innovation ",
      "department": "Accounting and Finance",
      "program": " Joint Honors Economics and Finance ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 110,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": " Mathematics and Scientific Computing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 111,
      "faculty": "President Secretariat",
      "department": "EMEC",
      "program": "PGD",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 112,
      "faculty": "President Secretariat",
      "department": "EMEC",
      "program": "PGD",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 113,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation  Regular After SESL",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 114,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": "MPHIL in Organizational Psychology",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 115,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Media  and Marketing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 116,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation 3H",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 117,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Innovation ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 118,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": " (Joint Honors) ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 119,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Educational ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 120,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Accounting and Finance",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 121,
      "faculty": "Innovation ",
      "department": "Innovation  Department",
      "program": "Industrial ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 122,
      "faculty": "RnDD",
      "department": "Economics",
      "program": "Pre- Economics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 123,
      "faculty": "Innovation ",
      "department": "Environment and Energy",
      "program": "Pre- Environment and Energy Mgt",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 124,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": "Pre- Statistics and Scientific Computing",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 125,
      "faculty": "RnDD",
      "department": "Education",
      "program": "Pre- Education",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 126,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": "Pre- Computer Science",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 127,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": " Mathematics and Computational Finance",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 128,
      "faculty": "IT",
      "department": "Mathematics and Statistics",
      "program": " Statistics and Business Analytics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 129,
      "faculty": "IT",
      "department": "Computer Science and ",
      "program": "  Engineering",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 130,
      "faculty": "RnDD",
      "department": "Economics",
      "program": "Pre- in Economics",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 131,
      "faculty": "RnDD",
      "department": "Business Psychology",
      "program": "Pre-MPhil in Organizational Psychology",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 132,
      "faculty": "RnDD",
      "department": "Education",
      "program": "B.Ed (Honors) ",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 133,
      "faculty": "RnDD",
      "department": "Education",
      "program": "B.Ed Honors (2.5 Years)",
      "launchDate": null,
      "approvedIn": null
    },
    {
      "sNo": 134,
      "faculty": "RnDD",
      "department": "Education",
      "program": "B.Ed Honors (1.5 Years)",
      "launchDate": null,
      "approvedIn": null
    }
  ],
  "paging": null,
  "hasErrors": false,
  "error": null
}
function* get_qec_ipe_1_report() {
  yield put(load_qec_ipe_1_report());
  //   const reports: IClientResponse = {
  //     hasErrors: false,
  //     result: {
  //       data: inboundInstructions,
  //       paging: {
  //         total: inboundInstructions.length,
  //         totalPages: Math.ceil(inboundInstructions.length / 10),
  //         pageNumber: 1,
  //         pageSize: 10,
  //       },
  //     },
  //     status: 200,
  //     statusText: "Successfull",
  //   };



  // call api service here
  let reports: IClientResponse = yield call(
    ReportApiService.get_qec_ipe_1_report
  );
  reports.result = qec_report
  console.log({ reports })
  if (!reports.hasErrors || true) {
    const response: IClientResponse = {
      hasErrors: false,
      result: {
        data: reports.result.result,
        paging: {
          total: reports.result.result ? reports.result.result.length : 0,
          totalPages: Math.ceil((reports.result.result ? reports.result.result.length : 0) / 10),
          pageNumber: 1,
          pageSize: 10,
        },
      },
      status: 200,
      statusText: "Successfull",
    }
    yield put(save_qec_ipe_1_report(response.result));
  }


}

function* filter_qec_ipe_1_report(action: {
  type: string;
  payload: IFilterPayload;
}) {
  console.log("payload::", action)
  yield put(load_qec_ipe_1_report());
  let data = store.getState().qEC_IPE_1_Report.data;
  if (action.payload.fromDate && action.payload.toDate) {
    var filterData = [] 
    data.forEach(
      (item: any) =>
        {
          var rv = true
          Object.entries(action.payload.keyword).filter(([key, value]) => {
            if (String(item[key].trim()) != String(action.payload.keyword[key].trim())) {
              rv = false
            }
          })
          rv==true && filterData.push(item)
        } 
    );
  }


  const reports: IClientResponse = {
    hasErrors: false,
    result: {
      data: filterData,
      paging: {
        total: data.length,
        totalPages: Math.ceil(data.length / 10),
        pageNumber: action.payload.pageNumber || 1,
        pageSize: 10,
      },
    },
    status: 200,
    statusText: "Successfull",
  };

  // call api service here
  console.log("dadasdsa",reports)
  if (!reports.hasErrors) {
    yield put(save_qec_ipe_1_report(reports.result));
  }
}

function* sort_qec_ipe_1_report(action: {
  type: string;
  payload: ISortPayload;
}) {
  debugger
  console.log("This is action: ", action)
  yield put(load_qec_ipe_1_report());
  let data = store.getState().qEC_IPE_1_Report.data;
}

export function* watch_get_qec_ipe_1_report() {
  yield takeEvery(
    ACTION_TYPES.QEC_IPE_1_REPORT.GET_QEC_IPE_1_REPORT,
    get_qec_ipe_1_report
  );
}

export function* watch_filter_qec_ipe_1_report() {
  yield takeEvery(
    ACTION_TYPES.QEC_IPE_1_REPORT.FILTER_QEC_IPE_1_REPORT,
    filter_qec_ipe_1_report
  );
}

export function* watch_sort_qec_ipe_1_report() {
  yield takeEvery(
    ACTION_TYPES.QEC_IPE_1_REPORT.SORT_QEC_IPE_1_REPORT,
    sort_qec_ipe_1_report
  )
}