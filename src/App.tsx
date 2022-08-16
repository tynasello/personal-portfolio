import { useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/theme/GlobalStyle";
import { DarkTheme, Theme } from "./components/theme/Theme";

import Button from "./components/common/Button";
import Footer from "./components/Footer";
import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";

import { BsFillSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const body = document.body;
  if (body !== null) {
    body.style.background =
      theme === "light" ? "rgb(244, 246, 247)" : "rgb(23, 32, 42)";
  }

  return (
    <ThemeProvider theme={theme === "light" ? Theme : DarkTheme}>
      <>
        <GlobalStyle />
        <SApp>
          <Button
            type="contact"
            onClick={themeToggler}
            style={{ position: "absolute", right: "1rem", top: "1rem" }}
          >
            {theme === "light" ? <MdNightlight /> : <BsFillSunFill />}
          </Button>

          <Intro />
          <Main />
          <Footer />
        </SApp>
      </>
    </ThemeProvider>
  );
}

export default App;

const SApp = styled.div`
  max-width: min(900px, 80vw);
  margin: 6rem auto 2rem auto;
`;
