import { useAuth } from 'hooks/useAuth';
import { UserMenuNavigate } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <UserMenuNavigate to="/" end>
        Home
      </UserMenuNavigate>
      {isLoggedIn && (
        <UserMenuNavigate to="/contacts">Phonebook</UserMenuNavigate>
      )}
    </nav>
  );
};
export default Navigation;
