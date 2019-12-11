import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import SignedInHeaders from "views/SignedInHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/img/logo2.png";

const useStyles = makeStyles(styles);

export default function SurveyResults(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [approvedBills, setApprovedBills] = useState([
        {mPatientName: "patient 1", mReason: "reason 1", mAmountToBePaid: "amount 1", mPatientUsername: "link 1", mDoctorName: "doctor 1"},
        {mPatientName: "patient 2", mReason: "reason 2", mAmountToBePaid: "amount 2", mPatientUsername: "link 2", mDoctorName: "doctor 2"},
        {mPatientName: "patient 3", mReason: "reason 3", mAmountToBePaid: "amount 3", mPatientUsername: "link 3", mDoctorName: "doctor 3"},
        {mPatientName: "patient 4", mReason: "reason 4", mAmountToBePaid: "amount 4", mPatientUsername: "link 4", mDoctorName: "doctor 4"},
        {mPatientName: "patient 5", mReason: "reason 5", mAmountToBePaid: "amount 5", mPatientUsername: "link 5", mDoctorName: "doctor 5"}
    ]);

    const [deniedBills, setDeniedBills] = useState([
        {mPatientName: "patient 1", mReason: "reason 1", mAmountToBePaid: "amount 1", mPatientUsername: "link 1", mDoctorName: "doctor 1"},
        {mPatientName: "patient 2", mReason: "reason 2", mAmountToBePaid: "amount 2", mPatientUsername: "link 2", mDoctorName: "doctor 2"},
        {mPatientName: "patient 3", mReason: "reason 3", mAmountToBePaid: "amount 3", mPatientUsername: "link 3", mDoctorName: "doctor 3"},
        {mPatientName: "patient 4", mReason: "reason 4", mAmountToBePaid: "amount 4", mPatientUsername: "link 4", mDoctorName: "doctor 4"},
        {mPatientName: "patient 5", mReason: "reason 5", mAmountToBePaid: "amount 5", mPatientUsername: "link 5", mDoctorName: "doctor 5"}
    ]);

    const handleLoad = () => {
        fetch(window.localStorage.getItem("baseURL") + 'insurance/claims', {
            method: 'post',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                // setApprovedBills(data.approvedBills);
                // setDeniedBills(data.deniedBills);
            })
    }
    useEffect(() => { handleLoad() }, {})

    const style = {
        chatBtn: {
            color: 'white',
            textTransform: 'initial',
            fontSize: 'small',
            marginTop: '20px',
            marginLeft: '-40px',
            width: '220px'
        },
        selectBtn: {
            color: 'white',
            textTransform: 'initial',
            fontSize: 'small',
            marginTop: '20px',
            width: '190px'
        },
        viewBtn: {
            color: 'white',
            textTransform: 'initial',
            fontSize: 'small',
            marginTop: '20px',
            marginLeft: '-38px',
            width: '190px'
        },
        bg: {
            background: 'linear-gradient(0deg, #e0e0e0 30%, #f5f5f5 90%)',
            color: 'black',
            borderRadius: 5
        },
        altTextColor: {
            color: '#904199',
            marginTop: '-5px',
            marginBottom: '15px'
        },
        suggestedPlan: {
            background: '#f9dbff',
            borderRadius: 5
        },
        bold: {
            fontWeight: 'bolder'
        }
    };

    return (
        <div>
            <Header
                color="white"
                brand={<img width="240" height="40" resizeMode="contain" src={Logo2} alt="Logo2" />}
                rightLinks={<SignedInHeaders />}
                fixed
                changeColorOnScroll={{
                    height: 0,
                    color: "white"
                }}
                {...rest} />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)} color={"info"}>
                <div style={style.bg}>
                    <div className={classes.container}>
                        <GridContainer justify="space-around" direction="row" color={"info"}>
                            <GridItem xs={10} sm={10} md={10} lg={10} color={"info"}>
                                <GridContainer color={"info"} justify="center">
                                    <GridItem xs={15} sm={15} md={15}>
                                        <br />
                                        <GridContainer justify="center">
                                            <Link to="/insurance/dashboard">
                                                <Button
                                                    color="primary"
                                                >My Dashboard</Button>
                                            </Link>
                                        </GridContainer>
                                        <GridContainer justify="center">
                                            <GridItem align="center">
                                            <h2><b>Distribution of Claims</b></h2>
                                            </GridItem>
                                            <GridItem align="center">
                                                <h3><b>Number of Claims Approved: </b>{approvedBills.length}</h3>
                                                <h3><b>Number of Claims Denied: </b>{deniedBills.length}</h3>
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer justify="center">
                                        {approvedBills.map((item, index) => (
                                        <Card style={{ width: "40rem", borderColor: "primary" }}>
                                            <CardBody>
                                                <GridContainer>
                                                <GridItem xs={12} sm={12} md={6}>
                                                <h3 className={classes.cardTitle}><b>{item.mPatientName}</b></h3>
                                                </GridItem>
                                                <GridItem align="right" xs={5} sm={5} md={1}>
                                                <Link to= {"/insurance/patient/" + btoa(item.mPatientUsername)}> 
                                                    <Button color="primary" align="right">
                                                        View Patient
                                                    </Button>
                                                </Link>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6} align="left">
                                                    <h4><b>Doctor: </b>{item.mDoctorName}</h4>
                                                    <h4><b>Reason for visit: </b>{item.mReason}</h4>
                                                    
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6} align="right">
                                                    <h4><b>Amount for visit: </b>{item.mAmountToBePaid}</h4>
                                                    <h4 style={style.altTextColor}><b>Claim Status: </b>APPROVED</h4>
                                                </GridItem>
                                                </GridContainer>
                                            </CardBody>
                                        </Card>))}
                                        {deniedBills.map((item, index) => (
                                        <Card style={{ width: "40rem", borderColor: "primary" }}>
                                            <CardBody>
                                                <GridContainer>
                                                <GridItem xs={12} sm={12} md={6}>
                                                <h3 className={classes.cardTitle}><b>{item.mPatientName}</b></h3>
                                                </GridItem>
                                                <GridItem align="right" xs={5} sm={5} md={1}>
                                                <Link to= {"/insurance/patient/" + btoa(item.mPatientUsername)}> 
                                                    <Button color="primary" align="right">
                                                        View Patient
                                                    </Button>
                                                </Link>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6} align="left">
                                                    <h4><b>Doctor: </b>{item.mDoctorName}</h4>
                                                    <h4><b>Reason for visit: </b>{item.mReason}</h4>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6} align="right">
                                                    <h4><b>Amount for vist: </b>{item.mAmountToBePaid}</h4>
                                                    <h4 style={style.altTextColor}><b>Claim Status: </b>DENIED</h4>
                                                </GridItem>
                                                </GridContainer>
                                            </CardBody>
                                        </Card>))}
                                        </GridContainer>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                        <br />
                    </div>
                </div>
            </div>
        </div >
    );
}
