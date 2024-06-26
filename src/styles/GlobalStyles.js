import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 150%;
    text-decoration: none;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    outline: none;
    list-style: none;
}

body {
	margin: 0 auto;
	width: 100%;
  height: 100%;
  min-width: 34rem;
  background-color: #e8e8e8;
}

#root {
  height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2.5rem;
}

main {
	margin: 0 auto;
	padding: 0rem 4rem;
	min-height: 75vh;
}

.section-product-loading {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
