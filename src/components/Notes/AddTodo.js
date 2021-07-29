import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { nanoid } from "nanoid";

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
        }}
      >
        <h1>Add Your Todo ➕</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={content}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"

            // style={{ display: "none" }}
          >
            Add To do
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;