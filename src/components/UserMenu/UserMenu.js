import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserBtn, UserText, UserName } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <UserText>
        Welcome, <UserName>{user.name}</UserName>
      </UserText>
      <UserBtn type="button" onClick={handleLogOut}>
        LogOut
      </UserBtn>
    </div>
  );
};

export default UserMenu;
