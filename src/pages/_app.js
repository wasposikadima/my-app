import Header from 'src/components/header'
import Footer from 'src/components/footer'


export default function App({ Component, pageProps }) {
  return <div><Header /><Component {...pageProps} /><Footer /></div>
}
