import ContactForm from './ContactForm';
import Filter from './Filter';
import {
  PhoneBook,
  PhonebookContainer,
  ContactsTitle,
  EmptyPhonebook,
} from './App.styled';
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

  console.log('!contacts', !contacts);

  console.log('filter', filter);

  return (
    <PhonebookContainer>
      <PhoneBook>Phonebook</PhoneBook>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>

      {contacts.length > 0 && <ContactList />}
      {contacts.length === 0 && !isLoading && !error && (
        <EmptyPhonebook>
          There are no saved contacts in your phonebook
        </EmptyPhonebook>
      )}
    </PhonebookContainer>
  );
};

export default App;
