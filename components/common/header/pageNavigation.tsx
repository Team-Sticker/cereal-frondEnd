import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import { theme } from "styles/theme";

const PageNavigation: NextPage = () => {
  return (
    <PageNav>
      <Link href="/poemBoard">
        <NavItem>시 게시판</NavItem>
      </Link>
      <Link href="/best">
        <NavItem>명예의 전당</NavItem>
      </Link>
      <Link href="/board">
        <NavItem>자유 게시판</NavItem>
      </Link>
      <Link href="/group">
        <NavItem>시리얼 그룹</NavItem>
      </Link>
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
