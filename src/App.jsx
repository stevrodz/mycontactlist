import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      const fetchContactDetails = async () => {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setSelectedContact(result);
        } catch (error) {
          console.error("Error fetching contact details:", error);
        }
      };
      fetchContactDetails();
    }
  }, [selectedContactId]);

  return (
    <>
      {selectedContactId && selectedContact ? (
        <SelectedContact
          selectedContact={selectedContact}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}