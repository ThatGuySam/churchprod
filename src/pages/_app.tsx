import '../styles/global.css'
import Footer from '../components/footer'

import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
