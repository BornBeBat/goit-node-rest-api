const fs = require("fs").promises;
const path = require("path");
const { randomUUID } = require("crypto");
const { HttpError } = require("../helpers/HttpError");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

async function listContacts() {
  const dataString = await fs.readFile(contactsPath, "utf8");
  const data = JSON.parse(dataString);
  return data;
}

async function getContactById(contactId) {
  const contactsList = await listContacts();
  const contact = contactsList.find((item) => item.id === contactId);
  return contact ? contact : null;
}

async function addContact({ name, email, phone }) {
  const contactsList = await listContacts();
  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };
  contactsList.push(newContact);

  fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return newContact;
}

async function updateContact(id, data) {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((item) => item.id === id);

  if (idx === -1) return null;

  contactsList[idx] = {
    id,
    ...data,
  };

  fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return contactsList[idx];
}

async function removeContact(contactId) {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((contact) => contact.id === contactId);

  if (idx === -1) return null;

  const deletedContact = contactsList.splice(idx, 1);
  fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return deletedContact[0];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
