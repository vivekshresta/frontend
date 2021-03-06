import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Login from "views/LoginPage/LoginPage.js";
import DoctorSignup from "views/SignupPage/DoctorSignupPage.js";
import InsuranceSignup from "views/SignupPage/InsuranceSignupPage.js";
import PatientSignup from "views/SignupPage/PatientSignupPage.js";
import DoctorDashboard from "views/Dashboards/DoctorDashboard";
import InsuranceDashboard from "views/Dashboards/InsuranceDashboard";
import PatientDashboard from "views/Dashboards/PatientDashboard";
import MFAPage from "./views/MFAPage/MFAPage";
import EnterEmail from "./views/ForgotPassword/EnterEmailPage";
import ForgotPassword from "./views/ForgotPassword/ForgotPasswordPage";
import PatientViewOfDoctor from "./views/Dashboards/PatientViewOfDoctor";
import DoctorViewOfPatient from "./views/Dashboards/DoctorViewOfPatient";
import ReviewDoctor from "./views/ReviewDoctor/ReviewDoctorPage";
import BookAppointment from "views/BookAppointment/BookAppointment.js";
import PatientViewOfIP from "./views/Dashboards/PatientViewOfIP";
import ValidateUser from "./views/ValidateUser/ValidateUserPage.js";
import DoctorProfilePage from "./views/UserProfilePages/DoctorProfilePage";
import InsuranceProfilePage from "./views/UserProfilePages/InsuranceProfilePage";
import PatientProfilePage from "./views/UserProfilePages/PatientProfilePage";
import SearchPage from "./views/Search/SearchPage";
import App from './views/Chat/App';

import './views/Chat/chat.css';
import * as serviceWorker from './views/Chat/serviceWorker';
import DoctorAndIPViewOfDoctor from "./views/Dashboards/DoctorAndIPViewOfDoctor";
import PatientMedicalDetailsPage from "./views/UserProfilePages/PatientMedicalDetailsPage";
import Survey from "./views/Recommendations/Survey";
import SurveyResults from "./views/Recommendations/SurveyResults";
import PatientDashboardTest from "views/Dashboards/PatientDashboardTest";
import ViewPlan from "./views/Recommendations/ViewPlan";
import ClaimPage from "./views/UserProfilePages/InsuranceClaimedPage";
import PaymentHistory from "./views/UserProfilePages/PatientPaidBills";
import PatientClaimsPage from "./views/UserProfilePages/PatientClaimsPage";

serviceWorker.unregister();

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/patient/doctor/bookappointment/:doctorID" exact component={BookAppointment} />
        <Route path="/components" component={Components} />

        <Route path="/:userType/forgotpassword" exact component={ForgotPassword}/>
        <Route path="/:userType/forgotpassword/email" exact component={EnterEmail}/>

        <Route path="/:userType/validateuser" component={ValidateUser}/>

        <Route path="/doctor/signup" component={DoctorSignup}/>
        <Route path="/insurance/signup" exact component={InsuranceSignup}/>
        <Route path="/patient/signup" exact component={PatientSignup}/>

        <Route path="/:userType/mfa" exact component={MFAPage}/>

        <Route path="/doctor/signin" exact component={Login}/>
        <Route path="/patient/signin" exact component={Login}/>
        <Route path="/insurance/signin" exact component={Login}/>

        <Route path="/insurance/dashboard" exact component={InsuranceDashboard} />
        <Route path="/patient/dashboard" exact component={PatientDashboard} />
        <Route path="/doctor/dashboard" exact component={DoctorDashboard} />

        <Route path="/patient/doctor/:doctorID" exact component={PatientViewOfDoctor} />
        <Route path="/patient/insurance/:insuranceID" exact component={PatientViewOfIP} />
        <Route path="/patient/doctor/:doctorID/review" exact component={ReviewDoctor} />

        <Route path="/doctor/patient/:patientID" exact component={DoctorViewOfPatient} />
        <Route path="/doctor/doctor/:doctorID" exact component={DoctorAndIPViewOfDoctor} />
        <Route path="/doctor/insurance/:insuranceID" exact component={PatientViewOfIP} />

        <Route path="/insurance/doctor/:doctorID" exact component={DoctorAndIPViewOfDoctor} />
        <Route path="/insurance/patient/:patientID" exact component={DoctorViewOfPatient} />
        <Route path="/insurance/insurance/:insuranceID" exact component={PatientViewOfIP} />
        <Route path="/insurance/claimshistory" exact component={ClaimPage}/>

        <Route path="/doctor/profile" exact component={DoctorProfilePage}/>
        <Route path="/patient/profile" exact component={PatientProfilePage}/>
        <Route path="/patient/medicalhistory" exact component={PatientMedicalDetailsPage}/>
        <Route path="/patient/paymenthistory" exact component={PaymentHistory}/>
        <Route path="/patient/claimshistory" exact component={PatientClaimsPage}/>
        <Route path="/insurance/profile" exact component={InsuranceProfilePage}/>

        <Route path="/dashboard1" exact component={InsuranceDashboard} />
        <Route path="/dashboard2" exact component={PatientDashboard} />
        <Route path="/dashboard3" exact component={DoctorDashboard} />
        <Route path="/dashboardpd" exact component={PatientViewOfDoctor} />
        <Route path="/dashboardrd" exact component={ReviewDoctor} />
        <Route path="/dashboarddp" exact component={DoctorViewOfPatient} />
        <Route path="/patient/bookappointment" exact component={BookAppointment} />

        <Route path="/search" exact component={SearchPage} />
        <Route path="/patient/survey" exact component={Survey} />
        <Route path="/patient/survey/results" exact component={SurveyResults} />
        <Route path="/patient/survey/results/viewplan" exact component={ViewPlan} />

        <Route path="/chat/:patientID/:doctorID" exact component={App}/>
        <Route path="/chat/:doctorID" exact component={App}/>
        <Route path="/chat/:doctorID/:patientID" exact component={App}/>
        <Route path="/chat/:insuranceID" exact component={App}/>
        <Route path="/chat/:insuranceID/:patientID" exact component={App}/>

        <Route path="/dashboardtest" exact component={PatientDashboardTest} />

        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>,
    document.getElementById("root")
);

