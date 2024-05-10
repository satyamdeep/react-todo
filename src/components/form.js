import "../App.css";
import { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState([]);
  const [data, setData] = useState({
    name: "",
    contact: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.contact]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setValue([...value, data]);
    setData(
      {
        name : "",
        contact: ""
      }
    )
  };

  return (
    <div className="main_div">
      <div className="center_div col-12">
        <h1>Form group</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Name "
          />
          <input
            name="contact"
            value={data.contact}
            onChange={handleChange}
            type="text"
            placeholder="Enter Contact "
          />
          <button className="hover" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {value.map((item, i) => {
              <tr>
                {/* <td>{item.i}</td> */}
                <td>{item.name}</td>
                <td>{item.contact}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoForm;
