"use client";

import styled from "@emotion/styled";

const Button = () => {
  return <ButtonStyle>버튼입니다.</ButtonStyle>;
};

export const ButtonStyle = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 20px;
  background-color: #7acdf4;
  color: #ffffff;
  border: 0;
  cursor: pointer;
`;

export default Button;
