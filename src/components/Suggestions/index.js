import {
  Container,
  IconsContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ButtonContainer,
  Item,
  ItemContainer,
  ArrowIcon,
  DownloadImage,
} from "./styles";
import User from "../User";
import Button from "../Button";
import RecommendCard from "../RecommendCard/index,";

const people = [
  {
    name: "Neymar Jr",
    username: "@neymarjr",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg",
  },
  {
    name: "Felipe Neto",
    username: "@felipeneto",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg",
  },
  {
    name: "Messi",
    username: "messifansofficial10",
    avatar:
      "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f0813c3e5128223a7d8999788f02d710.jpeg?x-expires=1617714000&x-signature=7gIVOfQ%2BL4MhHfROCJ0irW8XfGw%3D",
  },
  {
    name: "Isis Valverde",
    username: "@isisvalverde",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg",
  },
  {
    name: "Neymar Jr",
    username: "@neymarjr",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg",
  },
  {
    name: "Felipe Neto",
    username: "@felipeneto",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg",
  },
  {
    name: "Messi",
    username: "messifansofficial10",
    avatar:
      "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f0813c3e5128223a7d8999788f02d710.jpeg?x-expires=1617714000&x-signature=7gIVOfQ%2BL4MhHfROCJ0irW8XfGw%3D",
  },
  {
    name: "Isis Valverde",
    username: "@isisvalverde",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg",
  },
  {
    name: "Neymar Jr",
    username: "@neymarjr",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg",
  },
  {
    name: "Felipe Neto",
    username: "@felipeneto",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg",
  },
  {
    name: "Messi",
    username: "messifansofficial10",
    avatar:
      "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f0813c3e5128223a7d8999788f02d710.jpeg?x-expires=1617714000&x-signature=7gIVOfQ%2BL4MhHfROCJ0irW8XfGw%3D",
  },
  {
    name: "Isis Valverde",
    username: "@isisvalverde",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg",
  },
  {
    name: "Neymar Jr",
    username: "@neymarjr",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg",
  },
  {
    name: "Felipe Neto",
    username: "@felipeneto",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg",
  },
  {
    name: "Messi",
    username: "messifansofficial10",
    avatar:
      "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/f0813c3e5128223a7d8999788f02d710.jpeg?x-expires=1617714000&x-signature=7gIVOfQ%2BL4MhHfROCJ0irW8XfGw%3D",
  },
  {
    name: "Isis Valverde",
    username: "@isisvalverde",
    avatar:
      "https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg",
  },
];

const itens = [
  {
    title: "Woah",
    views: "12.7M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg",
  },
  {
    title: "Dance Monkey",
    views: "7.4M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg",
  },
  {
    title: "#youhaveto",
    views: "2.5B views",
    avatar:
      "https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d",
  },
  {
    title: "Can we Kiss Forever?",
    views: "8.7M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg",
  },
  {
    title: "Woah",
    views: "12.7M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg",
  },
  {
    title: "Dance Monkey",
    views: "7.4M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg",
  },
  {
    title: "#youhaveto",
    views: "2.5B views",
    avatar:
      "https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d",
  },
  {
    title: "Can we Kiss Forever?",
    views: "8.7M views",
    avatar:
      "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg",
  },
];

function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icon src="/imagens/facebookIcon.svg"></Icon>
        <Icon src="/imagens/pinterestIcon.svg"></Icon>
        <Icon src="/imagens/twitterIcon.svg"></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item>
              <User key={index} user={person}></User>
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {itens.map((item, index) => (
            <Item>
              <RecommendCard key={index} recommend={item}></RecommendCard>
              <ArrowIcon></ArrowIcon>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/imagens/appstore.png"></DownloadImage>
      <DownloadImage src="/imagens/playstore.png"></DownloadImage>
      <DownloadImage src="/imagens/amazon.png"></DownloadImage>
    </Container>
  );
}

export default Suggestions;
