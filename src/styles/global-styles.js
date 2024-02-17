import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';
import { FONTS } from './fonts';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    /* width: 90%; */
    /* max-width: 1200px; */
    margin-left: auto;
    margin-right: auto;
    font-family: ${FONTS.ffPrimary};
    color: ${COLORS.WHITE};
    background-color: #000;
  }

  h1,
  h2,
  h3 {
    font-family: ${FONTS.ffSecundary};
    font-weight: 100;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
