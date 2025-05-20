# React Internationalization (i18n) Demo

This project demonstrates how to set up internationalization in a React application using i18next and react-i18next.

## Features

- React + TypeScript + Vite
- Language switching (English, Simplified Chinese, and Traditional Chinese)
- Automatic language detection
- Translated UI components

## Installation

```bash
# Install dependencies
npm install
```

## Running the app

```bash
# Start the development server
npm run dev
```

## Project Structure

```
/public
  /locales            # Translation files
    /en               # English translations
      translation.json
    /zh               # Simplified Chinese translations
      translation.json
    /zh-TW            # Traditional Chinese translations
      translation.json
/src
  /assets             # Static assets
  App.tsx             # Main application component
  App.css             # Styles
  i18n.ts             # i18n configuration
  main.tsx            # Application entry point
```

## How to Add More Languages

1. Create a new folder under `/public/locales/` with the language code
2. Add a `translation.json` file with the translations
3. Update the `supportedLngs` array in `src/i18n.ts`
4. Add a language switching button in `App.tsx`

## Libraries Used

- [react-i18next](https://react.i18next.com/) - React bindings for i18next
- [i18next](https://www.i18next.com/) - Internationalization framework
- [i18next-http-backend](https://github.com/i18next/i18next-http-backend) - Load translations via HTTP
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languagedetector) - Detect user language in the browser
