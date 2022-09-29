import Navbar from "../components/Navbar";
import "../sass/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
