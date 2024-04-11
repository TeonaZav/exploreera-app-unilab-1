import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
  outline: none;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  height: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:#F6F6F6;
  margin: 0;
  padding: 0;
}
main {
  display: flex;
  flex-direction: column;
 gap: 2.4rem;
 padding-bottom: 2.4rem;
  flex: 1;
}
/* custom scrollbar */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.123);
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.123);
}
::-webkit-scrollbar {
  width: 1rem;
  background-color: rgba(0, 0, 0, 0.123);
}
::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.116);
  background-color: white;
}

ul {
      list-style-type: none;
    }


  button {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    
  }

  h3, h4, h5{
    font-weight: 500;
    color: #424244;
  }
a{
  text-decoration: none;
}


input{
  width: 100%;
  color: #424244;
  background-color: #ffffff;
  border-radius: 0.4rem;
  padding: 1.2rem 2rem;
  height: 5rem;
  border: 1px solid #ff6700;
}


@media (min-width: 50em) {
 main {
    gap: 3rem;
 padding-bottom: 3rem
  }
}

@media (min-width: 90em) {
 main {
    gap: 6rem;
    padding-bottom: 6rem;
  }
}
@media (max-width: 300px) {
 main {
    gap: 2rem;
  }
  h5{
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
  p{
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  a{
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
}
`;

export default GlobalStyle;
