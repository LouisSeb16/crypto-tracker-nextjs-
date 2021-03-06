import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
