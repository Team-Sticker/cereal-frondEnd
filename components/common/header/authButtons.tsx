import styled from "@emotion/styled";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { theme } from "styles/theme";

const AuthButtons: NextPage = () => {
  const router = useRouter();

  const goLoginPage = () => router.push("/login");
  const goSignUpPage = () => router.push("/signUp");

  return (
    <ButtonWrap>
      <LoginBtn onClick={goLoginPage}>로그인</LoginBtn>
      <SignUpBtn onClick={goSignUpPage}>회원가입</SignUpBtn>
    </ButtonWrap>
  );
};

const LoginBtn = styled.button`
  width: 105px;
  height: 44px;

  font-size: 16px;
  font-weight: 700;

  background-color: ${theme.whiteColor};
  border: ${theme.mainColor} 1px solid;
  border-radius: 6px;
  color: ${theme.mainColor};
`;

const SignUpBtn = styled(LoginBtn)`
  background-color: ${theme.mainColor};
  border-radius: 6px;
  color: ${theme.whiteColor};
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export default AuthButtons;
