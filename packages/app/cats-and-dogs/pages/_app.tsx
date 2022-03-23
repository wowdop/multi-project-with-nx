import { themeCD } from '@mpnx/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main>
        <ThemeProvider theme={themeCD}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default CustomApp
