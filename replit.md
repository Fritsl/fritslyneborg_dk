# Frits Lyneborg Personal Website

## Overview

This is a personal profile website designed to present professional achievements in a Wikipedia-style format. The application follows a neutral, factual presentation style with a clean, minimalist design. Built as a full-stack TypeScript application, it uses React for the frontend and Express for the backend, with Drizzle ORM configured for PostgreSQL database management.

The website showcases a comprehensive professional profile including sections on robotics, AI innovation, IT leadership, music technology, game development, and other achievements. The design deliberately avoids flashy marketing language in favor of an objective, third-person encyclopedic tone.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type safety
- Wouter for client-side routing (lightweight alternative to React Router)
- Single-page application architecture with minimal route complexity

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library built on top of Radix UI
- Tailwind CSS for utility-first styling
- Custom Wikipedia-inspired design system with specific color tokens (wiki-blue, wiki-border, wiki-light-gray)
- Theme configuration via `theme.json` for professional appearance with light mode

**State Management**
- TanStack Query (React Query) for server state management
- Custom hooks for component-level state (toast notifications, mobile detection)
- No global state management library needed given the static nature of content

**Data Layer**
- Content stored in structured TypeScript data files (`client/src/data/profile.ts`)
- Type-safe data models for PersonData, Sections, Achievements, and References
- Static content approach eliminates need for complex API calls

**Build System**
- Vite for fast development and optimized production builds
- esbuild for server bundling
- TypeScript compilation without emit (type checking only)
- Custom Vite plugins for runtime error overlay and theme management

### Backend Architecture

**Server Framework**
- Express.js for HTTP server
- Custom middleware for request logging and error handling
- Currently minimal route implementation (placeholder in `server/routes.ts`)

**Development vs Production**
- Vite dev server integration in development mode
- Static file serving in production
- Conditional middleware loading based on NODE_ENV

**Storage Layer**
- In-memory storage implementation (`MemStorage` class)
- Interface-based design (`IStorage`) allows for future database implementation
- Currently implements basic user CRUD operations
- Database schema defined but not actively used in current implementation

**Session Management**
- Configured for PostgreSQL session store via `connect-pg-simple`
- Not currently utilized but ready for authentication features

### Database Schema

**ORM & Migration Strategy**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configured
- Schema defined in `shared/schema.ts`
- Migration files output to `./migrations` directory
- Push-based deployment via `npm run db:push`

**Current Schema**
- Users table with id, username, password fields
- Zod validation schemas for insert operations
- Type inference for select operations
- Schema shared between client and server via `@shared` path alias

**Database Connection**
- Neon serverless PostgreSQL configured
- Environment variable-based configuration (DATABASE_URL required)
- Connection pooling handled by Neon driver

### External Dependencies

**Core Infrastructure**
- **Neon Database**: Serverless PostgreSQL hosting
- **SendGrid**: Email service integration (configured but not actively used)
- **Replit**: Development environment with custom Vite plugins for cartographer and runtime error handling

**UI Libraries**
- **Radix UI**: 20+ primitive component packages for accessible UI
- **Tailwind CSS**: Utility-first CSS framework with custom Wikipedia-inspired theme
- **shadcn/ui**: Pre-built component library using Radix primitives

**Development Tools**
- **tsx**: TypeScript execution for development server
- **Drizzle Kit**: Database migration and schema management
- **PostCSS**: CSS processing with Autoprefixer

**Email Integration**
- SendGrid SDK configured for potential contact form functionality
- Client-side email link obfuscation to prevent scraper harvesting

**Asset Management**
- Static assets stored in `attached_assets/` directory
- Images and documents referenced via `@assets` path alias
- Public files (robots.txt, favicon) in `client/public/`

**SEO & Metadata**
- Comprehensive Open Graph and Twitter Card meta tags
- Structured data using Schema.org Person and ItemList types
- Canonical URLs and sitemap configuration