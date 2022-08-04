import '../styles/globals.css'
import { Navbar } from "../components/Navbar";
import Home from '.';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Component {...pageProps} /> */}
    </>
    )
}

export default MyApp
