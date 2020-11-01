import { createGlobalStyle } from 'styled-components';
import { colorVar } from 'utils/CssUtils';

export default createGlobalStyle`
  :root {
    ${colorVar('primary', '#f5f7f9', '#9c30ff')};
    ${colorVar('secondary', '#7a7a7a', '#fff', '#bbb')};

    ${colorVar('success', '#058612', '#d1fdd8', '#2e656a')};
    ${colorVar('info', '#3e96cb', '#cae9fb', '#3172b7')};
    ${colorVar('warning', '#e4a900', '#fffdd9', '#ffc107')};
    ${colorVar('danger', '#f91d1d', '#fddbdb', '#fa3a3a')};

    ${colorVar('light', '#f8f9fa')};
    ${colorVar('dark', '#343a40')};

    ${colorVar('disable', '#7c7c7c', '#eee', '#7c7c7c')};
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    outline: 0 none;
    padding: 0;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    box-shadow:  0 0 10px -1px rgba(var(--light-base), 0.05);
    height: 100%;
    min-height: 800px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    min-width: 600px;
  }

#root {
  overflow: auto;
}

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--bg-primary);
    color: var(--primary);
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
    position: relative;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  a,
  a:active,
  a:hover,
  a:focus {
    text-decoration: none;
  }
  a:active,
  a:hover,
  a:focus {
    outline: 0 none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    list-style: outside none none;
  }
  button {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
