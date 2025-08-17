---
sidebar_position: 2
---

# Customization

Customize the appearance and behavior of your copy page button to match your site's design.

## Custom Styling

The plugin accepts a `customStyles` configuration option to style different parts of the button:

### Available Style Targets

- **`button`** - The main copy page button
- **`dropdown`** - The dropdown menu
- **`dropdownItem`** - Individual dropdown items
- **`container`** - The wrapper container

### Style Options

Each target accepts:
- **`className`** - CSS class name(s) to add
- **`style`** - Inline styles object (React format)

## Examples

### Custom Colors

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
            },
          },
          dropdown: {
            style: {
              backgroundColor: "#f8f9fa",
              border: "2px solid #4CAF50",
              borderRadius: "8px",
            },
          },
        },
      },
    ],
  ],
};
```

### Custom Positioning

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
              top: "100px",
              right: "20px",
              zIndex: 1000,
            },
          },
        },
      },
    ],
  ],
};
```

### Using CSS Classes

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            className: "my-custom-copy-button",
          },
          container: {
            className: "copy-button-container",
          },
        },
      },
    ],
  ],
};
```

Then add CSS to your `src/css/custom.css`:

```css
.my-custom-copy-button {
  background: linear-gradient(45deg, #2196f3, #21cbf3);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.my-custom-copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}

.copy-button-container {
  margin: 10px 0;
}
```

## Theme Integration

The plugin automatically adapts to your site's theme. However, you can override specific theme-related styles:

```js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-copy-page-button",
      {
        customStyles: {
          button: {
            style: {
              // Light theme styles
              backgroundColor: "var(--ifm-color-primary)",
              color: "var(--ifm-color-primary-contrast-background)",
            },
          },
        },
      },
    ],
  ],
};
```

## Advanced Styling Tips

### Responsive Design

Use CSS media queries for responsive styling:

```css
.my-custom-copy-button {
  padding: 8px 16px;
}

@media (max-width: 768px) {
  .my-custom-copy-button {
    padding: 6px 12px;
    font-size: 14px;
  }
}
```

### Animation Effects

Add smooth animations:

```css
.my-custom-copy-button {
  transition: all 0.3s ease;
}

.my-custom-copy-button:hover {
  transform: scale(1.05);
}

.my-custom-copy-button:active {
  transform: scale(0.95);
}
```