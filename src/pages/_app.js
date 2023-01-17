import Header from 'src/components/header'

export default function App({ Component, pageProps }) {
  return <div><Header /><Component {...pageProps} /></div>
}
