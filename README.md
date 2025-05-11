# CreditSea Assignment - Full Stack Application Documentation
# Project Overview
# The Loan Manager application is designed to manage loan applications. It connects users, verifiers, and admins through different routes and functionalities, allowing for seamless handling of loan applications from submission to approval. The system provides some static statistics and user-friendly interactions via a dynamic dashboard.

# Tech Stack
# Backend:
1. # Node.js with JavaScript
2. # Express.js (for API handling)
3. # SQL (sqlite3) (Database for storing application data)

# Frontend:
1. # React.js (for building the dynamic dashboard)

# Hosting/Deployment:
1. # Vercel for Frontend deployment
2. # Render for Backend deployment

# Functionalities
# I. User Role and Routes:
# User:
1. # Users can fill out an application form for a loan and submit it.
2. # Users can view their own loan applications.

# Verifier:
1. # Verifiers can view and process only pending loan applications.
2. # Verifiers verify the loan applications before forwarding them to the admin.

# Admin:
1. # Admins can see all verified loan applications.
2. # Admins have the authority to approve loan applications.

# II. Dashboard Functionalities:
1. # The dashboard displays real-time statistics:
2. # Total Applications
3. # Average Loan Amount
4. # Users can interact with the dashboard via: Search by name functionality. Sort by amount functionality.

# III. Form and Dashboard Integration:
1. # The application form allows users to submit loan requests, which are stored in the backend database.
2. # The submitted data is dynamically reflected in the dashboard for each user, verifier, and admin.

# Key Functionalities
1. # Form Integration:
# The application form is connected to the backend via a POST API to accept user input.
# The form data is validated and stored in the SQL database.

2. # Dashboard:
# User Dashboard: Displays all loan applications submitted by the users.

# Verifier Dashboard: Displays pending loan applications for and provides an option to verify them.

# Admin Dashboard: Displays verified loan applications and provides an option to approve them.

3. # Search & Sorting Functionality:
# Search by Name: Users, verifiers, and admins can search applications by the applicant's name.

# Sort by Amount: Users, verifiers and admins can sort loan applications by loan amount for easier processing.

# API Endpoints
  # GET /loans/
  # POST /loans/
  # PUT /loans/id
  
# Database Models
# 1. Loan Application Model
Fields:

0|id|TEXT|0||1
1|name|INT|0||0
2|loan_amount|INT|0||0
3|loan_tenure|INT|0||0
4|employment_status|VARCHAR(100)|0||0
5|employment_address|VARCHAR(300)|0||0
6|loan_reason|VARCHAR(250)|0||0
7|loan_status|VARCHAR(200)|0||0
8|date_applied|DATE|0||0

# Deployment
# Hosting on Vercel and Render:

# Project Live Link: https://loanmanager-fullstack.vercel.app/

# Github Repository of Backend Code: https://github.com/sairavitejav/loanmanager-backend




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
