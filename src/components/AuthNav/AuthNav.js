import { AuthHeader, AuthNavigate } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <AuthHeader>
      <nav>
        <AuthNavigate to="/register">Registration</AuthNavigate>
        <AuthNavigate to="/logIn"> Log-In</AuthNavigate>
      </nav>
    </AuthHeader>
  );
};
export default AuthNav;
