
// import { useState } from "react";
import React, { useState } from "react";
const BootStrapForm = () => {
  const url = "http://localhost:5000";

  const initialState = {};

  const [formResponse, setFormResponse] = useState("");

  const handleFormResponse = (key, value) => {
    setFormResponse((prevResponse) => ({
      ...prevResponse,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formResponse);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formResponse),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

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
                encType="application/json"
              >
                <div className="col-md-4">
                  <label for="validationDefault01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    name="FirstName"
                    // value={formResponse["FirstName"]}
                    onChange={(e) =>
                      handleFormResponse(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationDefault02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    name="LastName"
                    // value={formResponse["LastName"]}
                    onChange={(e) =>
                      handleFormResponse(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationDefaultUsername" className="form-label">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      name="UserName"
                      aria-describedby="inputGroupPrepend2"
                      onChange={(e) =>
                        handleFormResponse(e.target.name, e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="validationDefault03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    name="City"
                    // value={formResponse[""]}
                    onChange={(e) =>
                      handleFormResponse(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationDefault04" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="validationDefault04"
                    name="State"
                    // value={formResponse[""]}
                    onChange={(e) =>
                      handleFormResponse(e.target.name, e.target.value)
                    }
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label for="validationDefault05" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    name="Zip"
                    // value={formResponse[""]}
                    onChange={(e) =>
                      handleFormResponse(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // value=""
                      id="invalidCheck2"
                      name="Agree"
                      onChange={(e) =>
                        handleFormResponse(e.target.name, e.target.value)
                      }
                      required
                    />
                    <label className="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
                <div className="form-floating mb4-4 mt-5">
                  <textarea
                    id="reason"
                    className="form-control"
                    style={{ maxWidth: "800px", maxHeight: "100px" }}
                  ></textarea>
                  <label htmlFor="reason">Reason for overdue payment ...</label>
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
  );
};

export default BootStrapForm;
