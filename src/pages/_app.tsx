import GlobalStyle from "../styles/GlobalStyle";
import {ToastContainer} from "react-toastify"

function MyApp({ Component, pageProps }) {
  return (
    <>
     < GlobalStyle />
     <Component {...pageProps} />
     <ToastContainer autoClose= {2000} />
    </>
  );
}

export default MyApp;
