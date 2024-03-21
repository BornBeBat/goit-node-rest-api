import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const contactsPath = path.join("..", "db", "contacts.json");

export async function listContacts() {
  const dataString = await fs.readFile(contactsPath, "utf8");
  const data = JSON.parse(dataString);
  return data;
}

export async function getContactById(contactId) {
  const contactsList = await listContacts();
  const contact = contactsList.find((item) => item.id === contactId);
  return contact ? contact : null;
}

export async function addContact({ name, email, phone }) {
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

export async function updateContactServises(id, data) {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((item) => item.id === id);

  if (idx === -1) return null;
  console.log();
  contactsList[idx] = {
    ...contactsList[idx],
    ...data,
  };

  fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return contactsList[idx];
}

export async function removeContact(contactId) {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((contact) => contact.id === contactId);

  if (idx === -1) return null;

  const deletedContact = contactsList.splice(idx, 1);
  fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return deletedContact[0];
}
