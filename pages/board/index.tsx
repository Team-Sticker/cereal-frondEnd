import styled from "@emotion/styled";
import Banner from "components/banner";

const BoardList = () => {
  const bannerData = {
    title: "시리얼 시인들과\n이야기를 나눠보세요",
    description:
      "진정한 시인은 시도해 보는 것으로써 훨씬 아름다움의 비밀을 발견합니다",
  };
  return (
    <BoardListPage>
      <Banner {...bannerData} />
    </BoardListPage>
  );
};

const BoardListPage = styled.main`
  width: 100%;
  height: fit-content;
`;

export default BoardList;