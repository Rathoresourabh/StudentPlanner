import React, { useState, useContext, useEffect } from "react";
import swal from "sweetalert";
import SemTable from "../components/semester/SemTable";
import { SemWiseSubjects } from "../components/Data/SemWiseSubjects";
import { useHistory } from "react-router-dom";

import resultImg from "../assets/images/result.png";
import { UserContext } from "../App";
import axios from "axios";

function Results() {
  const [semData, setSemData] = useState([]);
  const [dataPresentInApi, setDataPresentInApi] = useState(false);
  const [, setNumberOfSem] = useState(0);
  const [prn, setPrn] = useState(localStorage.getItem("prn") || "");
  const history = useHistory();
  let { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getSemMarks/${user.email}`)
      .then((response) => {
        if (response.data[0].SemWiseSubjects) {
          setSemData(response.data[0].SemWiseSubjects);
          calculateSem();
          setDataPresentInApi(true);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const calculateSem = () => {
    if (prn === "" || prn === null) {
      swal({
        title: "",
        text: "Please fill PRN number to proceed",
        icon: "warning",
      }).then((status) => {
        history.push("/charts");
      });
    } else {
      let number = prn;
      let year = number.substring(0, 2);
      year = +year + 2000;
      let date = new Date();
      let currentYear = date.getFullYear();
      let sem_numbers = (currentYear - year) * 2;
      setNumberOfSem(sem_numbers);

      let semDataLocal = [];
      SemWiseSubjects.forEach((sem, index) => {
        if (index < sem_numbers) {
          semDataLocal.push(sem);
        }
      });
      setSemData(semDataLocal);
    }
  };

  const submitResults = () => {
    axios
      .post(`http://localhost:5000/submitSemMarks`, {
        SemWiseSubjects: semData,
        email: user.email,
      })
      .then((response) => {
        localStorage.setItem("semData", JSON.stringify(semData));
        localStorage.setItem("prn", prn);
        swal({
          title: "",
          text: "Data submitted successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const updateResults = () => {
    console.log(semData);
    axios
      .post(`http://localhost:5000/updateSemMarks/${user.email}`, {
        SemWiseSubjects: semData,
        email: user.email,
      })
      .then((response) => {
        localStorage.setItem("semData", JSON.stringify(semData));
        localStorage.setItem("prn", prn);
        swal({
          title: "",
          text: "Data submitted successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleSemDataChange = (e) => {
    let localSem = [...semData];
    console.log(localSem);
    localSem.forEach((sem) => {
      if (sem.semName === e.semName) {
        sem.subjects = e.subjects;
        sem.SGPA = e.SGPA;
      }
    });
    setSemData(localSem);
  };

  return (
    <div className="container mt-4">
      <h2>Please Enter your PRN to enter marks</h2>
      <div className="form-main">
        <div className="row">
          <div className="col-md-12 prn_number">
            <input
              placeholder="Please enter you PRN number"
              name="prn_number"
              onChange={(e) => setPrn(e.target.value)}
              value={prn}
              type="number"
            />
            <button className="proceed_prn" onClick={() => calculateSem()}>
              Proceed
            </button>
            {semData && semData.length > 0 ? <p className="my-3 text-danger">*Please fill all the details carefully.</p>:""}
            {semData && semData.length > 0 ? (
              semData.map((items, index) => {
                return (
                  <SemTable
                    items={items}
                    key={index}
                    passItems={(e) => handleSemDataChange(e)}
                  />
                );
              })
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <img src={resultImg} style={{maxWidth:600}}/>
              </div>
            )}
            <div className="d-flex justify-content-end">
              {semData.length > 0 ? (
                dataPresentInApi ? (
                  <button
                    className="primary-btn my-5"
                    onClick={() => updateResults()}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="primary-btn my-5"
                    onClick={() => submitResults()}
                  >
                    Submit
                  </button>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
