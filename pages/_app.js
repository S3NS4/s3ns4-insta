import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>S3NS4 INSTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp
