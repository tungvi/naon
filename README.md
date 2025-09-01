# Naon

Naon.ai - A scalable monorepo powered by Nx

**Tech Stack:** TypeScript • React • Next.js • NestJS

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or later)
- Yarn (v1.22 or later)

### Installation
```bash
yarn install
```

### Development
```bash
# Serve an application
yarn start [app-name]

# Build an application
yarn build [app-name]

# Run tests
yarn test [app-name]

# Lint code
yarn lint [app-name]
```

## 📁 Workspace Structure

```
naon/
├── apps/           # Applications
├── libs/           # Shared libraries
├── tools/          # Development tools and scripts
├── nx.json         # Nx workspace configuration
├── tsconfig.base.json  # Base TypeScript configuration
└── package.json    # Dependencies and scripts
```

## 🛠️ Nx Commands

### Generate Applications
```bash
# Generate a Next.js application (Frontend)
npx nx g @nx/next:app my-frontend

# Generate a React application (Component Library/SPA)
npx nx g @nx/react:app my-react-app

# Generate a NestJS application (Backend API)
npx nx g @nx/nest:app my-api

# Generate a Node.js application (Services/Tools)
npx nx g @nx/node:app my-service
```

### Generate Libraries
```bash
# Generate a TypeScript utility library
npx nx g @nx/js:lib shared-utils

# Generate a React component library
npx nx g @nx/react:lib ui-components

# Generate a NestJS library (modules/services)
npx nx g @nx/nest:lib shared-backend

# Generate a Node.js library
npx nx g @nx/node:lib shared-services
```

### Useful Commands
```bash
# Show dependency graph
yarn dep-graph

# Run affected tests
yarn affected:test

# Build affected projects
yarn affected:build

# Lint affected projects
yarn affected:lint

# Format code
yarn format

# Update Nx
yarn update
```

## 🏗️ Architecture

This workspace is configured for maximum scalability with:

- **Modular Architecture**: Apps and libs are separated for better organization
- **Dependency Graph**: Nx tracks dependencies between projects
- **Incremental Builds**: Only rebuild what changed
- **Code Sharing**: Shared libraries promote reusability
- **Consistent Tooling**: Unified linting, testing, and formatting

## 📋 Quick Start

### 1. Setup Development Environment
```bash
# Run the automated setup script
./scripts/dev-setup.sh
```

This will:
- Start PostgreSQL and Redis containers
- Create `.env` file from example
- Install dependencies
- Wait for services to be healthy

### 2. Start Development Servers
```bash
# Start backend API (NestJS)
yarn start api

# Start frontend (React + Vite) - in another terminal
yarn start web
```

### 3. Access Your Applications
- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3000
- **pgAdmin**: http://localhost:5050 (admin@naon.ai / admin)

## 🏗️ Current Project Structure

```
naon/
├── apps/
│   ├── api/              # NestJS backend API ✅
│   ├── api-e2e/          # API end-to-end tests
│   ├── web/              # React frontend (Vite) ✅
│   └── web-e2e/          # Frontend e2e tests (Playwright)
├── libs/                 # Shared libraries (ready for your code)
├── docker/
│   └── postgres/init/    # Database initialization
├── scripts/
│   └── dev-setup.sh      # Development environment setup
├── docker-compose.yml    # PostgreSQL + Redis services
├── TECH_STACK.md         # Complete technical specification
└── env.example           # Environment variables template
```

## 🎨 UI Components

The frontend uses **Shadcn/ui** - a collection of beautiful, accessible React components built on top of Radix UI and styled with Tailwind CSS.

### Available Components
- ✅ **Button** - Multiple variants (default, outline, ghost, etc.)
- ✅ **Card** - Content containers with header, body, and footer
- ✅ **Input** - Form input fields with proper styling
- ✅ **Icons** - Lucide React icon library

### Adding More Components
```bash
# The components are manually created following Shadcn/ui patterns
# Add new components in web/src/components/ui/
# Follow the existing structure and styling patterns
```

### Component Usage
```tsx
import { Button, Card, Input } from '../components/ui';

// Use components with full TypeScript support
<Button variant="outline" size="lg">Click me</Button>
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## 🛠️ Development Workflow

### Database Management
```bash
# Start services
docker-compose up -d

# Stop services  
docker-compose down

# Reset database (removes all data)
docker-compose down -v

# View service logs
docker-compose logs -f postgres
```

### Code Generation
```bash
# Generate shared libraries
npx nx g @nx/js:lib shared-utils
npx nx g @nx/react:lib ui-components

# Generate NestJS modules
npx nx g @nx/nest:lib shared-backend
```

## 📚 Resources

- [Nx Documentation](https://nx.dev)
- [Nx Recipes](https://nx.dev/recipes)
- [Nx Community](https://nx.dev/community)
