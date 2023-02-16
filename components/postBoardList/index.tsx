import { css } from "@emotion/react";
import styled from "@emotion/styled";
import BoardList from "components/common/boardList";
import { NextPage } from "next";
import { useState } from "react";
import { theme } from "styles/theme";

type categoryType = "question" | "communication";
const PostBoardList: NextPage = () => {
  const [selected, setSelected] = useState<categoryType>("communication");
  return (
    <>
      <BoardFilter>
        <CategoryWrap>
          <Category
            type="communication"
            selected={selected}
            onClick={() => setSelected("communication")}
          >
            소통해요
          </Category>
          <Category
            type="question"
            selected={selected}
            onClick={() => setSelected("question")}
          >
            질문해요
          </Category>
        </CategoryWrap>

        <SortSelect>
          <option>최신순</option>
          <option>인기순</option>
        </SortSelect>
      </BoardFilter>
      <BoardList />
    </>
  );
};

const SortSelect = styled.select`
  width: 130px;
  height: 44px;
  padding: 0 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: ${theme.whiteColor} url("/img/icon/selectArrowIcon.svg") no-repeat
    98%;
  background-position: 105px;

  border-radius: 4px;
  border: 1px solid ${theme.lightGrayColor};

  font-size: 16px;
  font-weight: 700;
`;

const Category = styled.div`
  width: 150px;
  height: 52px;
  border-radius: 4px 20px 0 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 700;

  ${({ type, selected }: { type: categoryType; selected: categoryType }) =>
    type === selected
      ? css`
          background-color: ${theme.mainColor};
          color: ${theme.whiteColor};
        `
      : css`
          border: 2px solid ${theme.mainColor};
          border-bottom: none;
          background-color: ${theme.whiteColor};
          color: ${theme.mainColor};
        `}
`;

const CategoryWrap = styled.div`
  display: flex;
`;

const BoardFilter = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default PostBoardList;
