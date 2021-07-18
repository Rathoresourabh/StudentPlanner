import { useState, useEffect, useContext } from "react";
import { states } from "./Data/StateData";
import { Branch } from "./Data/Branch";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import axios from "axios";
import { useSnackbar } from "notistack";
import { UserContext } from "../App";

function AddProfileDetails() {
  let { enqueueSnackbar } = useSnackbar();
  let { user } = useContext(UserContext);
  let empty = {
    firstName: "",
    lastName: "",
    email: user.email,
    phone: "",
    state: "",
    country: "INDIA",
    FatherName: "",
    MotherName: "",
    Address: "",
    PermanentAddress: "",
    FathersOccupation: "",
    MothersOccupation: "",
    FatherPhone: "",
    FatherEmail: "",
    MotherPhone: "",
    BloodGroup: "",
    prn_number: "",
    Division: "",
    RollNo: "",
    PRN: "",
  };
  const [values, setValues] = useState(empty);
  const [currentPage, setCurrentPage] = useState("one");
  const [setShowSubmitButton] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserData/email/${user.email}`)
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          setValues(response.data[0]);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [user.email]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage("two");
  };

  return (
    <div>
      {currentPage === "one" ? (
        <form autoComplete="on" onSubmit={handleSubmit}>
          <div className="form-main">
            <div className="row">
              <div className="col-md-6">
                <input
                  placeholder="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={user.email}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </div>

              <div className="col-md-6">
                <select
                  placeholder="Select State"
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
                </select>
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Father's Name"
                  name="FatherName"
                  onChange={handleChange}
                  required
                  value={values.FatherName}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Mother's Name"
                  name="MotherName"
                  onChange={handleChange}
                  required
                  value={values.MotherName}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Current Address"
                  name="Address"
                  onChange={handleChange}
                  required
                  value={values.Address}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Permanent Address"
                  name="PermanentAddress"
                  onChange={handleChange}
                  required
                  value={values.PermanentAddress}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Father's Occupation"
                  name="FathersOccupation"
                  onChange={handleChange}
                  required
                  value={values.FathersOccupation}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Mother's Occupation"
                  name="MothersOccupation"
                  onChange={handleChange}
                  required
                  value={values.MothersOccupation}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Father's Contact Number"
                  name="FatherPhone"
                  type="number"
                  onChange={handleChange}
                  required
                  value={values.FatherPhone}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Mother's Contact No."
                  name="MotherPhone"
                  type="number"
                  onChange={handleChange}
                  required
                  value={values.MotherPhone}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Father's Email Address"
                  name="FatherEmail"
                  onChange={handleChange}
                  required
                  value={values.FatherEmail}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Blood Group"
                  name="BloodGroup"
                  onChange={handleChange}
                  required
                  value={values.BloodGroup}
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="button-form-footer">
            <button className="btn  secondary-btn" type="submit">
              {" "}
              Next
            </button>
          </div>
        </form>
      ) : (
        //college details second page
        <div>
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div
              className="back-btn"
              onClick={() => {
                setCurrentPage("one");
                setShowSubmitButton(false);
              }}
            >
              <KeyboardBackspaceIcon />
            </div>
            <h3 className="p-4 mb-5">College Details</h3>
            <div className="form-main">
              <div className="row">
                <div className="col-md-6">
                  <select
                    placeholder="Select State"
                    name="state"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.Branch}
                    variant="outlined"
                  >
                    {Branch.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Division if any"
                    name="Division"
                    onChange={handleChange}
                    value={values.Division}
                    variant="outlined"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Enter Your Roll no."
                    name="RollNo"
                    required
                    onChange={handleChange}
                    value={values.RollNo}
                    variant="outlined"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Enter Your PRN"
                    name="PRN"
                    required
                    onChange={handleChange}
                    value={values.PRN}
                    variant="outlined"
                  />
                </div>
              </div>
            </div>

            <div className="button-form-footer">
              <button
                className="btn  secondary-btn"
                // disabled={!values}
                onClick={function () {
                  axios
                    .post("http://localhost:5000/submit", values)
                    .then((response) => {
                      console.log("Success", response);
                      enqueueSnackbar("Success");
                      // history.push("/profile");
                    })
                    .catch((error) => {
                      console.log("Error", error);
                    });

                  localStorage.setItem("prn", values.PRN);
                }}
              >
                Submit
              </button>
              {/* <Button
                  color="primary"
                  variant="contained"
                  onClick={function () {
                    setValues(empty);
                  }}
                >
                  Reset
                </Button> */}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddProfileDetails;
