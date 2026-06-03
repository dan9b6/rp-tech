# Project Quote Form

A multi-step quote request form built with Vue 3 and TypeScript.

## What it does

Two-step form that collects contact details, validates input, and asks the user to confirm their details before submitting.

- Step 1 - contact details: name (required), email (required), phone number, company
- Step 2 - confirmation: review entered details and tick a confirmation box to enable submission
- Inline validation on required fields with error messages shown on blur
- Enter key advances to the next step when the form is valid
- Fully responsive layout

## Tech

- Vue 3 (Composition API)
- TypeScript
- Vite
- Custom CSS - no UI framework

## Getting started

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```
