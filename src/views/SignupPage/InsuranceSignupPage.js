import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import InsuranceSignupForm from "views/SignupPage/InsuranceSignupForm.js";

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useLoginStyles = makeStyles(loginStyles);

export default function InsuranceSignupPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const loginClasses = useLoginStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="white"
        brand="InfinityCare"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={loginClasses.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={loginClasses.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={loginClasses[cardAnimaton]}>
                <InsuranceSignupForm />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}