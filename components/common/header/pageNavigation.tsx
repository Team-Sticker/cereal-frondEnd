import styled from "@emotion/styled";
import { NextPage } from "next";
import { theme } from "styles/theme";

const PageNavigation: NextPage = () => {
  return (
    <PageNav>
      <NavItem>시 게시판</NavItem>
      <NavItem>명예의 전당</NavItem>
      <NavItem>자유 게시판</NavItem>
      <NavItem>시리얼 그룹</NavItem>
    </PageNav>
  );
};

const NavItem = styled.p`
  font-size: 14px;
  color: ${theme.strongGrayColor};
  font-weight: 700;
`;

const PageNav = styled.nav`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 36px;
`;

export default PageNavigation;
