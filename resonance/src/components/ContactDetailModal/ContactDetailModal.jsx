import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './ContactDetailModal.module.css';

/**
 * ContactDetailModal – presents full contact information in a modal / panel.
 *
 * Props:
 *  - contact: object | null – selected contact to show. If null, modal is hidden.
 *  - onClose: () => void – callback when the modal requests to close.
 */
const ContactDetailModal = ({ contact, onClose }) => {
  // Close when the ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Prevent background scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // Guard: do not render anything when no contact is selected
  if (!contact) return null;

  // Render modal via portal to avoid stacking context issues
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      {/* Stop propagation so clicks inside the dialog don't close */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>

        <h2 id="contact-dialog-title" className={styles.name}>
          {contact.name}
        </h2>
        <p className={styles.username}>@{contact.username}</p>

        <div className={styles.section}>
          <h3>Contact</h3>
          <ul>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
            <li>
              Website:{' '}
              <a href={`http://${contact.website}`} target="_blank" rel="noreferrer">
                {contact.website}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Address</h3>
          <address>
            {contact.address.street}, {contact.address.suite}
            <br />
            {contact.address.city} {contact.address.zipcode}
          </address>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <p>
            <strong>{contact.company.name}</strong>
            <br />
            {contact.company.catchPhrase}
            <br />
            <em>{contact.company.bs}</em>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactDetailModal; 