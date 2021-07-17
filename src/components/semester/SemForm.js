import React, { useState } from "react";
import swal from "sweetalert";

function SemForm() {
  const [semData, setSemData] = useState([]);

     const calculateSem = () => {
       if (values.prn_number === "" || values.prn_number === null) {
         swal({
           title: "",
           text: "Please fill PRN number to proceed",
           icon: "warning",
         });
       } else {
         let number = values.prn_number;
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

         console.log(semDataLocal);
       }
     };
    return (
      <div>
        <div className="form-main">
          {!showSubmitButton && (
            <p className="p-5">
              Please Enter your PRN number first and fill Semester wise marks
              accordingly.
            </p>
          )}
          <div className="row">
            <div className="col-md-12 prn_number">
              <input
                placeholder="Please enter you PRN number"
                name="prn_number"
                onChange={handleChange}
                value={values.prn_number}
                type="number"
              />
              <button className="proceed_prn" onClick={() => calculateSem()}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SemForm
