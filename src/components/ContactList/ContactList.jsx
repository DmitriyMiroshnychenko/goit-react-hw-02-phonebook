import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/DeleteIcon.svg';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          📞 <span className={styles.contactsName}>{name}</span>: {number}
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => onDeleteContact(id)}
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  CONTACTS: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
