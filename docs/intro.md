---
sidebar_position: 1
---

# Copy Page Button Plugin

**Try it out! Look for the copy button in the table of contents sidebar →**

A lightweight Docusaurus plugin that adds a "Copy page" button to your documentation site, making it easy for users to extract page content as markdown for use with LLMs and AI tools.

## ✨ Key Features

- 📋 **Copy page as markdown** - Clean page content extraction
- 👁️ **View as markdown** - Preview extracted content in new tab  
- 🤖 **AI integration** - Direct "Open in ChatGPT" and "Open in Claude" buttons
- ⚡ **Auto-injection** - Automatically adds to table of contents sidebar
- 🎨 **Theme-aware** - Supports light/dark themes
- 📱 **Mobile-friendly** - Responsive design
- 🛠️ **Zero-config** - Works out of the box

## 🚀 Quick Start

### Installation

```bash
npm install docusaurus-plugin-copy-page-button
```

### Basic Usage

Add the plugin to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: ["docusaurus-plugin-copy-page-button"],
};
```

That's it! The button will automatically appear in your table of contents sidebar.

## 🎯 How It Works

The plugin intelligently extracts page content by:

1. **Selecting** the main content area
2. **Removing** navigation, sidebars, and UI elements  
3. **Cleaning** admonition blocks and formatting
4. **Generating** clean markdown with title and URL

Perfect for sharing documentation with AI assistants!
