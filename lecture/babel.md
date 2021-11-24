# 바벨 이란

자바 스크립트 코드를 변환해 주는 컴파일러
최신 자바 스크립트를 지원하지 않는 환경에서도 최신 문법 사용가능
JSX문법을 사용하기 위해 바벨 사용
코드를 압축 하기도 함

# 설치

npm init -y  
npm install @babel/core @babel/cli @babel/preset-react

# 바벨 플러그인

변환하능 기능

# 프리셋

여러개의 플러그인을 모아 놓은것

# 바벨 실행 법

npx babel --watch src --out-dir . --presets @babel/preset-react

# npx란

node_modules/.bin 에서 실행

# npx를 사용하면 jsx파일을 변환해준다.
