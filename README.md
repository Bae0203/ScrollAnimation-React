## 포트폴리오 사이트용 스크롤 애니메이션 만들기
useRef를 배우는겸해서 만들어보았습니다.<br/>
이 테스트를 통해 useRef는 신인걸 알게되었습니다.<br/><br/><br/>
### 간단하게 useRef 정리
개념 : useRef는 하나의 객체(Element)에 대한 모든 정보를 가져온다고 생각하면 편하다<br/>
ex) 예를 들어 const parentRef = useRef(null); <- 안에 div 객체가 들어가있다면 <br/>
parentRef.cuttent.height를 하면 그 객체에 대한 높이가 나온다.<br/>
