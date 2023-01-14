import ContactForm from './ContactForm';
import Filter from './Filter';
// import Notiflix from 'notiflix';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import ContactList from './ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('isLoading', isLoading);
  console.log('error', error);



  console.log('filter', filter);

  return (
    <PhonebookContainer>
      <PhoneBook>Phonebook</PhoneBook>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      {contacts.length > 0 && <ContactList/>}

      {/* {contacts ? (
        <ContactList />
      ) : (
        Notiflix.Notify.info('Your phonebook is empty. Please add contact.', {
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
        })
      )} */}
    </PhonebookContainer>
  );
};

export default App;
