import Header from "src/components/header";
import Footer from "src/components/footer";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
