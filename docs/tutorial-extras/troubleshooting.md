---
sidebar_position: 2
---

# Troubleshooting

Common issues and their solutions when using the copy page button plugin.

## Button Not Appearing

### Check Plugin Installation

Verify the plugin is properly installed and configured:

```bash
npm list docusaurus-plugin-copy-page-button
```

### Verify Configuration

Ensure the plugin is added to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: ["docusaurus-plugin-copy-page-button"],
  // ... other config
};
```

### Check TOC Sidebar

The button auto-injects into the table of contents sidebar. If your theme doesn't have a TOC sidebar, the button won't appear. 

**Solution**: Use custom positioning:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              position: "fixed",
              top: "20px",
              right: "20px",
            },
          },
        },
      },
    ],
  ],
};
```

## Copy Not Working

### Browser Permissions

Modern browsers require HTTPS for clipboard access. Ensure your site runs on:
- `https://` in production
- `http://localhost` in development

### Check Console Errors

Open browser developer tools and check for JavaScript errors:

```bash
# Common error messages:
# "Clipboard API not available"
# "Permission denied"
# "Document not focused"
```

### Fallback Behavior

If clipboard access fails, the plugin should show a modal with selectable text. If this doesn't happen, check for:

1. JavaScript errors blocking execution
2. CSS hiding the modal
3. Theme conflicts

## Styling Issues

### Styles Not Applied

If custom styles aren't working:

1. **Check syntax**: Ensure proper JavaScript object syntax
2. **Verify CSS specificity**: Use more specific selectors if needed
3. **Clear cache**: Try hard refresh (Ctrl+Shift+R)

```js
// Correct syntax
customStyles: {
  button: {
    style: {
      backgroundColor: "#ff0000", // ✅ Correct
    },
  },
}

// Incorrect syntax  
customStyles: {
  button: {
    style: {
      "background-color": "#ff0000", // ❌ Wrong - use camelCase
    },
  },
}
```

### Theme Conflicts

If the button looks broken:

1. **Inspect element** to see what styles are applied
2. **Override with higher specificity**:

```css
/* In your custom.css */
.table-of-contents .copy-page-button {
  background-color: #007bff !important;
  border: none !important;
}
```

### Position Issues

If positioning doesn't work as expected:

```js
// Positioning styles are applied to container, not button
customStyles: {
  button: {
    style: {
      position: "fixed", // ✅ Applied to container
      top: "20px",       // ✅ Applied to container
      backgroundColor: "#ff0000", // ✅ Applied to button
    },
  },
}
```

## Content Extraction Issues

### Missing Content

If some content doesn't appear in the copied text:

1. **Check DOM structure**: The plugin targets standard Docusaurus selectors
2. **Custom content**: May need custom CSS selectors
3. **Dynamic content**: JavaScript-generated content might not be captured

### Formatting Problems

If markdown formatting is incorrect:

1. **Admonition blocks**: Should convert `:::note` to readable text
2. **Code blocks**: Should preserve syntax highlighting info
3. **Links**: Should maintain URL references

### Large Pages

For very large pages:

- **Performance**: Extraction might be slow
- **Memory**: Browser might struggle with large text
- **Solution**: Consider splitting large pages

## Browser-Specific Issues

### Safari

- **Clipboard API**: Requires user interaction
- **HTTPS**: Stricter requirements than other browsers
- **Solution**: Ensure buttons are clicked, not triggered programmatically

### Firefox

- **Permission prompts**: May show clipboard permission dialog
- **Private browsing**: Clipboard access might be restricted
- **Solution**: User needs to grant permission

### Mobile Browsers

- **Touch targets**: Ensure buttons are large enough (minimum 44px)
- **Viewport**: Fixed positioning might behave differently
- **Solution**: Use responsive design principles

## Development Issues

### Hot Reload

During development, if changes don't appear:

```bash
# Clear Docusaurus cache
npm run clear
npm start
```

### Plugin Updates

After updating the plugin:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## Getting Help

### Debugging Steps

1. **Check browser console** for errors
2. **Inspect DOM** to see if button is rendered
3. **Test in different browsers**
4. **Try minimal configuration**

### Minimal Test Configuration

```js
module.exports = {
  title: 'Test Site',
  plugins: ["docusaurus-plugin-copy-page-button"],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
```

### Report Issues

If you find a bug:

1. **Create minimal reproduction case**
2. **Include browser and OS information**
3. **Share configuration and error messages**
4. **Submit issue on [GitHub](https://github.com/portdeveloper/docusaurus-plugin-copy-page-button/issues)**

### Community Support

- **GitHub Discussions**: Ask questions and share tips
- **Discord**: Join Docusaurus community for real-time help
- **Stack Overflow**: Tag questions with `docusaurus` and `copy-page-button`