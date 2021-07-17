import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable({ items }) {
  const classes = useStyles();
  const [semData,setSemData] = useState(items)

  const handleChange = (e,subjectName) => {
    let updated = {...semData}
    console.log(e.target.value , e.target.name)
    updated.subjects.forEach(subject => {
      if(subject.subjectName === subjectName){
        subject[e.target.name] = e.target.value;
      }
    })
    setSemData(updated);
  }


  return (
    <div className="mt-5">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ background: "rgb(40, 44, 52)" }}>
            <TableRow>
              <TableCell className="text-white">
                Subject Name (Semester {items.semName})
              </TableCell>
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
            {semData.subjects.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ textTransform: "capitalize" }}
                >
                  {item.subjectName}
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.creditValue}
                    name="creditValue"
                    placeholder="Credit"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.UE}
                    name="UE"
                    placeholder="UE"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.IA}
                    name="IA"
                    placeholder="IA"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.TW_P}
                    name="TW_P"
                    placeholder="TW_P"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.TW_O}
                    name="TW_O"
                    placeholder="TW_O"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    value={item.GP}
                    name="GP"
                    placeholder="GP"
                    onChange={(e) => handleChange(e,item.subjectName)}
                    required
                    className="semInput"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
