import styled from 'styled-components';

export const UserMenuHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const UserBtn = styled.button`
  padding: 8px 16px;

  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
  background-color: transparent;
  border: none;

  &.active {
    color: white;

    background: rgb(38, 38, 39);
    background: radial-gradient(
      circle,
      rgba(38, 38, 39, 1) 20%,
      rgba(19, 212, 44, 1) 72%
    );
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: rgb(38, 38, 39);
    background: radial-gradient(
      circle,
      rgba(38, 38, 39, 1) 20%,
      rgba(19, 212, 44, 1) 72%
    );
  }
`;
export const UserText = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: black;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: rgb(250, 184, 2);
  text-transform: uppercase;
  margin-right: 25px;
`;
