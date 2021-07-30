import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { nanoid } from "nanoid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <h1>Add Your Notes ➕ </h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={content}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={{paddingLeft: "10px"}}>
            <Fab
              color="primary"
              aria-label="add"
              type="submit"
              style={{ backgroundColor: "#282c34", marginTop: "10px" }}
            >
              <AddIcon />
            </Fab>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
