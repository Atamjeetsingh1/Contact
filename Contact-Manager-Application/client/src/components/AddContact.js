// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  // Hooks
  const navigate = useNavigate();

  // Contexts
  const { addContactHandler } = useContactsCrud();

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // handling add button
  const add = async (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    await addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  // handling back button
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="ui main container">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue right floated">Add</button>
      </form>
      <button className="ui button blue" onClick={backHandler}>
        Back
      </button>
    </div>
  );
};

export default AddContact;
