import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

const states = [
  {
    name: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands",
  },
  {
    name: "Andhra Pradesh",
    label: "Andhra Pradesh",
  },
  {
    name: "Arunachal Pradesh",
    label: "Arunachal Pradesh",
  },
  {
    name: "Assam",
    label: "Assam",
  },
  {
    name: "Bihar",
    label: "Bihar",
  },
  {
    name: "Chandigarh",
    label: "Chandigarh",
  },
  {
    name: "Chhattisgarh",
    label: "Chhattisgarh",
  },
  {
    name: "Dadra and Nagar Haveli",
    label: "Dadra and Nagar Haveli",
  },
  {
    name: "Daman and Diu",
    label: "Daman and Diu",
  },
  {
    name: "Delhi",
    label: "Delhi",
  },
  {
    name: "Goa",
    label: "Goa",
  },
  {
    name: "Gujarat",
    label: "Gujarat",
  },
  {
    name: "Haryana",
    label: "Haryana",
  },
  {
    name: "Himachal Pradesh",
    label: "Himachal Pradesh",
  },
  {
    name: "Jammu and Kashmir",
    label: "Jammu and Kashmir",
  },
  {
    name: "Jharkhand",
    label: "Jharkhand",
  },
  {
    name: "Karnataka",
    label: "Karnataka",
  },
  {
    name: "Kerala",
    label: "Kerala",
  },
  {
    name: "Ladakh",
    label: "Ladakh",
  },
  {
    name: "Lakshadweep",
    label: "Lakshadweep",
  },
  {
    name: "Madhya Pradesh",
    label: "Madhya Pradesh",
  },
  {
    name: "Maharashtra",
    label: "Maharashtra",
  },
  {
    name: "Manipur",
    label: "Manipur",
  },
  {
    name: "Meghalaya",
    label: "Meghalaya",
  },
  {
    name: "Mizoram",
    label: "Mizoram",
  },
  {
    name: "Nagaland",
    label: "Nagaland",
  },
  {
    name: "Odisha",
    label: "Odisha",
  },
  {
    name: "Puducherry",
    label: "Puducherry",
  },
  {
    name: "Punjab",
    label: "Punjab",
  },
  {
    name: "Rajasthan",
    label: "Rajasthan",
  },
  {
    name: "Sikkim",
    label: "Sikkim",
  },
  {
    name: "Tamil Nadu",
    label: "Tamil Nadu",
  },
  {
    name: "Telangana",
    label: "Telangana",
  },
  {
    name: "Tripura",
    label: "Tripura",
  },
  {
    name: "Uttar Pradesh",
    label: "Uttar Pradesh",
  },
  {
    name: "Uttarakhand",
    label: "Uttarakhand",
  },
  {
    name: "West Bengal",
    label: "West Bengal",
  },
];

const AddProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    country: "INDIA",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile " />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
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
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddProfileDetails;
