import React, { useState, useCallback } from "react";
import MySurvey from "../surveyTypes/MySurvey";

const SurveyOne = () => {
  const [showPage, setShowPage] = useState(true);

  const onCompletePage = useCallback(
    (data) => {
      console.log(data);
      setShowPage(!showPage);
    },
    [showPage]
  );

  const setFinalPage = () => {
    return (
      <main>
        <h1>Thank you for taking this survey! We'll be in touch.</h1>
      </main>
    );
  };
  return (
    <>
      {showPage ? (
        <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
      ) : (
        setFinalPage()
      )}
    </>
  );
};

export default SurveyOne;
