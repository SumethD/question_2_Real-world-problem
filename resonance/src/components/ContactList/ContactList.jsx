import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onSelect }) => {
  return (
    <section className={styles.grid}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onSelect={onSelect} />
      ))}
    </section>
  );
};

export default ContactList; 