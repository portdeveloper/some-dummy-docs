---
sidebar_position: 1
---

# Installation & Setup

Get the copy page button plugin up and running in your Docusaurus site in minutes.

## Prerequisites

- Node.js version 18.0 or above
- Existing Docusaurus 3.x site

## Install the Plugin

```bash
npm install docusaurus-plugin-copy-page-button
```

Or with yarn:

```bash
yarn add docusaurus-plugin-copy-page-button
```

## Basic Configuration

Add the plugin to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: ["docusaurus-plugin-copy-page-button"],
};
```

Or in TypeScript (`docusaurus.config.ts`):

```ts
import type {Config} from '@docusaurus/types';

const config: Config = {
  plugins: ['docusaurus-plugin-copy-page-button'],
};

export default config;
```

## Verify Installation

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to any documentation page

3. Look for the copy button in the table of contents sidebar

4. Click it to test the functionality!

## What's Next?

- [Explore customization options](./customization)
- [Learn about advanced features](./advanced-features)
- [See real-world examples](../tutorial-extras/examples)