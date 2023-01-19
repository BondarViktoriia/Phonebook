import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuNavigate = styled(NavLink)`
  margin-right: 30px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;

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
