# Features

1. Login (Mocked Authentication)

- Login form with username and password
- Frontend-mocked authentication (no backend required)
- Token stored in localStorage
- Basic token expiry handling

2. Protected Dashboard

- Dashboard accessible only after login
- Fetches and displays user data from a public API
- Logout functionality clears token and redirects to login

3. Route Protection

- Unauthenticated users are redirected to the login page
- Authentication state handled centrally using React Context
NOTE :  Redux not used as the application has limited global state (auth + dashboard data). 
        React Context provides a simpler, cleaner solution without unnecessary boilerplate.

4. Error & Loading Handling

- Loader displayed during API calls
- Graceful error handling
- User-friendly error messages
- Retry option for failed API calls

Tech Stack

- React (Vite)
- React Router v6
- Axios
- CSS (no UI framework)



# Project Structure

src/
│── api/
│   └── axiosInstance.js
│
│── auth/
│   ├── AuthContext.jsx
│   └── ProtectedRoute.jsx
│
│── components/
│   ├── Loader.jsx
│   ├── Error.jsx
│
│── pages/
│   ├── Login.jsx
│   ├── Login.css
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│
│── App.jsx
│── main.jsx
│── index.css
|── .env


# Note: .env is NOT intentionally ignored in Git.


# Login Details

- Since no real authentication backend is required, login is mocked on the frontend.
- A dummy token is stored in localStorage
- Token expiry is simulated (1 hour)
- Demo credentials
   - Username: mor_2314 and Password: 83r5^_
