# Tag Input UI - Code Challenge

This is a [Next.js](https://nextjs.org/) project reprecenting a component to add, remove and search tags.

## Features

- Add and Remove Tags
- Fuzzy Search
- SSR
- Retrive Tags list before the page load (on back-end) and passing it to the front-end for further usage [Tags Endpoint (GET)](https://tag-input-ui.vercel.app/api/tags)

## Frameworks and Libraries

- [NextJS](https://nextjs.org/) - Handling Fron-End, API Endpoint and SSR
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Fuzzy Search](https://www.npmjs.com/package/fuzzy-search) - Simple lightweight Fuzzy Search library written in JavaScript, with zero dependencies!
- [Styled-Components](https://styled-components.com/) - styled-components lets us write actual CSS in our JavaScript
- [React-Toastify](https://www.npmjs.com/package/react-toastify) - React-Toastify allow us to add notifications to our app with ease.

## List of Components

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| TagInput      | The Main component                                           |
| BaseTextInput | The Text Input that users can type the tags on               |
| List          | Responsible for showing and managing Suggestion list of tags |
| Tags          | Responsible for showing the selected/added tags              |

## Getting Started

First, Install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Online Version

[Tag Input UI - Code Challenge (Deployed to Vercel)](https://tag-input-ui.vercel.app/)
