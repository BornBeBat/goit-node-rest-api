import { Contact } from "../models/Contact.js";

export async function listContacts() {
  const data = await Contact.find({});
  return data;
}

export async function getContactById(contactId) {
  try {
    const contact = await Contact.findById(contactId);
    return contact;
  } catch (error) {
    return null;
  }
}

export async function addContact(body) {
  const newContact = await Contact.create(body);
  return newContact;
}

export async function updateContactServises(id, data) {
  try {
    const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
    return contact;
  } catch (error) {
    return null;
  }
}

export async function removeContact(contactId) {
  try {
    const result = await Contact.findByIdAndDelete(contactId);
    return result;
  } catch (error) {
    return null;
  }
}
