import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slide from "@material-ui/core/Slide";
// @material-ui/core components
// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import modalStyles from "assets/jss/material-kit-react/modalStyle.js";
import productStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Map from "views/Map/Map.js";
import SignedInHeaders from "views/SignedInHeader.js";
import { primaryColor } from "../../assets/jss/material-kit-react";
import StarRatings from 'react-star-ratings';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Logo2 from "../../assets/img/logo2.png";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useModalStyles = makeStyles(modalStyles);
const useProductStyles = makeStyles(productStyles);


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [profile, setProfile] = useState({});
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(5);
    const [modal, setModal] = React.useState(false);
    const modalClasses = useModalStyles();
    const productClasses = useProductStyles();
    const [value, setValue] = React.useState('1');
    const [addreview, setAddReview] = useState("")
    const [addreviewRating, setAddReviewRating] = useState();
    const [addreviewReview, setAddReviewReview] = useState();
    const [address, setAddress] = useState([]);

    // Profile pictures
    const MassimoRossi = require('../../assets/img/profilepic-02.png');
    const SamanthaJoson = require('../../assets/img/profilepic-06.png');
    const PrestonLannister = require('../../assets/img/profilepic-05.png');
    const JaimeMoore = require('../../assets/img/profilepic-03.png');
    const VivekBandaru = require('../../assets/img/profilepic-17.png');
    const KristenNash = require('../../assets/img/profilepic-01.png');

    const profiles = {
    'Massimo Rossi': MassimoRossi,
    'Samantha Joson': SamanthaJoson,
    'Preston Lannister': PrestonLannister,
    'Jaime Moore': JaimeMoore,
    'Vivek Bandaru': VivekBandaru,
    'Kristen Nash': KristenNash
  }

    const handleChange = event => {
        setValue(event.target.value);
    };

    function handleStarRatingChange(rating) {
        console.log(rating.rating)
        setValue(rating.rating.toString());
    }

    const doctorusername = window.location.href.split('/')[5]

    const handleLoad = (event) => {
        fetch(window.localStorage.getItem("baseURL") + window.localStorage.getItem("userType") + '/doctor/' + doctorusername, {
            method: 'post',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        }).then(response => response.json())
            .then(data => {
                address.push(data.address)
                setAddress(address)
                setProfile(data)
                setReviews(data.reviews)
                setRating(Math.round(data.totalrating * 10) / 10)
            })
    }
    useEffect(() => { handleLoad() }, {})

    const handleAddReview = (event) => {
        fetch(window.localStorage.getItem("baseURL") + window.localStorage.getItem("userType") + '/doctor/' + doctorusername + '/addreviews', {
            method: 'post',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                rating: value,
                review: event.review,
            })
        }).then(response => response.json())
            .then(data => {
                setAddReview(data.isReviewAdded)
            })
    }
    useEffect(() => { handleLoad() }, {addreview})

    const handleAddReviewRating = (event) => {
        setAddReviewRating(event.target.value)
    };

    const handleAddReviewReview = (event) => {
        setAddReviewReview(event.target.value)
    };

    const style = {
        bg: {
            background: 'linear-gradient(0deg, #e0e0e0 30%, #f5f5f5 90%)',
            color: 'black',
            borderRadius: 5
        },
        label:{
            fontSize: '18px',
            fontWeight: '425',
            marginTop: '30px',
            marginBottom: '-15px',
            color: '#904199'
        },
        space:{
            marginTop:'170px'
        },
        img:{
            marginLeft:'65px',
            marginTop: '20px'
        },
        title:{
            fontSize: '35px',
            fontWeight: '400',
        }
    };

    const Star = ({ willBeActive, isActive, style }) => {
        const fill = isActive ? '#fc6' : willBeActive ? '#ffdd99' : '#e3e3e3'
        return (
            <svg viewBox="0 0 19.481 19.481" width="36" height="36" style={style}>
                <path
                    fill={fill}
                    d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"
                />
            </svg>
        )
    }

    return (
        <div>
            <Header
                color="white"
                brand={ <img width="240" height="40" resizeMode="contain" src={Logo2} alt="Logo2" />}
                rightLinks={<SignedInHeaders />}
                fixed
                changeColorOnScroll={{
                    height: 0,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div style={style.bg}>
                    <div className={classes.container}>
                        <br></br>
                        <GridContainer justify="center">
                            <Link to={"/" + window.localStorage.getItem("userType") + "/dashboard"}>
                                <Button color="primary">My Dashboard</Button>
                            </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={"/patient/doctor/bookappointment/" + doctorusername}>
                                <Button color="primary">
                                    Book Appointment
                                </Button>
                            </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <Button color="primary" onClick={() => setModal(true)}>
                                    Leave a Review
                            </Button>
                                <Dialog
                                    modalClasses={{
                                        root: modalClasses.center,
                                        paper: modalClasses.modal
                                    }}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                    <DialogTitle
                                        id="classic-modal-slide-title"
                                        disableTypography
                                        className={modalClasses.modalHeader}>
                                        <IconButton
                                            className={modalClasses.modalCloseButton}
                                            key="close"
                                            aria-label="Close"
                                            color="inherit"
                                            onClick={() => setModal(false)}>
                                            <Close className={modalClasses.modalClose} />
                                        </IconButton>
                                        <h3 className={modalClasses.modalTitle}>Leave a Review</h3>
                                    </DialogTitle>
                                    <DialogContent
                                        id="modal-slide-description"
                                        className={modalClasses.modalBody}>
                                        <Rater total={5}
                                            onRate={handleStarRatingChange}
                                        >
                                            <Star style={{ transform: `scale(${style.x})` }} />
                                        </Rater>
                                        <CustomInput
                                            labelText="Please write your review here"
                                            id="medical-info"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: handleAddReviewReview,
                                                multiline: true,
                                                rows: 5,
                                            }} /> <br></br> <br></br>
                                        <div className={productClasses.section} style={{ padding: 0 }}>
                                            Thank you for taking the time to review.
                                </div> <br></br>
                                        <Button color="primary" onClick={() => { setModal(false); handleAddReview({ review: addreviewReview }); handleLoad(); }}>
                                            Submit Review
                                        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </GridContainer>
                        <br></br>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <Card>
                                    <CardHeader color="primary">
                                        <h2 className={classes.cardTitleWhite} align = "center" style={style.title}>{profile.name}</h2>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <img align="left" width="170" height="170" resizeMode="contain" src={profiles[profile.name]} alt="Profile1" style={style.img}/>
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12} style={style.space}> &nbsp; </GridItem>

                                                <GridItem xs={12} sm={12} md={12}>
                                                    <InputLabel style={style.label}>Education</InputLabel>
                                                    <CustomInput
                                                        id="education"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            disabled: true,
                                                            placeholder: profile.education
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <InputLabel style={style.label}>Hospital</InputLabel>
                                                    <CustomInput
                                                        id="hospital"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            disabled: true,
                                                            placeholder: profile.hospital
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <InputLabel style={style.label}>Specialization</InputLabel>
                                                    <CustomInput
                                                        id="specialization"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            disabled: true,
                                                            placeholder: profile.specialization
                                                        }}
                                                    />
                                                </GridItem>
                                            </GridItem>
                                            <GridItem xs={6} sm={6} md={6}>
                                                {address.length > 0 ? (
                                                    <Map locations={address} zoom={8} />
                                                ) : (
                                                    <p />
                                                )}
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <InputLabel style={style.label}>Address</InputLabel>
                                                <CustomInput
                                                    id="address"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true,
                                                        placeholder: profile.address
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <InputLabel style={style.label}>Contact Number</InputLabel>
                                                <CustomInput
                                                    id="phone-number"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true,
                                                        placeholder: profile.phonenumber
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <InputLabel style={style.label}>About Me</InputLabel>
                                                <CustomInput
                                                    id="doctor-bio"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        multiline: true,
                                                        rows: 5,
                                                        disabled: true,
                                                        placeholder: profile.biosummary
                                                    }}
                                                />
                                            </GridItem>
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <Card>
                                            <CardHeader color="primary">
                                                <h4 className={classes.cardTitleWhite}>Average Rating: <StarRatings
                                                    rating={rating}
                                                    starDimension="30px"
                                                    starSpacing="7px"
                                                    starRatedColor="orange"
                                                /></h4>
                                            </CardHeader>
                                            <CardBody style={{ background: "#F8F8F8", width: "45.5rem", borderColor: "primary" }}>
                                                {reviews.map((item, index) => (<Card style={{ borderColor: "primary" }}>
                                                    <CardBody>
                                                        <StarRatings
                                                            rating={item.rating}
                                                            starDimension="20px"
                                                            starSpacing="5px"
                                                            starRatedColor="orange"
                                                        />
                                                        <p>{item.review}</p>
                                                    </CardBody>
                                                </Card>))}
                                            </CardBody>
                                        </Card>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                        <br></br><br></br>
                    </div>
                </div>
            </div>
        </div>
    );
}