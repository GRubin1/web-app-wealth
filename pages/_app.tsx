import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { BebasNeue, Inter, InterExtraBold } from '../fonts/index'

function WealthApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${BebasNeue.variable} ${Inter.variable} ${InterExtraBold.variable}`}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  )
}

export default WealthApp
