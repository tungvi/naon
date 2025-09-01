# Shadcn/ui Integration Guide

This guide explains how to work with Shadcn/ui components in the Naon web application.

## 🎨 What's Included

### Core Setup
- ✅ **Tailwind CSS** with custom design tokens
- ✅ **CSS Variables** for theming (light/dark mode ready)
- ✅ **Utility Functions** (`cn` for class merging)
- ✅ **Component Structure** following Shadcn/ui patterns

### Available Components
- ✅ **Button** (`web/src/components/ui/button.tsx`)
- ✅ **Card** (`web/src/components/ui/card.tsx`)
- ✅ **Input** (`web/src/components/ui/input.tsx`)

## 🚀 Adding New Components

### Method 1: Manual Creation (Recommended)
1. Visit [ui.shadcn.com](https://ui.shadcn.com/docs/components)
2. Copy the component code
3. Create new file in `apps/web/src/components/ui/`
4. Update imports to use relative paths (`../../lib/utils`)
5. Export in `apps/web/src/components/ui/index.ts`

### Method 2: Using Shadcn CLI (Alternative)
```bash
# Install shadcn CLI globally
yarn global add shadcn-ui@latest

# Navigate to web directory
cd apps/web

# Add components (adjust paths as needed)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

## 📁 File Structure

```
apps/web/src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── index.ts
├── lib/
│   └── utils.ts
└── styles.css
```

## 🎯 Usage Examples

### Basic Components
```tsx
import { Button, Card, Input } from '../components/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button className="mt-4">Submit</Button>
      </CardContent>
    </Card>
  );
}
```

### With Icons
```tsx
import { Button } from '../components/ui/button';
import { Mail, User } from 'lucide-react';

function IconButtons() {
  return (
    <div className="space-x-2">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="outline">
        <User className="mr-2 h-4 w-4" />
        Profile
      </Button>
    </div>
  );
}
```

## 🎨 Theming

### CSS Variables
All colors are defined using CSS variables in `apps/web/src/styles.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### Dark Mode
Dark mode is supported via CSS variables. Toggle with:

```tsx
// Add to your app
<html className="dark">
```

## 🔧 Common Patterns

### Custom Variants
```tsx
// Extend button variants
const customButton = cva(buttonVariants(), {
  variants: {
    intent: {
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-black',
    }
  }
});
```

### Compound Components
```tsx
// Create reusable compound components
function FormCard({ title, children }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
```

## 📚 Resources

- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Class Variance Authority](https://cva.style/docs)
