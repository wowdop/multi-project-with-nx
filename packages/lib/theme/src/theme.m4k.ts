import { DefaultTheme } from 'styled-components'
import themeBase from './theme'

const theme: DefaultTheme = {
  ...themeBase,
  color: {
    white: 'rgba(255, 255, 255, 1)',
    whiteAlpha: (alpha: number) => `rgba(255, 255, 255, ${alpha})`,
    black: 'rgba(0, 0, 0, 1)',
    transparent: 'transparent',
    logo: {
      red: '#CC2424',
      yellow: '#E6D722',
      blue: '#3D7EE8',
    },
    primary: {
      gray: {
        c25: '#FCFCFD',
        c50: '#F9FAFB',
        c100: '#F2F4F7',
        c200: '#E4E7EC',
        c300: '#D0D5DD',
        c400: '#98A2B3',
        c500: '#667085',
        c600: '#475467',
        c700: '#344054',
        c800: '#1D2939',
        c900: '#101828',
      },
      warning: {
        c25: '#FCFAFF',
        c50: '#F9F5FF',
        c100: '#F4EBFF',
        c200: '#E9D7FE',
        c300: '#D6BBFB',
        c400: '#B692F6',
        c500: '#9E77ED',
        c600: '#7F56D9',
        c700: '#6941C6',
        c800: '#53389E',
        c900: '#42307D',
      },
      success: {
        c25: '#FFFCF5',
        c50: '#FFFAEB',
        c100: '#FEF0C7',
        c200: '#FEDF89',
        c300: '#FEC84B',
        c400: '#FDB022',
        c500: '#F79009',
        c600: '#DC6803',
        c700: '#B54708',
        c800: '#93370D',
        c900: '#7A2E0E',
      },
      primary: {
        c25: '#F6FEF9',
        c50: '#ECFDF3',
        c100: '#D1FADF',
        c200: '#A6F4C5',
        c300: '#6CE9A6',
        c400: '#32D583',
        c500: '#12B76A',
        c600: '#039855',
        c700: '#027A48',
        c800: '#05603A',
        c900: '#054F31',
      },
      error: {
        c25: '#FFFBFA',
        c50: '#FEF3F2',
        c100: '#FEE4E2',
        c200: '#FECDCA',
        c300: '#FDA29B',
        c400: '#F97066',
        c500: '#F04438',
        c600: '#D92D20',
        c700: '#B42318',
        c800: '#912018',
        c900: '#7A271A',
      },
    },
    secondary: {
      blueGray: {
        c25: '#FCFCFD',
        c50: '#F8F9FC',
        c100: '#EAECF5',
        c200: '#C8CCE5',
        c300: '#9EA5D1',
        c400: '#717BBC',
        c500: '#4E5BA6',
        c600: '#3E4784',
        c700: '#363F72',
        c800: '#293056',
        c900: '#101323',
      },
      rose: {
        c25: '#FFF5F6',
        c50: '#FFF1F3',
        c100: '#FFE4E8',
        c200: '#FECDD6',
        c300: '#FEA3B4',
        c400: '#FD6F8E',
        c500: '#F63D68',
        c600: '#E31B54',
        c700: '#C01048',
        c800: '#A11043',
        c900: '#89123E',
      },
      blue: {
        c25: '#F5FAFF',
        c50: '#EFF8FF',
        c100: '#D1E9FF',
        c200: '#B2DDFF',
        c300: '#84CAFF',
        c400: '#53B1FD',
        c500: '#2E90FA',
        c600: '#1570EF',
        c700: '#175CD3',
        c800: '#1849A9',
        c900: '#194185',
      },
    },
  },
}

export default theme
