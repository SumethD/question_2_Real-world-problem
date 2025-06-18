import React from 'react';
import styles from './ContactCard.module.css';

const ContactCard = ({ contact, onSelect }) => {
  const { name, email, phone, website } = contact;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect?.(contact);
    }
  };

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(contact)}
      onKeyDown={handleKeyDown}
    >
      <h2 className={styles.name}>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <a
        className={styles.link}
        href={`http://${website}`}
        target="_blank"
        rel="noreferrer"
      >
        {website}
      </a>
    </article>
  );
};

export default ContactCard; 