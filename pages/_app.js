import Nav from '../components/Nav.jsx'
import '../styles/globals.css'
import '../styles/Nav.css'
import Head from 'next/head'
import { UserProvider } from '../stateprovider/UserContext.js'
function MyApp({ Component, pageProps }) {
  return <UserProvider>
     <div className=' s'>
    <Head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pushster&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
    </style> 
    </Head>
    <Nav/>
    <Component {...pageProps} />
  </div>
  </UserProvider>
  }

  export default MyApp