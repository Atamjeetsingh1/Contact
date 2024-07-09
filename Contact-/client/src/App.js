import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', avatar: '' });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await axios.get('/api/contacts');
    setContacts(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await axios.put(`/api/contacts/${editing}`, form);
    } else {
      await axios.post('/api/contacts', form);
    }
    setForm({ name: '', email: '', avatar: '' });
    setEditing(null);
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditing(contact._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div>
      <h1>Contact List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="Name" required />
        <input type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Email" required />
        <input type="text" name="avatar" value={form.avatar} onChange={handleInputChange} placeholder="Avatar URL" />
        <button type="submit">{editing ? 'Update' : 'Add'} Contact</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <img src={contact.avatar} alt={contact.name} width="50" />
            <div>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <button onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
