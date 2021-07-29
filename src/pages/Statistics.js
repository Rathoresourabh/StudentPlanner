import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Bar,Pie } from "react-chartjs-2";
import axios from "axios";
import SwipeableDrawer  from "../components/SwipeableDrawer";

function Charts() {
  let { user } = useContext(UserContext);
  const [personal, setPersonal] = useState({});
  const [semData, setSemData] = useState([]);
  const [modalContent, setModalContent] = useState({});
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getSemMarks/${user.email}`)
      .then((response) => {
        setSemData(response.data[0].SemWiseSubjects);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserData/email/${user.email}`)
      .then((response) => {
        setPersonal(response.data[0]);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [user.email]);

  console.log(modalContent);

  return (
    <div className="container p-2">
      {/* <button className="secondary-btn" onClick = {function() {
            history.push('/')
        }}>
            Go Back
        </button> */}
      <h2 style={{ letterSpacing: "2px" }}>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-9">
          <div className="row">
            {semData &&
              semData.map((sem, index) => {
                return (
                  <div className="col-md-4">
                    <div
                      className={
                        index % 2 === 0
                          ? index === 2
                            ? "card p-4 bg-secondary text-white m-2"
                            : "card p-4 bg-dark text-white m-2"
                          : "card p-4 bg-info text-white m-2"
                      }
                      style={
                        index % 2 === 0
                          ? { background: "rgb(40, 44, 52)", cursor: "pointer" }
                          : { cursor: "pointer" }
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setModalContent(sem)}
                    >
                      <div className="card-title">Semester {sem.semName}</div>
                      <div className="title-text">SGPA {sem.SGPA}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row">
            <div className="col-md-12" style={{ maxHeight: "500px" }}>
              <Bar
                style={{ height: "100%" }}
                data={{
                  labels: semData.map((data) => "Sem " + data.semName),
                  datasets: [
                    {
                      label: "SGPA",
                      data: semData.map((data) => data.SGPA),
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                      ],
                      borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                width={"100px"}
                height={"100px"}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center text-white p-3 custom-card">
            <div className="card-avatar">
              <img src={user.photoURL} alt="" />
            </div>
            <div className="card-title py-2 text-white">
              <h4>{user.displayName}</h4>
            </div>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between customli">
                <span>Email</span>
                <span>{personal.email}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span>Phone Number-</span>
                <span>{personal.phone}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span>Father's Name- </span>
                <span>{personal.FatherName}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span> Mother's Name-</span>
                <span> {personal.MotherName}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                Address- {personal.Address}
              </li>

              <li class="list-group-item d-flex justify-content-between customli">
                <span>Father's Contact - </span>
                <span>{personal.FatherPhone}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span>Division- </span>
                <span>{personal.Division}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span>RollNo- </span>
                <span>{personal.RollNo}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between customli">
                <span>PRN- </span>
                <span>{personal.PRN}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Semester {modalContent.semName}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{maxHeight:'500px',overflow:'scroll'}}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead style={{ background: "rgb(40, 44, 52)" }}>
                    <TableRow>
                      <TableCell className="text-white">Subject Name</TableCell>
                      <TableCell className="text-white" align="center">
                        CreditValue
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        UE
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        IA
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        TW_P
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        TW_O
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        GP
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {modalContent.subjects &&
                      modalContent?.subjects.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ textTransform: "capitalize" }}
                          >
                            {item.subjectName}
                          </TableCell>
                          <TableCell align="center">
                            {item.creditValue}
                          </TableCell>
                          <TableCell align="center">{item.UE}</TableCell>
                          <TableCell align="center">{item.IA}</TableCell>
                          <TableCell align="center">{item.TW_P}</TableCell>
                          <TableCell align="center">{item.TW_O}</TableCell>
                          <TableCell align="center">{item.GP}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div style={{ margin:20 }}>
                {modalContent.semName ? (
                  <Pie
                    style={{ height: "100%" }}
                    data={{
                      labels: modalContent.subjects.map(
                        (data) => data.subjectName
                      ),
                      datasets: [
                        {
                          label: "GP",
                          data: modalContent.subjects.map((data) => data.GP),
                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(201, 203, 207, 0.2)",
                          ],
                          borderColor: [
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(255, 205, 86)",
                            "rgb(75, 192, 192)",
                            "rgb(54, 162, 235)",
                            "rgb(153, 102, 255)",
                            "rgb(201, 203, 207)",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    width={"100px"}
                    height={"100px"}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}

            
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Charts;
