---
slug: introducing-copy-page-button
title: Introducing the Copy Page Button Plugin
authors: [portdeveloper]
tags: [docusaurus, plugin, ai, markdown, productivity]
---

# Streamline Your Documentation Workflow with AI

Are you tired of manually copying and formatting documentation content when working with AI assistants? The **Copy Page Button Plugin** for Docusaurus is here to revolutionize your workflow!

<!--truncate-->

## The Problem

When working with AI tools like ChatGPT or Claude, documentation teams often need to:

- Copy page content for AI analysis
- Extract specific sections for review
- Share formatted content with team members
- Convert documentation to different formats

The manual process is tedious and error-prone, especially when dealing with complex formatting, code blocks, and admonitions.

## The Solution

Our plugin adds a smart "Copy Page" button to every documentation page that:

### 🎯 Intelligently Extracts Content

The plugin doesn't just copy raw HTML. It:
- Removes navigation and UI elements
- Preserves important formatting
- Converts admonitions to readable text
- Maintains code block syntax highlighting information

### 🤖 Integrates with AI Tools

Built-in integration means you can:
- Open content directly in ChatGPT
- Launch Claude with pre-formatted documentation
- Skip the copy-paste dance entirely

### ⚡ Works Out of the Box

Zero configuration required:
```js
module.exports = {
  plugins: ["docusaurus-plugin-copy-page-button"],
};
```

That's it! The button automatically appears in your table of contents sidebar.

## Real-World Use Cases

### Documentation Review
Use AI to review your documentation for clarity, completeness, and accuracy.

### Content Translation
Quickly translate documentation pages while preserving formatting.

### Knowledge Base Creation
Extract and repurpose documentation content for different audiences.

### Code Documentation
Share code examples with AI for explanation or improvement suggestions.

## Try It Now!

Look for the copy button in the sidebar of this page! Test the different options:

1. **Copy page** - Copies clean markdown to clipboard
2. **View as markdown** - Opens formatted content in new tab
3. **Open in ChatGPT** - Launches ChatGPT with content
4. **Open in Claude** - Opens Claude with documentation

## What's Next?

We're constantly improving the plugin based on community feedback. Upcoming features include:

- Custom content selectors
- Multiple export formats
- Team collaboration features
- Enhanced AI integrations

## Get Started

Install the plugin today and transform your documentation workflow:

```bash
npm install docusaurus-plugin-copy-page-button
```

Visit our [documentation](/docs/intro) for complete setup instructions and customization options.

---

*Have feedback or suggestions? [Open an issue](https://github.com/portdeveloper/docusaurus-plugin-copy-page-button/issues) on GitHub!*