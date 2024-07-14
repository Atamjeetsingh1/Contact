// Imports
import { createContext, useContext, useState } from "react";

// Importing api file
import api from "../api/contacts";

// Creating Context
const contactsCrudContext = createContext();

export const ContactsCrudContextProvider = ({ children }) => {
  // States
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Get contacts
  const retrieveContacts = async () => {
    try {
      const response = await api.get("contacts");
      if (response.data) {
        setContacts(response.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  // Add contact
  const addContactHandler = async (contact) => {
    try {
      const request = {
        ...contact,
      };

      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
      alert("Contact added successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Delete contact
  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact._id !== id;
      });
      setContacts(newContactList);
      alert("Contact deleted successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Update Contact
  const updateContactHandler = async (contact) => {
    try {
      const request = {
        ...contact,
      };
      const response = await api.put(`/contacts/${contact._id}`, request);
      const { _id } = response.data;
      setContacts(
        contacts.map((contact) => {
          return contact._id === _id ? { ...response.data } : contact;
        })
      );
      alert("Contact Updated Successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Search Contacts
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    retrieveContacts,
    addContactHandler,
    removeContactHandler,
    updateContactHandler,
    searchTerm,
    searchResults,
    searchHandler,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
};

export const useContactsCrud = () => {
  return useContext(contactsCrudContext);
};
