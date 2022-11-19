import '../styles/globals.css'
import Format from '../components/format';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useEffect} from 'react';


function MyApp({ Component, pageProps }) {
  const [  header, setHeader ] = useState('Loading...');
  const [  footer, setFooter ] = useState('Loading...');
  
  function setData(){
  const newHeader = <Header></Header>
  const newFooter = <Footer></Footer>
  setHeader(newHeader)
  setFooter(newFooter)
}

useEffect(() => setData(), [])

  return (
    <div>
      <title>Sherri's Blog</title>
        <div>{ header }</div>
          <Component {...pageProps} />
        <div>{ footer }</div>
    </div>
  )
}

export default MyApp
