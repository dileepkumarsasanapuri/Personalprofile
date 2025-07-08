# Portfolio Website for Dileep Kumar Sasanapuri

## Overview

This is a modern, responsive portfolio website built for Dileep Kumar Sasanapuri, a Computer Science student at VIT-AP University. The application showcases his skills, projects, education, and experience as a full-stack developer and AI/ML enthusiast. The website features a dark theme with geometric background animations and smooth scrolling navigation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with smooth scrolling to sections
2. **Hero Section**: Landing area with animated background and call-to-action buttons
3. **About Section**: Personal introduction with profile image and contact links
4. **Education Section**: Academic background and relevant coursework
5. **Experience Section**: Professional experience with detailed descriptions
6. **Projects Section**: Showcase of key projects with technologies used
7. **Skills Section**: Technical skills organized by categories
8. **Contact Section**: Contact information and social media links
9. **Footer**: Simple footer with copyright information

### Backend Components
1. **Express Server**: RESTful API server with middleware for logging and error handling
2. **Storage Interface**: Abstracted storage layer with in-memory implementation
3. **Database Schema**: User management schema with Drizzle ORM
4. **Route Handler**: Centralized route registration system

## Data Flow

### Frontend Data Flow
1. Single-page application with component-based architecture
2. Intersection Observer API for fade-in animations
3. Smooth scrolling navigation between sections
4. Responsive design adapting to mobile and desktop viewports

### Backend Data Flow
1. Express middleware processes requests with logging
2. Routes are registered through centralized route handler
3. Storage interface abstracts database operations
4. PostgreSQL connection through Neon Database serverless driver

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and transforms
- **Fonts**: Google Fonts (Inter font family)

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Storage**: connect-pg-simple for session management
- **Validation**: Zod for schema validation with drizzle-zod integration

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development**: tsx for TypeScript execution, nodemon-like functionality

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` starts both frontend (Vite) and backend (tsx)
2. **Production Build**: `npm run build` creates optimized frontend bundle and backend distribution
3. **Production Start**: `npm start` runs the production server

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Session Management**: Uses PostgreSQL for session storage in production
- **Static Assets**: Frontend assets served from `/dist/public` directory

### Database Migration
- **Schema Management**: Drizzle Kit handles database migrations
- **Push Command**: `npm run db:push` applies schema changes to database
- **Migration Files**: Stored in `/migrations` directory

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```