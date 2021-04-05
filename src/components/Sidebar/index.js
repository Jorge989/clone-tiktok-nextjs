import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./styles";
import User from "../User";
function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/imagens/homeIcon.svg"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/imagens/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>

        <User
          user={{
            name: "Will Smith",
            username: "willsmith",
            avatar:
              "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1617638400&x-signature=HmoqpHxzWgik8veRBkLXH%2B0G4FA%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          {" "}
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          {" "}
          <a>Privacidade</a>
        </Links>
        <Links margin>
          {" "}
          <a>® 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}
export default Sidebar;
