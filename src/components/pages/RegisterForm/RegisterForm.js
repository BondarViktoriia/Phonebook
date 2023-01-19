import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Form, Input, FormContainer, RegisterBtn } from './RegisterForm.styled';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <RegisterBtn type="submit">Register</RegisterBtn>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
