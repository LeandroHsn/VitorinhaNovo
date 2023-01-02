import styled from "styled-components";

const IndexContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #331946;
`;

const IndexConquistas = styled.div`
  min-height: 50vh;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -50px;
  background: #331946;
`;

const LinkContainer = styled.div `
  margin-bottom: 50px; 
  font-size: 20px;
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  a {
    color: #bd6fb5;
    font-size: 20px;
  }
`;

const IndexMain = styled.main`
  z-index: 1;
  padding: 3rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RomanticText = styled.p`
  font-size: 20px;
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  a {
    color: #bd6fb5;
    font-size: 20px;
  }
`;

const RomanticoText = styled.p`
  padding-top: 60px;
  font-size: 50px;
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  a {
    color: #bd6fb5;
    font-size: 20px;
  }
`;

const HourContainer = styled.p`
  font-size: 7rem;
  margin: 0;
  color: #dabfde;
  font-family: "Lato", sans-serif;
`;

const YearsContainer = styled.span`
  color: #dabfde;
  font-family: "Lato", sans-serif;
  font-size: 15rem;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #dabfde;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #dabfde;
  a {
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }
`;

export {
  IndexContainer,
  IndexMain,
  RomanticText,
  HourContainer,
  YearsContainer,
  Footer,
  LinkContainer,
  RomanticoText,
  IndexConquistas,
}; 