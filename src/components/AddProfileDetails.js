import {  useState , useContext  } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { states } from "./Data/StateData";
import { SemMarks } from "./Data/SemMarks";
import { useHistory } from "react-router";
import axios from "axios";
import { useSnackbar } from "notistack";
import {UserContext} from "../App"

function AddProfileDetails() {
  let { enqueueSnackbar } = useSnackbar();
  let empty = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    country: "INDIA",
    Sem1Marks: "",
    Sem2Marks: "",
    Sem3Marks: "",
    Sem4Marks: "",
    Sem5Marks: "",
    Sem6Marks: "",
    Sem7Marks: "",
    Sem8Marks: "",
  };
  const [values, setValues] = useState(empty);
  const history = useHistory();
  let { userData ,setUserData } = useContext(UserContext);
  

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form autoComplete="on" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile "
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                // className={classes.textField}
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            {SemMarks.map(function (item, idx) {
              return (
                <Grid key={idx} item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label={item.title}
                    name={item.name}
                    onChange={handleChange}
                    required
                    value={values[item.name]}
                    variant="outlined"
                  />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            // disabled={!values}
            onClick={function () {
              axios
                .post("http://localhost:5000/submit", values)
                .then((response) => {
                  let copy = {...userData}
                  copy.userByEmail = response.data.email
                  setUserData(copy)


                  
                  console.log("Success", response);
                  enqueueSnackbar("Success");
                  setValues(empty);
                  history.push("/profile");
                })
                .catch((error) => {
                  console.log("Error", error);
                });
                
            }}
          >
            Submit
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={function () {
              setValues(empty);
            }}
          >
            Reset
          </Button>
        </div>
      </Card>
    </form>
  );
}

export default AddProfileDetails;
