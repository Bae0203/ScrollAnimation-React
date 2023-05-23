import React, { useEffect, useState, useRef } from "react";
import * as S from "./TestScroll.style";

function Test(props) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const ComponentElement = parentRef.current;
    if (!ComponentElement) return;

    const componentRect = ComponentElement.getBoundingClientRect();
    console.log(
      props.title + "컴포넌트의 현재 위치 (높이):",
      componentRect.top
    );
    console.log("컴포넌트의 전체 높이 :", componentRect.height);
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop; //현재 스크롤 위치

      const parentElement = parentRef.current;
      const childElement = childRef.current;
      if (!parentElement || !childElement) return;

      const parentRect = parentElement.getBoundingClientRect();
      const parentHeight = parentRect.height;
      const childRect = childElement.getBoundingClientRect();
      const childHeight = childRect.height;
      const MaxHeight = parentHeight - childHeight; //현재 높이 + 자신의 높이
      const MinHeight = componentRect.top; //현재높이

      const scrollPercent = scrollTop - MinHeight;
      console.log(scrollPercent / MaxHeight);
      if (scrollPercent / MaxHeight < 1 && scrollPercent / MaxHeight > 0) {
        let HeightPercent = (scrollPercent / MaxHeight).toFixed(2) * 2;
        if (HeightPercent > 1) {
          setOpacity(1 - (HeightPercent % 1));
        } else {
          setOpacity(HeightPercent);
        }
      } else {
        setOpacity(0);
      }
      // if (scrollTop <= MinHeight || scrollTop >= MaxHeight) {
      //   setOpacity(0);
      // } else {
      // const scrollPercent = scrollTop - MinHeight;
      // let opacity = scrollPercent / MaxHeight;
      // console.log(props.title, opacity.toFixed(2));
      // let fixOpacity = opacity.toFixed(2);
      // setOpacity(fixOpacity);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.StickyContainer>
      <S.Sticky ref={parentRef}>
        <S.Children opacity={opacity} ref={childRef}>
          {props.title}
        </S.Children>
      </S.Sticky>
    </S.StickyContainer>
  );
}

export default Test;
