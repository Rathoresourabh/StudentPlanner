import React from "react";
import { ListItem, ListItemText, Button, Card } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
  },
});
export default function ListTodo({ todos, deleteTodo }) {
  const classes = useStyles();
  if (!todos.length) {
    return (
      <div>
        <Alert
          variant="filled"
          severity="info"
          style={{
            display: "inline-block",
          }}
        >
          No todos found <SentimentVeryDissatisfiedIcon />
        </Alert>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ width: "90vw", maxWidth: "500px" }}>
        {todos.map((todo) => (
          <Card className={classes.root} style={{ marginTop: "30px" }}>
            <ListItem key={todo.id}>
              <ListItemText primary={todo.body} />
              <Button onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </Button>
            </ListItem>
          </Card>
        ))}
      </div>
    </div>
  );
}
