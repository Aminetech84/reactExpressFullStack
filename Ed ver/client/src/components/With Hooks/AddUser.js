import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState([]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name };
    
    axios
    .post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then((res) => console.log(res.data));
  };
  const handleChange = (event) => setName({ name: event.target.value });
/*  useEffect(() => {
    handleSubmit();
  }, []);*/

  return (
    <>
      <form onSubmit={()=> handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
