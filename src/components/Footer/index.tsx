import * as S from "./styles";

import logo from "../../assets/images/logo.png";
import instaLogo from "../../assets/images/Home/instagramLogo.png";
import faceLogo from "../../assets/images/Home/facebookLogo.png";
import twitterLogo from "../../assets/images/Home/twitterLogo.png";

const Footer = () => {
  return (
    <S.Container>
      <h2>
        <img src={logo} alt="efood logo" />
      </h2>

      <S.Logos>
        <div>
          <img src={instaLogo} alt="Instagram logo" />
        </div>
        <div>
          <img src={faceLogo} alt="Facebook logo" />
        </div>
        <div>
          <img src={twitterLogo} alt="Twitter logo" />
        </div>
      </S.Logos>

      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </S.Container>
  );
};

export default Footer;
