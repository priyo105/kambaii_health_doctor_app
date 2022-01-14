import React, {Component} from 'react';

const baseUrl = 'https://dev.kambaiihealth.com/api/';
class ApiUrls extends Component {
  loginurl = baseUrl + 'login';
  registrationUrl=baseUrl + 'register';
  external_schedule=baseUrl + 'external-schedule?schedule_type=previous';
  medicineApiUrl=baseUrl+"view_medicines?";
  labReportUrl=baseUrl+"test_list?";
  patientListUrl=baseUrl+"external-patient";
  existingMedicineList=baseUrl+"existing-medicine-list";
  medicalHistory=baseUrl+"MedicalHistory_view_for_app";
  pcpvisit=baseUrl+"visit-summary";
  forgot_password=baseUrl+"forgot_password";
  sendOtp=baseUrl+"match_mobile_number";
  prescription_view_for_app=baseUrl+"prescription_view_for_app";
  all_labTest=baseUrl+"all_lab_test_list";
}

const b = new ApiUrls();
export default b;
