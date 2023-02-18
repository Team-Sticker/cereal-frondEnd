import styled from "@emotion/styled";
import BoardHead from "components/boardHead";
import { NextPage } from "next";
import { theme } from "styles/theme";

const WritePost: NextPage = () => {
  return (
    <WritePostPage>
      <BoardHead type="writePost" />
      <Tip>
        <TipIcon>
          <div />
          <p>Tip</p>
        </TipIcon>
        <TipContent>작품 정보는 추후 수정이 가능합니다.</TipContent>
      </Tip>
      <InputForm>
        <FormTitle>제목</FormTitle>
        <TitleInput placeholder="제목을 입력해주세요" />
      </InputForm>
      <InputForm>
        <FormTitle>내용</FormTitle>
        <ContentInput placeholder="내용을 입력해주세요" />
      </InputForm>
      <SubmitButton>시 등록하기</SubmitButton>
    </WritePostPage>
  );
};

const SubmitButton = styled.button`
  width: 440px;
  height: 70px;
  background-color: ${theme.mainColor};
  font-size: 25px;
  font-weight: bold;
  color: ${theme.whiteColor};
  border-radius: 9px;

  margin: 100px 0;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 20px;
  padding-bottom: 15px;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding-bottom: 15px;
`;

const FormTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
  color: ${theme.strongGrayColor};
`;

const InputForm = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${theme.lightGrayColor};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TipContent = styled.p`
  font-size: 18px;
`;

const TipIcon = styled.div`
  display: flex;

  align-items: center;

  & > div {
    width: 23px;
    height: 27px;
    background-image: url("/img/icon/tipIcon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  & > p {
    font-size: 20px;
    font-weight: bold;
    color: ${theme.mainColor};
  }
`;

const Tip = styled.div`
  width: 100%;

  display: flex;
  gap: 15px;
  align-items: center;

  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.lightGrayColor};
`;

const WritePostPage = styled.main`
  width: 100%;
  height: fit-content;
  padding: 0 15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
`;

export default WritePost;
