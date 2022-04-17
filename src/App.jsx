import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import MyProjects from "./components/MyProjects";

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
      <GlobalStyle />
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <MyWork />
        <MyProjects />
      </main>
    </ThemeProvider>
  );
}

export default App;
