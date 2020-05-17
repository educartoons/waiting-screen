import React from "react";
import { Container, YellowBlob, PinkBlob } from "./styles";
import GlobalStyles from "../../styles/GlobalStyles";
import Textarea from "../Textarea";
import Figure from "../Figure";
const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <YellowBlob src="images/yellow-blob.svg" />
      <PinkBlob src="images/pink-blob.svg" />
      <Container>
        <Textarea>Iniciamos en breve </Textarea>
        <Figure />
      </Container>
    </>
  );
};

export default Layout;
