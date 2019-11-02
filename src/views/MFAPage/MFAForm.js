import React from "react";
// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter";
import {Link} from "react-router-dom";

export default class MFAForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            cardAnimaton: "cardHidden",
        };
        this.handleOTPChange = this.handleOTPChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOTPChange = event => {
        this.setState({ otp: event.target.value });
    };

    handleSubmit = () => {
        // TODO: Why did Jack add this line?
        //event.preventDefault();

        window.localStorage.setItem("isForgotPasswordFlow", "false");
        const user = {
            otp: this.state.otp,
            isOtpAccurate: ""
        };

        var targetUrl = window.localStorage.getItem("baseURL") + window.localStorage.getItem("userType") + '/mfa';
    
        fetch(targetUrl, {
            method : 'post',
            credentials: 'include',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body : JSON.stringify({
                otp : this.state.otp
            })
          }).then(res => {
            if(user.isOtpAccurate) {
                this.setState({successful: true})
            }
          }).catch(() => {
            this.setState({successful: true})
        })
    };

    render() {
        return (
            <form>
                <CardHeader color="primary">
                    <h4>Enter OTP</h4>
                </CardHeader>
                <CardBody>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                        <p style={{display: 'flex', justifyContent: 'center', margin: 0}}>
                            Submit the one time password code sent to your email</p>
                    </div>
                    <CustomInput
                        labelText="One time password"
                        id="otp"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "otp",
                            onChange: this.handleOTPChange,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icon>
                                        lock_outline
                                    </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                    />
                </CardBody>

                {this.state.otp != "" ? (
                    window.localStorage.getItem("isForgotPasswordFlow") == "true" ? (
                        <CardFooter style={{display: 'flex', justifyContent: 'center', margin: 0}}>
                            <Link to={"forgotpassword"}>
                                <Button color="primary" size="lg" onClick={this.handleSubmit}>
                                    Authenticate Account
                                </Button>
                            </Link>
                        </CardFooter>
                        ): (
                        <CardFooter style={{display: 'flex', justifyContent: 'center', margin: 0}}>
                            <Link to={'dashboard'}>
                                <Button color="primary" size="lg" onClick={this.handleSubmit}>
                                    Authenticate Account
                                </Button>
                            </Link>
                        </CardFooter>
                        )
                    ): (
                    <CardFooter style={{display: 'flex', justifyContent: 'center', margin: 0}}>
                        <Button color="primary" size="lg">
                            Authenticate Account
                        </Button>
                    </CardFooter>
                 )}

            </form>
        );
    }
}
