const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Create a new contact
router.post('/', async (req, res) => {
  const { name, email, avatar } = req.body;
  const newContact = new Contact({ name, email, avatar });
  await newContact.save();
  res.json(newContact);
});

// Update a contact
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, avatar } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, avatar }, { new: true });
  res.json(updatedContact);
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res.json({ message: 'Contact deleted' });
});

module.exports = router;
