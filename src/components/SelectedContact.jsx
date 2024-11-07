import React from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({ selectedContact, setSelectedContactId }) {
  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {selectedContact.name}</p>
      <p><strong>Email:</strong> {selectedContact.email}</p>
      <p><strong>Phone:</strong> {selectedContact.phone}</p>
      <p><strong>Address:</strong> {selectedContact.address?.street}, {selectedContact.address?.city}</p>
      <p><strong>Company:</strong> {selectedContact.company?.name}</p>
    </div>
  );
}
