// Imports
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  // Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Contexts
  const { updateContactHandler } = useContactsCrud();

  // States
  const [name, setName] = useState(location.state?.name);
  const [email, setEmail] = useState(location.state?.email);

  // handling update button
  const update = async (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    await updateContactHandler({
      _id: location.state._id,
      name: name,
      email: email,
    });
    setName("");
    setEmail("");
    navigate("/");
  };

  // handling back button
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {location.state ? (
        <div className="ui main container">
          <h2>Edit Contact</h2>
          <form className="ui form" onSubmit={update}>
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
            <button className="ui button blue right floated">Update</button>
          </form>
          <button className="ui button blue" onClick={backHandler}>
            Back
          </button>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default EditContact;
