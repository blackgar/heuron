# Heuron ๊ธฐ์๊ณผ์ 

## ๐ป ํ๋ก์ ํธ ์คํ๋ฐฉ๋ฒ

```
git clone https://github.com/blackgar/heuron.git
cd heuron

yarn install
yarn start

or

npm install
npm start
```

## ๐ ์๊ธฐ์๊ฐ

<table>
    <tr>
        <td height="140px" align="center"> 
          <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" />
          </a> 
        </td>
        <td>
          ์๋ํ์ธ์ ์ค๊ด์๋๋ค.<br>
        </td>
    </tr>
</table>
<br>

> ## ๋ชฉ์ฐจ

- [ํ๋ก์ ํธ ๊ฐ์](#ํ๋ก์ ํธ-๊ฐ์)
- [ํด๋ ๊ตฌ์กฐ](#ํด๋-๊ตฌ์กฐ)
- [๊ธฐ๋ฅ๋ณ ์ค๋ช / Best Practice](#๊ธฐ๋ฅ๋ณ-์ค๋ช--best-practice)
- [๊น/eslint/prettier](#Git)

<br>

> ## ํ๋ก์ ํธ ๊ฐ์

- ์๊ฒฉ ๋ฐ์ดํฐ ๊ฐ๊ณต ๋ฐ ์ด๋ฏธ์ง ๊ฐค๋ฌ๋ฆฌ Canvas API๋ก ๊ตฌํํ๊ธฐ ํ๋ก์ ํธ
- Canvas API๋ฅผ ํ์ฉํด ๋ง์ฐ์ค ์ด๋ฒคํธ์ ๋ฐ๋ผ ์๊ตฌ ๋ช์ธ์ ๊ธฐ๋ฅ ๊ตฌํ

> ## ์ฌ์ฉ๊ธฐ์ 

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3292f7?style=for-the-badge&logo=meta&logoColor=white"> 
<img src="https://img.shields.io/badge/react--grid--gallery-00b377?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

- Recoil
  - ์ด๋ฏธ์ง ๋ฆฌ์คํธ ํ์ด์ง์ ์ด๋ฏธ์ง ์์ธ ํ์ด์ง์์ ์ฌ์ฉํ๋ ๋ฐ์ดํฐ๊ฐ ๋์ผํ๊ธฐ ๋๋ฌธ์ Recoil๋ก ์ ์ญ์ผ๋ก API ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌํ๋ฉด์ ํ์ํ ๊ณณ์์ ์ถ๊ฐ์ ์ธ API ํธ์ถ ์์ด ๋ฐ์ดํฐ๋ฅผ ํ์ฉํ๊ธฐ ์ํด ์ฌ์ฉ
  - ์๋ก๊ณ ์นจ ์์๋ ๋ฐ์ดํฐ๋ฅผ ์ ์งํ๊ธฐ ์ํด recoil-persist ํ์ฉ
- React-Grid-Gallery
  - ์ด๋ฏธ์ง ์ธ๋ค์ผ ๋ฆฌ์คํธ ํ์ด์ง๋ฅผ ์ด๋ฏธ์ง ํฌ๊ธฐ์ ๋ง๊ฒ ๊ทธ๋ฆฌ๋ ํ์์ผ๋ก ๊ตฌํํ๊ธฐ ์ํด ํ์ฉํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - API๋ก ํธ์ถํด ๋ฐ์์จ ๋ฐ์ดํฐ๋ฅผ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ด๋ถ์์ ํ์ฉ๋๋ ๋ฐ์ดํฐ ์์์ผ๋ก ๋ณํํด์ ์ฌ์ฉ
- Styled-components
  - ์ง๊ด์ ์ธ ํ๊ทธ๋ก ์คํ์ผ์ ๊พธ๋ฐ ์ ์๋ค๋ ์ฅ์ ์ ์ง๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ผ์ ํ์ฉ
    <br>

> ## ํด๋ ๊ตฌ์กฐ

```
๐ฆsrc
 โฃ ๐common
 โ โฃ ๐constants
 โ โ โ ๐constant.ts // ์ผ๋ฐ ์์์ ๊ฐ์ ๋ฐ์ดํฐ
 โ โฃ ๐styles
 โ โ โฃ ๐global // ์ ์ญ ์คํ์ผ
 โ โ โ โฃ ๐GlobalStyle.tsx
 โ โ โ โฃ ๐styled.d.ts
 โ โ โ โ ๐theme.ts
 โ โ โฃ ๐Loading.ts
 โ โ โฃ ๐detail.ts
 โ โ โฃ ๐footer.ts
 โ โ โฃ ๐header.ts
 โ โ โ ๐list.ts
 โ โ ๐types
 โ โ โฃ ๐api.ts
 โ โ โฃ ๐detail.ts
 โ โ โ ๐list.ts
 โฃ ๐components // Atomic Design Patternํ์์ ํด๋ ๊ตฌ์กฐ
 โ โฃ ๐atoms
 โ โ โฃ ๐Canvas.tsx
 โ โ โ ๐Spinner.tsx
 โ โฃ ๐molecules
 โ โ โ ๐CanvasContent.tsx
 โ โฃ ๐organisms
 โ โ โฃ ๐Footer.tsx
 โ โ โฃ ๐Header.tsx
 โ โ โฃ ๐ImageGallery.tsx
 โ โ โ ๐Loading.tsx
 โ โ ๐template
 โ โ โฃ ๐DetailTemplate.tsx
 โ โ โ ๐ListTemplate.tsx
 โฃ ๐hooks
 โ โ ๐useMutation.tsx // ์ปค์คํ ํ์ผ๋ก API ์์ฒญ ๋ฐ ๋ฐ์ดํฐ ๋ณํ ๋ก์ง ๊ตฌํ
 โฃ ๐pages
 โ โฃ ๐ImageDetail
 โ โ โ ๐ImageDetail.tsx
 โ โ ๐ImageList
 โ โ โ ๐ImageList.tsx
 โฃ ๐utils
 โ โฃ ๐debounce.tsx // ๋ฏธ์ธํ ๋์์๋ ๋ฐ์ํ๋ ๋ง์ฐ์ค ์ด๋ฒคํธ ์๋ฅผ ์กฐ์ ํ๊ธฐ ์ํ debounce ๊ธฐ๋ฅ ๊ตฌํ
 โ โ ๐drawCanvas.tsx // Canvas API๋ก ์ด๋ฏธ์ง๋ฅผ ๊ทธ๋ฆฌ๋ ๋ก์ง
 โฃ ๐App.tsx
 โฃ ๐atom.tsx
 โ ๐index.tsx
```

> ## ๊ธฐ๋ฅ๋ณ ์ค๋ช / Best Practice

### 1. API ์์ฒญ ์ปค์คํ ํ(hooks/useMutation.tsx)

- API ์์ฒญ์ผ๋ก ๋ฐ์์ค๋ ๋ฐ์ดํฐ๋ ๋์ผํ๊ธฐ ๋๋ฌธ์ Recoil์ ์ ๊ทน์ ์ผ๋ก ํ์ฉํด์ API ์์ฒญ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์จ ์ ์ด ์๋ค๋ฉด ์ถ๊ฐ์ ์ผ๋ก API ์์ฒญ์ ๋ฐ์์ค์ง ์๊ฒ๋ ๊ตฌํ
- react-grid-gallery์์ ์ด๋ฏธ์ง๋ฅผ ํํํ  ๋ ํ์ฉํ๋ ๋ฐ์ดํฐ key๊ฐ์ src์ธ๋ฐ, ๋ฐ์์ค๋ ๋ฐ์ดํฐ๋ download_url์ด๋ผ๋ key๊ฐ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ฐํํด์ฃผ๊ธฐ ๋๋ฌธ์ API ํธ์ถ ์ ๋ฐ์์จ ๋ฐ์ดํฐ๋ฅผ src: download_url๋ก ๋ณํํด์ atom์ ์ ์ฅํ ํ ํ์ฉ
- error ์ฌ๋ถ์ loading ์ฌ๋ถ์ ๋ํ ๊ฐ์ฒด๋ ํจ๊ป ๋ฐํ ํด์ค์ผ๋ก์จ ํ๋ฉด์ ๊ตฌ์ฑํ๊ธฐ ์ํ ๋ณ์๋ค์ ํ๋์ ๊ฐ์ฒด๋ก ๊ด๋ฆฌํ์ฌ ์ ์ฐํ๊ฒ ํ์ฉํ  ์ ์๋๋ก ๊ตฌํ

### 2. ์ด๋ฏธ์ง ๋ฆฌ์คํธ ํ์ด์ง

- ์ต์ด ํ์ด์ง ์ง์ ์ API ํธ์ถ์ ๋ฐ๋ฅธ loading ํ์ด์ง ๊ตฌํ
- react-grid-gallery๋ฅผ ํ์ฉํ์ฌ ๋ฐ์์จ ์ด๋ฏธ์ง ๋น์จ์ ์งํจ ์ํ์ ๊ทธ๋ฆฌ๋๋ฅผ ๋ณด์ฌ์ค ์ ์๋๋ก ๊ตฌํ
- react-grid-gallery๋ก ํํ๋ ์ด๋ฏธ์ง๋ค์ ํด๋ฆญํ  ๋ ๋ด๋ถ์ ์ผ๋ก index๊ฐ์ ๋ฐํํด์ฃผ๊ธฐ ๋๋ฌธ์ ํด๋ฆญํ์ ๋ ๋ฐ์ํ๋ ์ด๋ฒคํธ์์ ์ด๋ฒคํธ ๊ฐ์ ๊ฐ์ ธ์จ๋ค์ ์์ธํ์ด์ง๋ก ์ด๋ํ  ๋ ์ธ์๋ก ํ์ฉ

### 3. ์ด๋ฏธ์ง ์์ธ ํ์ด์ง

- ๊ฐ ๋ง์ฐ์ค ์ด๋ฒคํธ๋ฅผ ๊ฐ์งํด ํ  ์ด๋ฒคํธ์ธ ๊ฒฝ์ฐ ์ด๋ฏธ์ง ์ธ๋ฑ์ค๋ฅผ ํ๋ ์ฆ๊ฐ์์ผ์ navigate๋ก ํ์ด์ง ์ด๋ ์์ผ ๋ค์ ์ด๋ฏธ์ง๊ฐ canvas์์ ๋ณด์ผ ์ ์๋๋ก ๊ตฌํ. ์ด ๋, ํ  ์ด๋ฒคํธ๋ ์กฐ๊ธ๋ง ์์ง์ฌ๋ ๋ง์ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๊ธฐ ๋๋ฌธ์ debounce ๊ธฐ๋ฅ์ ๊ตฌํํด์ 1์ด๋ง๋ค ํ  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ์ ์๋๋ก ๊ตฌํ
- ๋ง์ฐ์ค ์ผ์ชฝ ์ค๋ฅธ์ชฝ ๋ฒํผ์ ์ด๋ฒคํธ์์ ๋ฐํํด์ฃผ๋ ๊ฐ์ ํ์ฉํ์ฌ ๊ตฌ๋ถํ ๋ค์ ๋๋๊ทธ ์์ง์์ ๋ง๊ฒ ํ๋/์ถ์/ํ์  ๊ธฐ๋ฅ์ ๊ตฌํ

### 4. ๊ณตํต

- craco๋ฅผ ํ์ฉํด์ ๋จ์ถ ๊ฒฝ๋ก๋ฅผ ํ์ฉ
- eslint์ prettier์ ์ ์ฉํ์ฌ ํ์์ ์ํ ๊ธฐ๋ฐ์ ๋ง๋ จํ๊ณ  git์ commit๊ณผ push๋ฅผ ๋จ๊ธธ ๋ ํด๋น ์ปจ๋ฒค์์ ์ ์งํค๊ธฐ ์ํด husky๋ฅผ ์ ์ฉํด ์ง์์ ์ผ๋ก ๋ฌธ์ ๊ฐ ์๋์ง ์ฒดํฌํ  ์ ์๋๋ก ๊ตฌํ
- gitignore๋ก ์๋ก๋๊ฐ ํ์์๋ ํ์ผ๋ค์ ์ ์ธํ๋๋ก ๊ตฌํ

> ## Git

- <details>
    <summary>๋ธ๋์น ์ ๋ต</summary>

  - Main : ์ต์ข ์์ฑ ์ฝ๋ ์๋ก๋ ๋ธ๋์น
  - front/dev : ๊ธฐ๋ฅ์ด ์์ฑ๋๊ฑฐ๋ ๋ฆฌํฉํ ๋ง์ด ์งํ๋ ๊ธฐ๋ฅ๋ณ ๋ธ๋์น ๋ณํฉ ๋ธ๋์น
  - front/feat/api : API ํธ์ถ ๊ธฐ๋ฅ ๊ตฌํ ๋ธ๋์น
  - front/feat/list : ๋ชฉ๋ก ํ๋ฉด ๊ตฌํ ๋ธ๋์น
  - front/feat/detail : ์์ธ ํ๋ฉด ๊ตฌํ ๋ธ๋์น
  - front/feat/loading : ๋ก๋ฉ์ฐฝ ๊ตฌํ ๋ธ๋์น

  </details>

- <details>
    <summary>์ปค๋ฐ ์ปจ๋ฒค์</summary>
    
    - feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ๋  ๋
    - fix : ๋ฒ๊ทธ ์์ ํ  ๋
    - docs : ๋ฌธ์ ์์ 
    - style : ์ฝ๋ ๋ด์ฉ ๋ณ๊ฒฝ ์์ด ํฌ๋งทํ์ด๋ ์ธ๋ฏธ์ฝ๋ก  ๋ฑ์ ์์ ์ฝ๋ ์คํ์ผ ๋ณ๊ฒฝํ  ๋
    - refactor : ์ฝ๋ ๋ฆฌํฉํ ๋ง ํ์ ๋
    - test : ํ์คํธ ์ฝ๋๋ฅผ ์ถ๊ฐํ๊ฑฐ๋ ๋ฆฌํฉํ ๋งํ  ๋
    - chore : ๋น๋๊ด๋ จ ์์ ์ด๋ ํจํค์ง ๋งค๋์  ์์  ๋ฑ ๊ธฐํ ์์ ์ฌํญ ๋ฐ์ํ  ๋
    - remove : ํ์ผ์ด๋ ํด๋ ์ ๊ฑฐํ  ๋
    - rename : ํ์ผ์ด๋ ํด๋ ์ด๋ฆ ๋ณ๊ฒฝํ  ๋
    - move : ํ์ผ์ด๋ ํด๋ ๊ตฌ์กฐ ๋ณ๊ฒฝํ  ๋
    - clean : ์ฝ๋ ํฌ๋งทํ, ๋ํ๋์ ์ ๊ฑฐ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ
    - deps : ๋ํ๋์ ์ถ๊ฐํ  ๋

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
  "parser": "@typescript-eslint/parser", // eslint๋ฅผ typescript์์ ์ธ ์ ์๋๋ก ๋ณํ
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var ๊ธ์ง
    "no-multiple-empty-lines": "warn", // ์ฌ๋ฌ ์ค ๊ณต๋ฐฑ ๊ธ์ง
    "no-console": ["error", { "allow": ["warn", "error"] }], // console.log() ๊ธ์ง
    "eqeqeq": "warn", // ์ผ์น ์ฐ์ฐ์ ์ฌ์ฉ ํ์
    "dot-notation": "warn", // ๊ฐ๋ฅํ๋ค๋ฉด dot notation ์ฌ์ฉ
    "no-unused-vars": "warn", // ์ฌ์ฉํ์ง ์๋ ๋ณ์ ๊ธ์ง
    "react/destructuring-assignment": "warn", // state, prop ๋ฑ์ ๊ตฌ์กฐ๋ถํด ํ ๋น ์ ์ฉ
    "react/jsx-pascal-case": "warn", // ์ปดํฌ๋ํธ ์ด๋ฆ์ PascalCase๋ก
    "react/no-direct-mutation-state": "warn", // state ์ง์  ์์  ๊ธ์ง
    "react/jsx-no-useless-fragment": "warn", // ๋ถํ์ํ fragment ๊ธ์ง
    "react/no-unused-state": "warn", // ์ฌ์ฉ๋์ง ์๋ state
    "react/jsx-key": "warn", // ๋ฐ๋ณต๋ฌธ์ผ๋ก ์์ฑํ๋ ์์์ key ๊ฐ์ 
    "react/self-closing-comp": "warn", // ์ํ ํด๋ก์ง ํ๊ทธ ๊ฐ๋ฅํ๋ฉด ์ ์ฉ
    "react/jsx-curly-brace-presence": "warn" // jsx ๋ด ๋ถํ์ํ ์ค๊ดํธ ๊ธ์ง
  }
}

```

<br>
