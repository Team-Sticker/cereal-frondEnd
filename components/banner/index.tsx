import styled from "@emotion/styled";
import { NextPage } from "next";
import { theme } from "styles/theme";

interface props {
  title: string;
  description: string;
}

const Banner: NextPage<props> = ({ title, description }: props) => {
  return (
    <BannerContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </BannerContainer>
  );
};

const Title = styled.p`
  font-size: 44px;
  font-weight: 700;
  white-space: pre-wrap;
  color: ${theme.whiteColor};
`;

const Description = styled(Title)`
  font-size: 14px;
`;

const BannerContainer = styled.section`
  width: auto;
  aspect-ratio: 1160/400;

  margin-right: -120px;
  margin-bottom: 110px;

  background-image: url("/img/banner/bannberImg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 30px 0 0 30px;

  padding-left: 9%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export default Banner;
