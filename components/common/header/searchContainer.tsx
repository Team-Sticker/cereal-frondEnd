import styled from "@emotion/styled";
import { NextPage } from "next";
import { theme } from "styles/theme";

const SearchContainer: NextPage = () => {
  return (
    <SearchWrap>
      <Logo />
      <SearchBar>
        <SearchIcon />
        <SearchInput />
      </SearchBar>
    </SearchWrap>
  );
};

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;

  background-image: url("/img/icon/searchIcon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px;
  flex: 0 0 20px;
`;

const SearchInput = styled.input`
  font-size: 10px;
  height: 20px;
  width: 144px;
  background-color: transparent;
`;

const SearchBar = styled.div`
  width: 180px;
  height: 36px;
  background-color: ${theme.newGrayColor};
  border-radius: 6px;
  padding: 8px;

  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 42px;
  aspect-ratio: 1;
  border-radius: 21px;

  background-color: ${theme.mainColor};
`;

const SearchWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default SearchContainer;
