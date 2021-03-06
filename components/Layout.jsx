import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  display: flex;
  margin-top: 3rem;

  h1 {
    margin: 0 auto;
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Cryptonium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Link href="/" passHref>
          <h1>CRYPTONIUM</h1>
        </Link>
      </Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
