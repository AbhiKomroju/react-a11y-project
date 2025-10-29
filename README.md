# String Calculator - Accessible React App

> A fully accessible string calculator built with React, TypeScript, and TDD methodology.

## 🚀 Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Run development server
npm test           # Run all tests
npm run build      # Build for production
```

## ✨ Features

### String Calculator (TDD)

- Empty strings, single/multiple numbers
- Comma and newline delimiters
- Custom delimiters (e.g., `//;\n1;2`)
- Negative number validation
- Ignores numbers > 1000
- **8 tests, 100% passing** ✅

### Accessibility (WCAG Compliant)

- ✅ Semantic HTML (`button`, `form`, `main`, `label`)
- ✅ Proper heading hierarchy (h1 → h2)
- ✅ WCAG AA color contrast (#333 on #fff)
- ✅ Keyboard navigation (Tab, Enter)
- ✅ Visible focus indicators
- ✅ Screen reader support (ARIA labels, live regions)
- ✅ Alt text for images

## 📖 Usage

Enter numbers in different formats:

- Comma: `1,2,3` → 6
- Newline: `1\n2\n3` → 6
- Custom: `//;\n1;2` → 3

**Rules:** Negatives throw errors. Numbers > 1000 ignored.

## 🛠️ Tech Stack

- React 19 + TypeScript
- Vite + Vitest
- TDD Methodology

## 📄 License

MIT
