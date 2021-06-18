const json = {
    "title": "Borrower Information Form",
    questions: [
        {
            applicant: "business name",
            type: "text",
            title: "Name of Business Applying for Loan:",
            // placeHolder: "Jon Snow",
            isRequired: true,
            autoComplete: "name"
        }, {
            name: "applicant name",
            type: "text",
            inputType: "text",
            title: "Your Name:",
            isRequired: true,
            autoComplete: "name"
        }, {
            name: "title",
            type: "text",
            inputType: "text",
            title: "Your Title:",
            isRequired: true,
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your Birthdate:",
            isRequired: true,
            autoComplete: "bdate"
        }, {
            name: "ssn",
            type: "text",
            inputType: "number",
            // maxLength: 9,
            title: "Your SSN:",
            isRequired: true,
            
        }, {
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
        }
    ]
};
export default json
