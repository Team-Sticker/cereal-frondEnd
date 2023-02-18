import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { theme } from "styles/theme";

const tempData = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i,
    title: "시 잘쓰려면 어떻게 해야하나요?",
    write: "배준수배준수배준수",
    createdDate: "2023.01.25",
    like: 1000,
  }));

const lastPageNumber = 10;

const BoardList: NextPage = () => {
  const [boardList, setBoardList] = useState(tempData);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const prevPage = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };
  const nextPage = () => {
    if (pageIndex < lastPageNumber) setPageIndex((prev) => prev + 1);
  };

  const changeShowPageNumbers = () => {
    if (pageIndex === 1) {
      const numbers = Array(Math.min(3, lastPageNumber))
        .fill(0)
        .map((_, i) => i + 1);
      setPageNumbers(numbers);

      return null;
    }

    if (pageIndex === lastPageNumber) {
      const numbers = Array(Math.min(3, lastPageNumber))
        .fill(0)
        .map((_, i) => lastPageNumber - (Math.min(3, lastPageNumber) - i - 1));

      setPageNumbers(numbers);
      return null;
    }

    const numbers = Array(3)
      .fill(0)
      .map((_, i) => pageIndex - 1 + i);

    setPageNumbers(numbers);
  };

  useEffect(() => {
    changeShowPageNumbers();
  }, [pageIndex]);

  return (
    <>
      <BoardListSection>
        <ListHead>
          <TitleHead>제목</TitleHead>
          <WriterHead>작성자</WriterHead>
          <DateHead>날짜</DateHead>
          <LikeCountHead>공감</LikeCountHead>
        </ListHead>
        {boardList.map((boardData) => (
          <BoardRow key={boardData.id}>
            <Title>{boardData.title}</Title>
            <Writer>{boardData.write}</Writer>
            <Date>{boardData.createdDate}</Date>
            <LikeCount>
              {boardData.like < 1000 ? boardData.like : "999+"}
            </LikeCount>
          </BoardRow>
        ))}
      </BoardListSection>
      <PageController>
        <PrevPageBtn onClick={prevPage}>
          <div />
          <p>이전</p>
        </PrevPageBtn>
        <PageNumbers>
          {pageNumbers.map((number) => (
            <PageNumber
              key={number}
              number={number}
              pageIndex={pageIndex}
              onClick={() => setPageIndex(number)}
            >
              {number}
            </PageNumber>
          ))}
        </PageNumbers>
        <NextPageBtn onClick={nextPage}>
          <p>다음</p>
          <div />
        </NextPageBtn>
      </PageController>
    </>
  );
};

const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageNumber = styled.div`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  ${({ number, pageIndex }: { number: number; pageIndex: number }) =>
    number === pageIndex
      ? css`
          background-color: ${theme.mainColor};
          color: ${theme.whiteColor};
        `
      : css`
          background-color: ${theme.whiteColor};
          color: ${theme.strongGrayColor};
          border: 1px solid ${theme.mainColor};
        `}
`;

const PrevPageBtn = styled.button`
  width: 84px;
  height: 40px;

  border-radius: 20px;
  border: 1px solid ${theme.mainColor};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  & > div {
    width: 14px;
    height: 24px;

    background-image: url("/img/icon/arrowIcon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  & > p {
    font-size: 18px;
    color: ${theme.strongGrayColor};
    font-weight: bold;
  }
`;

const NextPageBtn = styled(PrevPageBtn)`
  & > div {
    transform: rotate(180deg);
  }
`;

const PageController = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const HeadText = styled.div`
  color: ${theme.mainColor};
  font-size: 24px;
  font-weight: bold;

  justify-content: center;
  align-items: center;
  margin: 0 15px;

  text-align: center;
`;

const TitleHead = styled(HeadText)`
  flex: 1 1 0;
`;

const LikeCountHead = styled(HeadText)`
  width: 70px;
`;

const WriterHead = styled(HeadText)`
  width: 150px; ;
`;

const DateHead = styled(HeadText)`
  width: 120px;
`;

const ListHead = styled.div`
  width: 100%;
  height: 86px;
  border-top: 3px solid ${theme.mainColor};
  padding: 0 35px;

  display: flex;
  align-items: center;
`;

const BodyText = styled(HeadText)`
  color: ${theme.strongGrayColor};
  font-size: 22px;
  font-weight: normal;
`;

const Title = styled(BodyText)`
  flex: 1 1 0;
  text-align: start;
`;

const LikeCount = styled(BodyText)`
  width: 70px;
`;

const Writer = styled(BodyText)`
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled(BodyText)`
  width: 120px;
`;

const BoardRow = styled.div`
  width: 100%;
  height: 86px;
  border-top: 1.5px solid ${theme.lightGrayColor};

  padding: 0 35px;

  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom: 3px solid ${theme.mainColor};
  }
`;

const BoardListSection = styled.section`
  width: 100%;
  height: fit-content;
`;

export default BoardList;
