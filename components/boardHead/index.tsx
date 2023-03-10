import styled from "@emotion/styled";
import { boardTypeData } from "docs/boardTypeData";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { theme } from "styles/theme";
import { boardType } from "utils/interface/boardTypeData";

interface props {
  type: boardType;
}

const BoardHead: NextPage<props> = ({ type }: props) => {
  const router = useRouter();

  const goWritePage = () => router.push(boardTypeData[type].writeLink);

  return (
    <BoardHeadSection>
      <BoardNameWrap>
        <BoardName>{boardTypeData[type].boardName}</BoardName>
        {boardTypeData[type].writeLink ? (
          <WriteButton onClick={goWritePage}>
            <div />
            <p>글 작성하기</p>
          </WriteButton>
        ) : (
          <></>
        )}
      </BoardNameWrap>
      <TipBox>
        선정성, 폭력성 등을 포함, 부적절하다고 판단되었을 시 통보없이 삭제될 수
        있습니다.
      </TipBox>
    </BoardHeadSection>
  );
};

const TipBox = styled.div`
  width: 100%;
  height: 75px;
  padding-left: 20px;
  border-left: 5px solid ${theme.mainColor};

  background-color: ${theme.newGrayColor};

  display: flex;
  align-items: center;

  font-size: 16px;
  color: ${theme.dailyGrayColor};
`;

const WriteButton = styled.button`
  width: 150px;
  height: 50px;

  border: 1px solid ${theme.lightGrayColor};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  & > div {
    width: 16px;
    aspect-ratio: 1;

    background-image: url("/img/icon/penIcon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  & > p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const BoardNameWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 38px;
`;

const BoardName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const BoardHeadSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 68px;
`;

export default BoardHead;
