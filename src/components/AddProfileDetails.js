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
  let empty = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    country: "INDIA",
    Sem1Marks : "",
    Sem2Marks : "",
    Sem3Marks : "",
    Sem4Marks : "",
    Sem5Marks : "",
    Sem6Marks : "",
    Sem7Marks : "",
    Sem8Marks : "",
    Sem9Marks : "",
    Sem10Marks : "",
  }
  
  let semMarks = [
    {
      name: "Sem1Marks",
      title : "Sem-1 Marks",
  
    },
    
    {
      name : "Sem2Marks",
      title: "Sem-2 Marks",
  
    } ,
    {
      name : "Sem3Marks",
      title: "Sem-3 Marks",
  
    } ,{
      name : "Sem4Marks",
      title: "Sem-4 Marks",
  
    } ,{
      name : "Sem5Marks",
      title: "Sem-5 Marks",
  
    } ,{
      name : "Sem6Marks",
      title: "Sem-6 Marks",
  
    } ,{
      name : "Sem7Marks",
      title: "Sem-7 Marks",
  
    } ,{
      name : "Sem8Marks",
      title: "Sem-8 Marks",
  
    } ,
    
  
  ]
  const [values, setValues] = useState(empty);

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
            {semMarks.map(function(item,idx){
              return(
                <Grid  key = {idx} item md={6} xs={12}>
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
              )
            })}
            
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

        <br></br>
        <Box
          sx={{
          display: "flex",
          justifyContent: "flex-end",
          allignContent: "right",
          p: 4,
          }}
        >
          <Button color="primary" variant="contained" onClick ={function(){
            setValues(empty);
          }}>
            Reset
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddProfileDetails;
