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
        </td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [깃/eslint/prettier](#Git)

<br>

> ## 프로젝트 개요

- 원격 데이터 가공 및 이미지 갤러리 Canvas API로 구현하기 프로젝트
- Canvas API를 활용해 마우스 이벤트에 따라 요구 명세서 기능 구현

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3292f7?style=for-the-badge&logo=meta&logoColor=white"> 
<img src="https://img.shields.io/badge/react--grid--gallery-00b377?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

- Recoil
  - 이미지 리스트 페이지와 이미지 상세 페이지에서 사용하는 데이터가 동일하기 때문에 Recoil로 전역으로 API 데이터를 관리하면서 필요한 곳에서 추가적인 API 호출 없이 데이터를 활용하기 위해 사용
  - 새로고침 시에도 데이터를 유지하기 위해 recoil-persist 활용
- React-Grid-Gallery
  - 이미지 썸네일 리스트 페이지를 이미지 크기에 맞게 그리드 형식으로 구현하기 위해 활용한 라이브러리
  - API로 호출해 받아온 데이터를 라이브러리 내부에서 활용되는 데이터 양식으로 변환해서 사용
- Styled-components
  - 직관적인 태그로 스타일을 꾸밀 수 있다는 장점을 지닌 라이브러리라서 활용
    <br>

> ## 폴더 구조

```
📦src
 ┣ 📂common
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜constant.ts // 일반 상수와 같은 데이터
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂global // 전역 스타일
 ┃ ┃ ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┃ ┃ ┣ 📜styled.d.ts
 ┃ ┃ ┃ ┗ 📜theme.ts
 ┃ ┃ ┣ 📜Loading.ts
 ┃ ┃ ┣ 📜detail.ts
 ┃ ┃ ┣ 📜footer.ts
 ┃ ┃ ┣ 📜header.ts
 ┃ ┃ ┗ 📜list.ts
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜api.ts
 ┃ ┃ ┣ 📜detail.ts
 ┃ ┃ ┗ 📜list.ts
 ┣ 📂components // Atomic Design Pattern형식의 폴더 구조
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜Canvas.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┗ 📜CanvasContent.tsx
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜ImageGallery.tsx
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┗ 📂template
 ┃ ┃ ┣ 📜DetailTemplate.tsx
 ┃ ┃ ┗ 📜ListTemplate.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useMutation.tsx // 커스텀 훅으로 API 요청 및 데이터 변환 로직 구현
 ┣ 📂pages
 ┃ ┣ 📂ImageDetail
 ┃ ┃ ┗ 📜ImageDetail.tsx
 ┃ ┗ 📂ImageList
 ┃ ┃ ┗ 📜ImageList.tsx
 ┣ 📂utils
 ┃ ┣ 📜debounce.tsx // 미세한 동작에도 발생하는 마우스 이벤트 수를 조절하기 위한 debounce 기능 구현
 ┃ ┗ 📜drawCanvas.tsx // Canvas API로 이미지를 그리는 로직
 ┣ 📜App.tsx
 ┣ 📜atom.tsx
 ┗ 📜index.tsx
```

> ## 기능별 설명 / Best Practice

### 1. API 요청 커스텀 훅(hooks/useMutation.tsx)

- API 요청으로 받아오는 데이터는 동일하기 때문에 Recoil을 적극적으로 활용해서 API 요청 데이터를 받아온 적이 있다면 추가적으로 API 요청을 받아오지 않게끔 구현
- react-grid-gallery에서 이미지를 표현할 때 활용하는 데이터 key값은 src인데, 받아오는 데이터는 download_url이라는 key값으로 데이터를 반환해주기 때문에 API 호출 시 받아온 데이터를 src: download_url로 변환해서 atom에 저장한 후 활용
- error 여부와 loading 여부에 대한 객체도 함께 반환 해줌으로써 화면을 구성하기 위한 변수들을 하나의 객체로 관리하여 유연하게 활용할 수 있도록 구현

### 2. 이미지 리스트 페이지

- 최초 페이지 진입 시 API 호출에 따른 loading 페이지 구현
- react-grid-gallery를 활용하여 받아온 이미지 비율을 지킨 상태의 그리드를 보여줄 수 있도록 구현
- react-grid-gallery로 표현된 이미지들을 클릭할 때 내부적으로 index값을 반환해주기 때문에 클릭했을 때 발생하는 이벤트에서 이벤트 값을 가져온다음 상세페이지로 이동할 때 인자로 활용

### 3. 이미지 상세 페이지

- 각 마우스 이벤트를 감지해 휠 이벤트인 경우 이미지 인덱스를 하나 증가시켜서 navigate로 페이지 이동 시켜 다음 이미지가 canvas위에 보일 수 있도록 구현. 이 때, 휠 이벤트는 조금만 움직여도 많은 이벤트가 발생하기 때문에 debounce 기능을 구현해서 1초마다 휠 이벤트가 발생할 수 있도록 구현
- 마우스 왼쪽 오른쪽 버튼은 이벤트에서 반환해주는 값을 활용하여 구분한 다음 드래그 움직임에 맞게 확대/축소/회전 기능을 구현

### 4. 공통

- craco를 활용해서 단축 경로를 활용
- eslint와 prettier을 적용하여 협업을 위한 기반을 마련했고 git에 commit과 push를 남길 때 해당 컨벤션을 잘 지키기 위해 husky를 적용해 지속적으로 문제가 있는지 체크할 수 있도록 구현
- gitignore로 업로드가 필요없는 파일들을 제외하도록 구현

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
    - test : 테스트 코드를 추가하거나 리팩토링할 때
    - chore : 빌드관련 수정이나 패키지 매니저 수정 등 기타 수정사항 발생할 때
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
