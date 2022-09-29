import Navbar from "../components/Navbar";
import "../sass/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
