import {
  ListItem,
  ContactContainer,
} from './ContactList.styled';
import {  useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import Notiflix from 'notiflix';

const ContactList = () => {

const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactContainer>
      {visibleContacts.length ===0 &&  Notiflix.Notify.info('Your phonebook is empty. Please add contact.', {
          position: 'center-bottom',
          backOverlay: true,
          clickToClose: true,
          closeButton: true,
          info: {
            background: '#8f9a9b',
            textColor: '#0c0b0b',
            childClassName: 'notiflix-notify-info',
            notiflixIconColor: '#f7f4f4',
            fontAwesomeClassName: 'fas fa-info-circle',
            backOverlayColor: 'rgba(38,192,211,0.2)',
          },
        })}
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem id={id } name={name} number={number} />
        </ListItem>
      ))}
    </ContactContainer>
  );
};

export default ContactList;

