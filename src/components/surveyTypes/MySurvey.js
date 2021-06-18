import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import json from "../surveys/questions";

const MySurvey = ({ showCompletedPage }) => {
  return (
    <>
      <Survey.Survey
        showCompletedPage={false}
        onComplete={showCompletedPage}
        // onComplete={data=>console.log(data.valuesHash)}
        json={json}
      />
    </>
  );
};
export default MySurvey;
