const json = {
  title: "Borrower Information Form",
  questions: [
    {
      applicant: "business name",
      type: "text",
      title: "Name of Business Applying for Loan:",
      // placeHolder: "Jon Snow",
      isRequired: true,
      autoComplete: "name",
    },
    {
      name: "applicant name",
      type: "text",
      inputType: "text",
      title: "Your Name:",
      isRequired: true,
      autoComplete: "name",
    },
    {
      name: "title",
      type: "text",
      inputType: "text",
      title: "Your Title:",
      isRequired: true,
    },
    {
      name: "birthdate",
      type: "text",
      inputType: "date",
      title: "Your Birthdate:",
      isRequired: true,
      autoComplete: "bdate",
    },
    {
      name: "ssn",
      type: "text",
      inputType: "number",
      // maxLength: 9,
      title: "Your SSN:",
      isRequired: true,
    },
    {
      name: "birthplace",
      type: "text",
      inputType: "text",
      title: "Place of Birth:",
      placeHolder: "City & State or Foreign Country",
      isRequired: true,
      // autoComplete: "email",
      // validators: [
      //     {
      //         type: "email"
      //     }
      // ]
    },
    {
      type: "radiogroup",
      name: "veteran",
      title: "Are you a Veteran?",
      isRequired: true,
      colCount: 4,
      choices: [
        "Non-Veteran",
        "Veteran-Other",
        "Service-Disabled Veteran",
        "Not Disclosed ",
      ],
    },
    {
      type: "radiogroup",
      name: "gender",
      title: "Gender:",
      isRequired: true,
      colCount: 4,
      choices: ["M-Male", "F-Female", "Not Disclosed "],
    },
    {
      type: "radiogroup",
      name: "race",
      title: "Race:",
      isRequired: true,
      colCount: 4,
      choices: [
        "American Indian or Alaska Native",
        "Asian",
        "Black or African-American",
        "Native Hawaiian or Pacific Islander",
        "White",
        "Not Disclosed",
      ],
    },
    {
      type: "radiogroup",
      name: "ethnicity",
      title: "What is your Ethnicity?",
      isRequired: true,
      colCount: 4,
      choices: [
        "Hispanic or Latino",
        "Not Hispanic or Latino",
        "Not Disclosed ",
      ],
    },
    {
      type: "checkbox",
      name: "criminal offense 1",
      title:
        "Are you presently subject to an indictment, criminal information, arraignment, or other means by which formal criminal charges are brought in any jurisdiction?",
      isRequired: true,
      colCount: 4,
      choices: ["No", "Yes"],
    },
    {
      type: "checkbox",
      name: "criminal offense 2",
      title:
        "Have you been arrested in the past six months for any criminal offense?",
      isRequired: true,
      colCount: 4,
      choices: ["No", "Yes"],
    },
    {
      type: "checkbox",
      name: "criminal offense 3",
      title:
        "For any criminal offense – other than a minor vehicle violation – have you ever: 1) been convicted; 2) plead guilty; 3) plead nolo contendere; 4) been placed on pretrial diversion; or 5) been placed on any form of parole or probation (including probation before judgment)?",
      isRequired: true,
      colCount: 4,
      choices: ["No", "Yes"],
    },
    {
      type: "checkbox",
      name: "criminal offense 4",
      title:
        "Has an application for the loan you are applying for now ever been submitted to SBA or to a Certified Development Company or lender in connection with any SBA program?",
      isRequired: true,
      colCount: 4,
      choices: ["No", "Yes"],
    },
  ],
};
export default json;
