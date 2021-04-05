import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/imagens/logoIcon.svg"></LogoIcon>
          <Logo src="/imagens/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/imagens/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/54215624?s=60&v=4" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
