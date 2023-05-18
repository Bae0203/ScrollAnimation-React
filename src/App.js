import "./style/App.style.css";
import { useEffect, useState } from "react";
import * as S from "./style/App.style";

export default function App() {
  const [a, b] = useState(0);
  function onScroll() {
    b(window.scrollY);
    console.log(a);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [a]);
  return (
    <div className="App">
      <S.Main>
        <S.StickyContainer>
          <S.Sticky>
            <p className="title">안녕하세요.</p>
          </S.Sticky>
        </S.StickyContainer>
        <S.StickyContainer>
          <S.Sticky>
            <p className="context">처음 뵙겠습니다.</p>
          </S.Sticky>
        </S.StickyContainer>
      </S.Main>
    </div>
  );
}
