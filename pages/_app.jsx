import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
