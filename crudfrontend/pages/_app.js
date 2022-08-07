import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
