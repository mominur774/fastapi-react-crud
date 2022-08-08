import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/Layout';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  )
}

export default MyApp
