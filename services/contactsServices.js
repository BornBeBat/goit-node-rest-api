import { Contact } from "../models/Contact.js";

export async function listContacts(filter = {}, query = {}) {
  const data = await Contact.find(filter, "", query);
  return data;
}

export async function getContactById(filter) {
  try {
    const contact = await Contact.findOne(filter);
    return contact;
  } catch (error) {
    return null;
  }
}

export async function addContact(body) {
  const newContact = await Contact.create(body);
  return newContact;
}

export async function updateContactServises(filter, data) {
  try {
    const contact = await Contact.findOneAndUpdate(filter, data, { new: true });
    return contact;
  } catch (error) {
    return null;
  }
}

export async function removeContact(filter) {
  try {
    const result = await Contact.findOneAndDelete(filter);
    return result;
  } catch (error) {
    return null;
  }
}
