import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 5rem;
  display: flex;
  justify-content: center;
  background: ${props => props.theme["gray-900"]};
  

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  h1 {
    width: 40%;
    color: ${props => props.theme.white}
  }

  span {
    color: ${props => props.theme["green-300"]}
  }

  nav {
    width: 100%;
    display: flex;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  li {
    list-style-type: none;
    cursor: pointer;
    transition: 0.5s all;
    font-weight: 700;
  }

  li:hover {
    color: ${props => props.theme["green-300"]};
    transition: 0.5s all;
  }
`

export const ArticleContainer = styled.article`
`

export const HomeContainer = styled.section`
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding-top: 7rem;


  .my-photo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid ${props => props.theme["green-500"]};

    img {
      border: 5px solid ${props => props.theme["green-500"]};
      margin: 10px;
      width: 450px;
      height: 450px;
      
  }

  .image-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    font-size: 56px;
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    gap: 8px;
    border-radius: 10px;

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  }

  .my-photo img:hover {
    filter: blur(3px);
  }

  .my-photo:hover .image-caption {
    display: flex;
    gap: 8px;
    opacity: 1;
    border-radius: 10px;
    cursor: pointer;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    h2 {
      display: flex;
      flex-direction: column;
      width: 500px;

      strong {
        color: ${props => props.theme.white};
        font-size: 4rem;
      }
    }

    p {
      display: flex;
      text-align: left;
      font-size: 2rem;
      gap: 8px;

      strong {
        color: ${props => props.theme["green-300"]}
      }
    }

  }
`

export const AboutMeContainer = styled.section`
  width: 500px;
  height: 500px;
`