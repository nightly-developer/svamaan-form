import React from "react"
import { FormThemeProvider } from "react-form-component"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import BootStrapForm from "./components/BootStrap_form.jsx"
import { useAuth0 } from "@auth0/auth0-react"

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  return (
    <>
      <img src="https://www.svamaan.in/images/logo.png" />
      <FormThemeProvider>
        {/* <NavBar/> */}
        <BootStrapForm />

        {/* <div className="App">
          <h1>Auth0 authentication</h1>
          <ul>
            <li>
              <button onClick={loginWithPopup}> Login with Popup</button>
            </li>
            <li>
              <button onClick={loginWithRedirect}> Login with Redirect</button>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
          <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
          {isAuthenticated && (
            <pre style={{ textAlign: "start" }}>
              {JSON.stringify(user, null, 2)}
              You, seconds ago . Uncommitted changes
            </pre>
          )}
        </div> */}
      </FormThemeProvider>
    </>
  )
}

export default App
