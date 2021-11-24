# 웹팩이란

- 다양한 기능 제공
- 파일 내용을 기반으로 파일 이름에 해시값 추가(효율적 브라우저 캐싱)
- 미사용 코드 제거
- minify
- js에서 css, json, 텍스트들을 일반 모듈처럼 불러오기
- 환경 변수 주입
- 사용하는 가장 큰 이유 -> 모듈 시스템(ESM, commonJS)을 사용하고 싶어서

  ESM es6  
  commonJs node에서 사용

# 설치

npm install webpack webpack-cli react react-dom

# 실행

npx webpack

기존에는 react관련 코드를 받아서 했지만 웹팩을 통해서 사용할 수 있게 된다.
