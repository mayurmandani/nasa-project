import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, textAlign: "center" }}>
        Site is designed and implemented by Mayur Mandani.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
