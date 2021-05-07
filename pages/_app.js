import '@styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Head from 'next/head'

function Application({ Component, pageProps }) {
	return (
		<>
    
			<Header />
			<Component {...pageProps} />
      <Footer />
		</>
	)
}

export default Application
