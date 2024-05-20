import React from "react"
import "./index.css"
import App from "./App.js"
import reportWebVitals from "./reportWebVitals.js"
import { createRoot } from "react-dom/client"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>'

// Render your React component instead
const root = createRoot(document.getElementById("app"))

root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/form" Component={App} />
      </Routes>
    </Router> */}
    {/* <Auth0Provider
      domain="dev-r2wz11cj3ws8zch6.us.auth0.com"
      clientId="adp2xjdms96wzfMQQ7SCOnkujlsD5DBn"
      redirectUrl={window.location.origin}
    > */}
    <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
