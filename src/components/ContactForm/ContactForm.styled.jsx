import styled from 'styled-components';

export const Form = styled.form`
  border: 5px solid rgb(94, 84, 57);
  border-radius: 4px;

  width: 400px;
  height: 275px;

  background-color: rgb(225, 234, 235);
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2;
  font-size: 20px;
  color: rgb(94, 84, 57);
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  color: rgb(94, 84, 57);
  background-color: rgb(225, 234, 235);
  border: 2px solid rgb(94, 84, 57);
  margin-left: 73px;
`;
export const ButtonAdd = styled.button`
  width: 110px;
  height: 45px;
  text-transform: uppercase;
  background: rgb(19, 212, 44);
  background: radial-gradient(
    circle,
    rgba(19, 212, 44, 1) 22%,
    rgba(38, 38, 39, 1) 76%
  );
  color: #fff;
  border-radius: 8px;
  border: none;
`;
