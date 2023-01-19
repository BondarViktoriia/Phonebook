import {
  HomeContainer,
  HomeTitle,
  TextContainer,
  FirstText,
  TextSpan,
  SecondText,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Phonebook!</HomeTitle>

      <TextContainer>
        <FirstText>
          If you have already registered, than you should{' '}
          <TextSpan>authorized</TextSpan>. If you don't have your account, you
          should firstly <TextSpan>registered</TextSpan>.
        </FirstText>
        <SecondText>
          In this application you will have access to your private phone book
          and you can always connect with your relatives and friends.
        </SecondText>
      </TextContainer>
    </HomeContainer>
  );
};
export default Home;
