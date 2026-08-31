
# Blackwall

A modern, reusable web component library built with **Stencil** and **TypeScript**. Blackwall provides a collection of customizable UI components designed for building fast, responsive applications.

## About the Project

**Blackwall** is a comprehensive component library that leverages Stencil to create framework-agnostic web components. Components are written in TypeScript and JSX, offering type safety and developer-friendly APIs. The library includes built-in theming support and comes with extensive testing coverage using Vitest.

### Key Features

- 🚀 **Fast and Lightweight** - Built with Stencil for optimal performance
- 🎨 **Themeable Components** - Built-in theme system with customizable styling
- 📦 **Framework Agnostic** - Works with any JavaScript framework or vanilla JS
- ✅ **Well Tested** - Comprehensive unit and E2E tests with Vitest
- 🎯 **TypeScript First** - Full type safety and excellent IDE support
- 📱 **Responsive Design** - Mobile-first component design

## Components

The library includes the following components with the `bw-` prefix:

| Component | Purpose |
|-----------|---------|
| **bw-btn** | Button component with customizable size, radius, and border styling |
| **bw-card** | Card component for displaying content with images, descriptions, and actions |
| **bw-container** | Container/wrapper component for layout composition |
| **bw-img** | Image component with enhanced loading and display capabilities |
| **bw-input** | Form input component for text input with validation support |
| **bw-modal** | Modal dialog component for overlays and popups |
| **bw-nav** | Navigation component for building navigation bars |
| **my-component** | Example component demonstrating Stencil patterns |

## Project Structure

```
blackwall/
├── src/
│   ├── components/          # Individual component implementations
│   │   ├── bw-btn/         # Button component
│   │   ├── bw-card/        # Card component
│   │   ├── bw-container/   # Container component
│   │   ├── bw-img/         # Image component
│   │   ├── bw-input/       # Input component
│   │   ├── bw-modal/       # Modal component
│   │   ├── bw-nav/         # Navigation component
│   │   └── my-component/   # Example component
│   ├── models/             # TypeScript interfaces and types
│   │   ├── ILink.ts        # Link interface
│   │   └── themes.ts       # Theme definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Library entry point
├── www/                    # Development server assets
├── loader/                 # Loader scripts for different module formats
├── dist/                   # Compiled output
├── package.json            # Project dependencies and scripts
├── stencil.config.ts       # Stencil build configuration
├── tsconfig.json           # TypeScript configuration
└── vitest.config.ts        # Vitest configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/blackwall.git
cd blackwall
npm install
```

### Development

Start the development server with hot reload:

```bash
npm start
```

The dev server will run on `http://localhost:3333` with live reloading enabled.

### Building

Build the components for production:

```bash
npm run build
```

The compiled output will be available in the `dist/` directory and `loader/` directory for different module formats (ESM, CJS, etc.).

### Testing

Run the complete test suite:

```bash
npm test
```

Run tests in watch mode for development:

```bash
npm run test:watch
```

Tests are written with Vitest and include:
- Unit tests (`.spec.tsx` files)
- E2E tests (`.e2e.ts` files)

## Using Blackwall Components

### As a Node Module

```typescript
import { defineCustomElements } from 'blackwall/loader';

defineCustomElements();
```

Then use components in your HTML:

```html
<bw-btn name="Click Me" size="1.5rem"></bw-btn>

<bw-card 
  name="Card Title"
  description="This is a card component"
  img-src="./image.jpg"
  img-alt="Description"
  tag-title="Tags"
  tags="['tag1', 'tag2']"
>
</bw-card>
```

### Via CDN

```html
<script src="https://unpkg.com/blackwall@latest/dist/blackwall/blackwall.esm.js"></script>

<bw-btn name="Click Me"></bw-btn>
```

## Theming

Blackwall includes a built-in theming system. Themes are defined in the `src/models/themes.ts` file:

```typescript
const ThemeOptions = {
  skyLight: {
    color: "#ffffff",
    primary: "#131b2e",
    secondary: "#0b0f19",
    // size scale
    xxxl: "4rem",
    xxl: "3rem",
    xl: "2rem",
    lg: "1.5rem",
    md: "1.2rem",
    sm: "0.8rem",
  }
};
```

## Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build components for production
- `npm test` - Run unit and E2E tests
- `npm run test:watch` - Run tests in watch mode
- `npm run generate` - Generate a new component scaffold

## Generating New Components

Use the Stencil generator to scaffold new components:

```bash
npm run generate
```

Follow the prompts to create a new component with proper structure and tests.

## License

MIT © Blackwall

## Support

For issues, questions, or contributions, please visit the project repository or contact the development team.

There are two strategies we recommend for using web components built with Stencil.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Stencil docs](https://stenciljs.com/docs/publishing).

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.
