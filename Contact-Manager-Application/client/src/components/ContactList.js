import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

// Components
import ContactCard from "./ContactCard";

const ContactList = () => {
  // Contexts
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  // Get Contacts when component is rendered
  useEffect(() => {
    retrieveContacts();
  }, []);

  // Display Contacts
  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => <ContactCard contact={contact} key={contact._id} />);

  return (
    <div className="ui main container">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui blue button right floated">Add Contact</button>
        </Link>
      </h2>
      <div>
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Contacts"
            className="prompt"
            onChange={(e) => searchHandler(e.target.value)}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <h3 className="ui center aligned header">No Contacts available</h3>
        )}
      </div>
    </div>
  );
};

export default ContactList;
