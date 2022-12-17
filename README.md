# Heuron 기업과제

## 💻 프로젝트 실행방법

```
git clone https://github.com/blackgar/heuron.git
cd heuron

yarn install
yarn start

or

npm install
npm start
```

## 🌏 배포링크

http://wanted610.s3-website.ap-northeast-2.amazonaws.com/

## 👋 자기소개

<table>
    <tr>
        <td height="140px" align="center"> 
          <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" />
          </a> 
        </td>
        <td>
          안녕하세요 윤관입니다.<br>
          안녕하세요 윤관입니다.<br>
          안녕하세요 윤관입니다.<br>
          안녕하세요 윤관입니다.<br>
          안녕하세요 윤관입니다.<br>
          안녕하세요 윤관입니다.<br>
        </td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [회고](#회고)

<br>

> ## 프로젝트 개요

-

> ## 프로젝트 진행방법

- <br/>

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br>

> ## 폴더 구조

```

```

> ## 기능별 설명 / Best Practice

### 1.

> ## Git

- <details>
    <summary>브랜치 전략</summary>

  - Main : 최종 완성 코드 업로드 브랜치
  - front/dev : 기능이 완성되거나 리팩토링이 진행된 기능별 브랜치 병합 브랜치
  - front/feat/api : API 호출 기능 구현 브랜치
  - front/feat/list : 목록 화면 구현 브랜치
  - front/feat/detail : 상세 화면 구현 브랜치
  - front/feat/loading : 로딩창 구현 브랜치

  </details>

- <details>
    <summary>커밋 컨벤션</summary>
    
    - feat : 새로운 기능 추가될 때
    - fix : 버그 수정할 때
    - docs : 문서 수정
    - style : 코드 내용 변경 없이 포맷팅이나 세미콜론 등의 작은 코드 스타일 변경할 때
    - refactor : 코드 리팩토링 했을 때
    - test : 테스트 코드를 추가하거나 리팩토링 할 때
    - chore : 빌드관련 수정이나 패키지 매니저 수정할 때
    - remove : 파일이나 폴더 제거할 때
    - rename : 파일이나 폴더 이름 변경할 때
    - move : 파일이나 폴더 구조 변경할 때
    - clean : 코드 포맷팅, 디펜던시 제거, 세미콜론 누락, 코드 변경이 없는 경우
    - deps : 디펜던시 추가할 때

  </details>

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser", // eslint를 typescript에서 쓸 수 있도록 변환
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["error", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

-
