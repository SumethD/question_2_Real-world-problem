import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList/ContactList';
import { fetchUsers } from '../services/api';
import ContactDetailModal from '../components/ContactDetailModal/ContactDetailModal';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchUsers();
        setContacts(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading contacts...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return (
    <>
      <ContactList contacts={contacts} onSelect={setSelectedContact} />
      <ContactDetailModal
        contact={selectedContact}
        onClose={() => setSelectedContact(null)}
      />
    </>
  );
};

export default ContactsPage; 