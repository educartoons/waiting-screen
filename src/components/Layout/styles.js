import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YellowBlob = styled.img`
  position: absolute;
  top: -30vw;
  right: -50vw;
  width: 150vw;
  height: 150vh;
  filter: blur(100px);
  animation: 20s ease-in-out 0s infinite normal none running yellowMove;
  @keyframes yellowMove {
    40% {
      transform: translate(40vw, 0vh);
    }
    80% {
      transform: translate(0vw, 0vh);
    }
  }
`;

export const PinkBlob = styled.img`
  position: absolute;
  top: 0vw;
  left: 0vw;
  width: 80vw;
  height: 90vh;
  filter: blur(100px);
  animation: 10s ease-in-out 0s infinite normal none running pinkMove;
  @keyframes pinkMove {
    40% {
      transform: translate(40vw, 0vh);
    }
    80% {
      transform: translate(0vw, -20vh);
    }
  }
`;
