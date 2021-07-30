import React from "react";
import CourseCard from "./CourseCard";
import { CourseData } from "./CourseData";
import { Typography } from "@material-ui/core";

function CourseSuggestion() {
  return (
    <div>
          <Typography style={{ fontWeight: 900 }}>
            Welcome To Course Suggestion / YT channels /Blogs / Top Interview
            Questions
          </Typography>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "50px",
          display: "flex" ,
          flexWrap: "wrap"
        }}
      >
        {CourseData.map(function (items, index) {
          return <CourseCard items={items} key={index}   />;
        })}
      </div>
    </div>
  );
}

export default CourseSuggestion;
