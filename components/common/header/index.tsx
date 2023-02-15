import styled from "@emotion/styled";
import { NextPage } from "next";
import { theme } from "styles/theme";
import AuthButtons from "./authButtons";
import PageNavigation from "./pageNavigation";
import SearchContainer from "./searchContainer";

const Header: NextPage = () => {
  return (
    <HeaderContainer>
      <SearchContainer />
      <PageNavigation />
      <AuthButtons />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  padding: 0 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.whiteColor};

  border-bottom: 1px solid ${theme.lightGrayColor};
`;

export default Header;
