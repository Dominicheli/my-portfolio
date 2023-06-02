import { ThemeProvider } from "styled-components";
import {
  AboutMeContainer,
  ArticleContainer,
  HeaderContainer,
  HomeContainer,
} from "./App.styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import photo from "./assets/photo.png";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer>
        <div>
          <h1>
            Felipe <span>Dominicheli</span>
          </h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Sobre mim</li>
              <li>Trabalhos</li>
              <li>Habilidades</li>
              <li>Portfolio</li>
              <li>Cursos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
      </HeaderContainer>

      <ArticleContainer>
        <HomeContainer>
          <div className="my-photo">
            <img src={photo} alt="Minha foto" />
            <p className="image-caption">
              <a href="https://github.com/Dominicheli" target="_blank">
                <GithubLogo color="white" weight="fill" size={56} />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-dominicheli-264499130/"
                target="_blank"
              >
                <LinkedinLogo color="white" weight="fill" size={56} />
              </a>
            </p>
          </div>
          <div className="welcome">
            <h2>
              Olá, meu nome é<strong>Felipe Dominicheli</strong>
            </h2>
            <p>
              E sou <strong>Desenvolvedor Front-end</strong>
            </p>
          </div>
        </HomeContainer>
        <AboutMeContainer>Sobre mim</AboutMeContainer>
        <AboutMeContainer>Sobre mim</AboutMeContainer>
        <AboutMeContainer>Sobre mim</AboutMeContainer>
        <AboutMeContainer>Sobre mim</AboutMeContainer>
      </ArticleContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
