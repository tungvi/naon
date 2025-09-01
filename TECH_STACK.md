# Naon Technical Stack Specification

## Backend (Node.js/TypeScript)

### Core Framework & Runtime
- **Node.js (>=22.2)** - Runtime environment
- **NestJS** - Main backend framework with modular architecture
- **Fastify** - HTTP server (instead of Express) with performance optimizations
- **TypeScript (5.7.2)** - Primary programming language

### API & GraphQL
- **Apollo Server (^4.11.0)** - GraphQL server implementation
- **GraphQL (17.0.0-alpha.2)** - API query language
- **GraphQL Subscriptions** - Real-time updates via WebSockets
- **GraphQL Code Generation** - Type-safe client code generation

### Database & ORM
- **PostgreSQL (15.7)** - Primary database (containerized)
- **Knex.js (^3.1.0)** - SQL query builder and migrations
- **TypeORM (^0.3.17)** - Object-relational mapping
- **Redis** - Caching layer (containerized)

### Authentication & Security
- **JWT with RS256 signing** (jsonwebtoken, jose)
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **Azure Key Vault** - Secrets management
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Azure Services Integration
- **Azure Identity** - Authentication with Azure AD
- **Azure Storage Blob** - File storage
- **Azure Service Bus** - Message queuing
- **Azure Key Vault** - Secrets management
- **Azure Monitor** - Application monitoring and telemetry

### Development & Build Tools
- **Nx (21.0.3)** - Monorepo build system
- **Rspack** - Fast bundler (alternative to Webpack)
- **ESLint** - Code linting
- **Vitest** - Testing framework
- **Docker Compose** - Local development environment

---

## Frontend (React/TypeScript)

### Core Framework
- **React (19.1.0)** - UI library
- **TypeScript (5.7.2)** - Type-safe JavaScript
- **Vite (6.2.1)** - Build tool and development server
- **React Router (^6.27.0)** - Client-side routing

### State Management & Data Fetching
- **Apollo Client (^3.10.4)** - GraphQL client with caching
- **Redux Toolkit (^2.1.0)** - State management
- **React Query/TanStack Query (^5.81.5)** - Server state management
- **Zustand (5.0.7)** - Lightweight state management

### UI Components & Styling
- **Tailwind CSS (^3.4.0)** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind CSS v4+
- **Shadcn/ui** - Beautiful, accessible React components built on Radix UI
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility for merging Tailwind classes
- **React Hook Form (^7.52.2)** - Form handling
- **Framer Motion** - Animations

### Development Tools
- **Vite** - Fast development server and bundler
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Playwright** - End-to-end testing

---

## Infrastructure

### Containerization
- **Docker** - Application containerization
- **Docker Compose** - Multi-container orchestration

### Database
- **PostgreSQL 15.7** - Primary database with health checks
- **Redis** - Caching and session storage

---

## Security

### Security Measures
- **Content Security Policy (CSP)** - XSS protection
- **HSTS** - HTTP Strict Transport Security
- **JWT with RS256** - Secure token-based authentication
- **Azure AD Integration** - Enterprise authentication

---

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React/Vite)  │◄──►│   (NestJS)      │◄──►│   (PostgreSQL)  │
│                 │    │                 │    │                 │
│ • Apollo Client │    │ • GraphQL API   │    │ • TypeORM       │
│ • Tailwind CSS  │    │ • Fastify       │    │ • Redis Cache   │
│ • Radix UI      │    │ • JWT Auth      │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Azure Cloud   │
                    │                 │
                    │ • Key Vault     │
                    │ • Storage Blob  │
                    │ • Service Bus   │
                    │ • Monitor       │
                    └─────────────────┘
```

## Development Workflow

1. **Monorepo Structure**: Nx workspace with apps and shared libraries
2. **Code Generation**: GraphQL types generated for type safety
3. **Testing Strategy**: Unit tests (Vitest), E2E tests (Playwright)
4. **Containerization**: Docker for development and production environments
5. **CI/CD**: Nx affected builds for optimal performance
6. **Security**: Azure AD integration with JWT tokens and security headers
