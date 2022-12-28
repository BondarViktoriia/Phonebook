import ContactForm from './ContactForm';
// import  { useState,useEffect } from 'react';
import ContactList from './ContactList';
// import { nanoid } from 'nanoid';
import Filter from './Filter';
import Notiflix from 'notiflix';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log('app', contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);

  const normalizedFilter = filter.trim().toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookContainer>
      <PhoneBook>Phonebook</PhoneBook>
      <ContactForm />
      <Filter />

      <ContactsTitle>Contacts</ContactsTitle>
      {filterContacts.length > 0 ? (
        <ContactList contacts={filterContacts} />
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
      )}
    </PhonebookContainer>
  );
};

export default App;
