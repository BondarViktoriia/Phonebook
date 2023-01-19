import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Contact, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <Contact>
        {name}: {number}
      </Contact>
      <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
