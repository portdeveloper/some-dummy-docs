---
sidebar_position: 1
---

# Real-World Examples

See how different sites can customize and use the copy page button plugin.

## Example 1: Minimal Setup

Perfect for getting started quickly.

```js title="docusaurus.config.js"
module.exports = {
  title: 'My Documentation',
  plugins: ["docusaurus-plugin-copy-page-button"],
};
```

**Result**: Button appears in TOC sidebar with default styling.

## Example 2: Custom Branding

Match your brand colors and styling.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              backgroundColor: "#FF6B6B",
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontWeight: "600",
              padding: "8px 16px",
            },
          },
          dropdown: {
            style: {
              backgroundColor: "#FFF5F5",
              border: "2px solid #FF6B6B",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(255, 107, 107, 0.2)",
            },
          },
        },
      },
    ],
  ],
};
```

## Example 3: Fixed Positioning

Position the button in a fixed location on the page.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#2E8B57",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        },
      },
    ],
  ],
};
```

## Example 4: Dark Theme Optimized

Styles that work great with dark themes.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            className: "dark-theme-copy-button",
          },
        },
      },
    ],
  ],
};
```

```css title="src/css/custom.css"
.dark-theme-copy-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dark-theme-copy-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

[data-theme='dark'] .dark-theme-copy-button {
  background: linear-gradient(135deg, #4c63d2 0%, #5b3a8a 100%);
}
```

## Example 5: Mobile-First Design

Optimized for mobile users.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            className: "mobile-optimized-button",
          },
          container: {
            className: "mobile-button-container",
          },
        },
      },
    ],
  ],
};
```

```css title="src/css/custom.css"
.mobile-optimized-button {
  padding: 12px 16px;
  font-size: 16px;
  min-height: 44px; /* iOS minimum touch target */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
}

.mobile-button-container {
  margin: 16px 0;
}

@media (max-width: 768px) {
  .mobile-optimized-button {
    width: 100%;
    padding: 14px;
    font-size: 18px;
  }
}
```

## Example 6: API Documentation Site

Perfect styling for developer documentation.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              backgroundColor: "transparent",
              border: "1px solid var(--ifm-color-primary)",
              color: "var(--ifm-color-primary)",
              borderRadius: "4px",
              padding: "6px 12px",
              fontSize: "14px",
              fontFamily: "var(--ifm-font-family-monospace)",
            },
          },
          dropdown: {
            style: {
              fontFamily: "var(--ifm-font-family-monospace)",
              fontSize: "14px",
            },
          },
        },
      },
    ],
  ],
};
```

## Integration Tips

### With Custom Themes

If you're using a custom theme, ensure the button integrates well:

```js
// Check if TOC sidebar exists before injecting
const tocSidebar = document.querySelector('.table-of-contents');
if (tocSidebar) {
  // Plugin will inject here automatically
}
```

### With Other Plugins

The copy page button plugin works well with other popular Docusaurus plugins:

- **@docusaurus/plugin-content-blog**: Works on blog posts
- **@docusaurus/plugin-content-pages**: Works on custom pages  
- **docusaurus-search-local**: Search results can be copied
- **@docusaurus/theme-live-codeblock**: Code examples are included

### Performance Considerations

For sites with many pages:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        // Plugin is already optimized for performance
        // No additional configuration needed
      },
    ],
  ],
};
```

The plugin automatically:
- Lazy loads only when needed
- Minimizes DOM manipulation
- Uses efficient event listeners
- Cleans up resources properly