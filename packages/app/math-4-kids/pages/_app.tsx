import { themeM4K } from '@mpnx/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main>
        <ThemeProvider theme={themeM4K}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default CustomApp
