import { Form, Input, FormContainer, RegisterBtn } from './LoginForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    form.reset();
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
        <RegisterBtn type="submit">Log in</RegisterBtn>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
