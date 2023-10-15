
# Feat:React Form Validation : Viktor 🤖

This project focuses on implementing comprehensive form validation. 
It includes mandatory fields for First Name and Last Name, with additional rules for User Inactivity Date based on User Type. Validation messages appear for invalid and touched fields. The solution utilizes TypeScript, converts the codebase from JavaScript, and employs Jest for unit testing. No third-party form libraries are used.




## Requirement
For this task you need to implement the form shown in the image below the logic for saving the below (/static/media/form-goal.9608ad75.png) as well as the following validation rules:

- First Name and Last Name are mandatory fields.

- User Inactivity Date is mandatory ONLY if the User Type is set to "Inactive".

- User Inactivity Date value must have the format YYYY-MM-DD (This format should also be  configurable).

- User Inactivity Date is only valid if it contains a date that is in the past.

- Validation messages should appear if a field is invalid and was touched.

Additional Requirements

- The task should be implemented inside the component found at: /src/tasks/form-task/FormTaskComplete/FormTaskComplete.js.

- When submitting the form, you should use the saveUserForm function found in /src/tasks/form-task/FormTaskComplete/form-api.js.

- You may create as many sub-components as you deem necessary.
When styling the form, feel free to use CSS, SCSS, React-JSS, or other.

- Feel free to include any UI/UX improvements for the form.

- Do not use any 3rd party form libraries to complete this task.
Testing is required for this task. The testing-library has been included in this project, but please feel free to use any other testing tools (such as enzyme)
## Acknowledgements
 - [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
 - [![TypeScript](https://badges.aleen42.com/src/typescript.svg)](https://www.typescripttutorial.net/)
 - [![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://jestjs.io/)
 - [![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
 - [![BITBUCKET](https://img.shields.io/badge/Bitbucket-0747a6?style=for-the-badge&logo=bitbucket&logoColor=white)](https://support.atlassian.com/bitbucket-cloud/resources/)


## Getting Started
Available Scripts
In the project directory, you can run:

- `yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

- `yarn test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

- `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

- yarn eject
Note: this is a one-way operation. Once you eject, you can’t go back!

## Features

- First Name and Last Name Validation. (Both mandatory fields)
- User Inactivity Date Validation. ( Mandatory ONLY if the User Type is set to "Inactive")
- User Inactivity Date Validation.  ( Only valid if it contains a date that is in the past) 
- User Inactivity Date value format. ( YYYY-MM-DD ) 
- Regular Expression used for Date Validation
- Validation Messages Appearling. ( If a field is invalid and was touched )
- Pure CSS used for styling.
- No Third-party libraries used.
- Jest used for Unit Testing.


## Authors
- [@linkedin](https://linkedin.com/in/viktorlinson)
- [@e-mail](mailto:sse.viktor21@gmail.com)
