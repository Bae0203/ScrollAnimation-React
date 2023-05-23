import * as S from "./style/Test.style";
import React, { useRef } from "react";
import Test from "./components/TestScroll";

function Test() {
  return (
    <S.Main>
      <Test title="안녕하세요?" isTitle={true} />
      <Test title="반가워요" />
    </S.Main>
  );
}

export default Test;
