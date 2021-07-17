import React ,{useState} from 'react';
import swal from "sweetalert";
import SemTable from "../components/semester/SemTable";
import {SemWiseSubjects} from "../components/Data/SemWiseSubjects";

function Results() {
    const [semData, setSemData] = useState([]);
    const [, setNumberOfSem] = useState(0);
    const [prn, setPrn] = useState("");

    const calculateSem = () => {
      if (prn === "" || prn === null) {
        swal({
          title: "",
          text: "Please fill PRN number to proceed",
          icon: "warning",
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

    const submitResults = () => {}

    
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
              {semData.map((items, index) => {
                return <SemTable items={items} key={index} />;
              })}
              <div className="d-flex justify-content-end">
                <button
                  className="primary-btn my-5"
                  onClick={() => submitResults()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Results
