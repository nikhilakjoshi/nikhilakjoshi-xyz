import styled from "styled-components";

export const HeroSection = styled.section`
  .checkoutProj {
    border: 1px solid ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.secondary};
  }
`;

export const AboutMeSection = styled.section`
  .aboutmetitle {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 128px;
      background: ${(p) => p.theme.secondary};
      top: calc(50% + 2px);
      margin-left: 2rem;
      opacity: 0.5;
    }
  }
  .skilllist {
    li {
      list-style-image: url(chevron.svg);
      list-style-position: inside;
    }
  }
`;

export const MyWorkSection = styled.section`
  .myworktitle {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 128px;
      background: ${(p) => p.theme.secondary};
      top: calc(50% + 2px);
      right: calc(100% + 2rem);
      opacity: 0.5;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 100ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
`;

export const MyProjectsSection = styled.section`
  .myprojtitle {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 128px;
      background: ${(p) => p.theme.secondary};
      top: calc(50% + 2px);
      margin-left: 2rem;
      opacity: 0.5;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 100ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
`;

export const CompLi = styled.li`
  background: ${(p) => (p.comp == p.selectedComp ? p.theme.secondary : "")} !important;
  color: ${(p) => (p.comp == p.selectedComp ? p.theme.dark : "")};
`;

export const CompRoleDesc = styled.div`
  .descList {
    li {
      list-style-image: url(chevron.svg);
      list-style-position: inside;
      margin: 0.5rem 0;
    }
  }
`;
