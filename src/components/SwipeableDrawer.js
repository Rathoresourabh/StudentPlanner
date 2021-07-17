import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "BVUCOEP Ranking",
    imgPath:
      "https://bvucoepune.edu.in/wp-content/uploads/2018/05/BUVCOEP-WEB-BANNER-1.jpg",
  },
  {
    label: "Ranked Upon 100 Ranking",
    imgPath:
      "https://bvucoepune.edu.in/wp-content/uploads/2018/05/Home-Banners_1.jpg",
  },
  {
    label: "College Cultural Events",
    imgPath:
      "https://bvucoepune.edu.in/wp-content/uploads/2018/05/Home-Banners_4.jpg",
  },
  {
    label: "Events",
    imgPath:
      "https://bvucoepune.edu.in/wp-content/uploads/2018/05/Home-Banners_3.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    color: "#fff",
    backgroundColor: "#282c34",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  img: {
    height: 255,
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  footer: {
    background: "#46484d",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    color: "#fff",
  },
}));

function SwipeableDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        className={classes.footer}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1} style={{color:'#fff'}}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color:'#fff'}}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableDrawer;
