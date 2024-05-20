const Record = ({ cust_id, custName }) => {
  return (
    <>
      <div className="custName">{custName}</div>
      <div className="form-floating mb4-4  d-inline ">
        <textarea
          name={"cust_"+ String(cust_id)}
          className="form-control"
          required
          style={{ maxWidth: "800px", maxHeight: "100px" }}
        ></textarea>
        <label htmlFor="reason">Reason for overdue payment ...</label>
      </div>
    </>
  );
};

export default Record;
