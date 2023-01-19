import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 115px;
`;

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  border-radius: 8px;
  height: 40px;
  margin-top: 8px;
  padding: 4px;
  border: none;
`;
export const RegisterBtn = styled.button`
  border-radius: 8px;
  height: 50px;
  margin-top: 8px;

  background: rgb(38, 38, 39);
  background: radial-gradient(
    circle,
    rgba(38, 38, 39, 1) 20%,
    rgba(19, 212, 44, 1) 72%
  );
  text-transform: uppercase;
  color: #fff;
  border: none;
`;
