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
    console.log("컴포넌트의 현재 위치 (높이):", componentRect.top);
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
      const MaxHeight = componentRect.top + (parentHeight - childHeight); //현재 높이 + 자신의 높이
      const MinHeight = componentRect.top + childHeight; //현재높이

      console.log(
        "현재 높이 : ",
        scrollTop,
        ", MaxHeight : ",
        MaxHeight,
        ", MinHeight : ",
        MinHeight,
        ", (parentHeight - childHeight) : ",
        parentHeight,
        childHeight
      );

      if (scrollTop <= MinHeight || scrollTop >= MaxHeight) {
        setOpacity(0);
      } else {
        const scrollPercent = scrollTop - MinHeight;
        let opacity = 1 - scrollPercent / MaxHeight;
        setOpacity(1);
      }
      //   parentHeight -= childHeight;

      //   console.log(childRect);
      //   const scrollTop =
      //     window.pageYOffset || document.documentElement.scrollTop;
      //   console.log(props.title, parentRect);

      //   let newOpacity;
      //   if (scrollTop <= parentRect.top) {
      //     newOpacity = 1;
      //   } else if (scrollTop >= parentRect.top + parentHeight) {
      //     newOpacity = 0;
      //   } else {
      //     const scrollOffset = scrollTop - parentRect.top;
      //     newOpacity = 1 - scrollOffset / parentHeight;
      //   }

      //   setOpacity(newOpacity);
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
