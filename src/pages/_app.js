import Head from "@/components/Head"
import { GlobalStyle } from "@/styles/global"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
