import * as S from "./style/Test.style";
import React, { useRef } from "react";
import Sex from "./components/TestScroll";

function Test() {
  return (
    <S.Main>
      <Sex title="안녕하세요?" />
      <Sex title="반가워요" />
    </S.Main>
  );
}

export default Test;
