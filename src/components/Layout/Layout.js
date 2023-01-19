import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Card, Link, Text } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box
      maxW="1200px"
      mr="auto"
      ml="auto"
      h="100vh"
      display="flex"
      flexDirection="column"
    >
      <AppBar />
      <Box flexGrow="1">
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>

      <Card w={255} p="4" ml="auto" mr="auto" color="rgb(250,184,2)">
        <Text fontSize={15}>
          © 2023 Copyright:
          <Link href="https://github.com/BondarViktoriia" color="#000000">

            Viktoriia Bondar
          </Link>
        </Text>
      </Card>
    </Box>
  );
};

export default Layout;
