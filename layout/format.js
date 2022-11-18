import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function format( { children } ) {
  return (
    <>
      <Head>
        <title>Sherri's Blog</title>
      </Head>
      <Header></Header>
      <div>{ children }</div>
      <Footer></Footer>
    </>
  );
}