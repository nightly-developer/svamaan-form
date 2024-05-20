import React, { useState, useEffect } from "react"
import Record from "./Record.jsx"
import LoadingSpinner from "./LoadingSpinner.jsx"

const BootStrapForm = () => {
  const [formResponse, setFormResponse] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [customers, setCustomers] = useState([])

  const handleFormResponse = (key, value) => {
    setFormResponse((prevResponse) => ({
      ...prevResponse,
      [key]: value,
    }))
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    const url = "http://localhost:5000"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formResponse),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }

  const customers_dummy = [
    { id: 1, name: "abc1" },
    { id: 2, name: "abc2" },
    { id: 3, name: "abc3" },
  ]

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("http://localhost:5000/")
        const customers = await response.json()
        setCustomers(customers)
      } catch (error) {
        setErrorMessage("Unable to fetch user list")
      } finally {
        setIsLoading(false)
      }
    }

    if (selectValue === "BM") {
      fetchData()
    }
  }, [selectValue])

  return (
    <>
      <section>
        <div className="container-lg">
          <div className="row justify-content-center my-5">
            <div className="col-lg-8">
              <form
                id="form"
                action="http://localhost:5000/"
                method="POST"
                className="row g-1"
                onSubmit={handleSubmit}
                onChange={(e) => {
                  handleFormResponse(e.target.name, e.target.value)
                }}
                encType="application/json"
              >
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" id="validationDefault01" name="FirstName" onChange={(e) => handleFormResponse(e.target.name, e.target.value)} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="validationDefault02" name="LastName" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationDefault03" className="form-label">
                    State
                  </label>
                  <input type="text" className="form-control" id="validationDefault03" name="State" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">
                    Role
                  </label>
                  <select className="form-select" id="validationDefault04" name="Role" onChange={(e) => setSelectValue(e.target.value)} required>
                    <option defaultValue="..." value="">
                      Choose...
                    </option>
                    <option value="BM">branch manager</option>
                    <option value="RM">regional manager</option>
                  </select>
                </div>

                <div id="CustomerSection">
                  {errorMessage && <div className="error">{errorMessage}</div>}
                  {isLoading && <LoadingSpinner />}
                  {Array.isArray(customers) && selectValue === "BM" && customers.map((cust) => <Record key={cust.cust_id} cust_id={cust.cust_id} custName={cust.name} />)}
                </div>
                <div className="col-12 mt-2">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BootStrapForm
