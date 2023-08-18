import { Flex } from '@chakra-ui/react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Form from '../components/form';

const Home: NextPage = () => {
  return (
    <Flex
      w={'100%'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      my={{ base: '75px', md: '0' }}
    >
      <Head>
        <title>Sign In | Create an Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </Flex>
  );
};

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permananet: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Home;
