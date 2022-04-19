import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import MyProjects from "./components/MyProjects";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${(p) => p.theme.dark};
    color: ${(p) => p.theme.textPrimary};
    line-height: 1.5;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nikhil Joshi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <GlobalStyle />
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <MyWork />
        <MyProjects />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
