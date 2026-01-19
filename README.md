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
- NOTE :  Redux not used as the application has limited global state (auth + dashboard data). 
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



## Responsibility Flow

UI Layer
- pages/Login.jsx
- pages/Dashboard.jsx

State & Auth Layer
- auth/AuthContext.jsx
- auth/ProtectedRoute.jsx

API Layer
- api/axiosInstance.js

Reusable Components
- components/Loader.jsx
- components/Error.jsx



## Note - .env is intentionally NOT ignored in Git.


# Login Details

- Since no real authentication backend is required, login is mocked on the frontend.
- A dummy token is stored in localStorage
- Token expiry is simulated (1 hour)
- Demo credentials
   - Username: mor_2314 and Password: 83r5^_
