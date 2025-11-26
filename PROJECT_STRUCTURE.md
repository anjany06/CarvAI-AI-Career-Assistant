# CarvAI Project Structure

This document provides a comprehensive overview of the project's directory structure and file organization.

## 📁 Root Directory Structure

```
CarvAI-AI-Career-Assistant/
├── actions/                    # Server Actions for backend operations
├── app/                       # Next.js App Router pages and layouts
│   ├── (auth)/               # Authentication-related pages
│   ├── (main)/               # Main application pages
│   ├── api/                  # API routes
│   └── lib/                  # App-specific utilities
├── components/               # Reusable React components
│   └── ui/                   # UI components (ShadCN)
├── data/                     # Static data and configurations
├── hooks/                    # Custom React hooks
├── lib/                      # Global utilities and libraries
│   └── inngest/             # Inngest automation functions
├── prisma/                   # Database schema and migrations
│   └── migrations/          # Database migration files
├── public/                   # Static assets (images, icons)
└── [config files]           # Configuration files (see below)
```

## 📂 Detailed Directory Breakdown

### `/actions` - Server Actions
Server-side functions for handling business logic and database operations.

```
actions/
├── cover-letter.js          # Cover letter generation and management
├── dashboard.js             # Dashboard data aggregation
├── interview.js             # Interview assessment logic
├── resume.js                # Resume building and analysis
└── user.js                  # User profile management
```

**Purpose:** Centralized server-side logic for CRUD operations and AI integrations.

---

### `/app` - Next.js Application
Main application using Next.js 15 App Router architecture.

```
app/
├── (auth)/                          # Authentication routes
│   ├── layout.js                    # Auth layout wrapper
│   ├── sign-in/[[...sign-in]]/     # Sign-in page (Clerk)
│   └── sign-up/[[...sign-up]]/     # Sign-up page (Clerk)
│
├── (main)/                          # Protected main application
│   ├── ai-cover-letter/             # Cover letter feature
│   │   ├── _components/             # Private components
│   │   │   ├── cover-letter-generator.jsx
│   │   │   ├── cover-letter-list.jsx
│   │   │   └── cover-letter-preview.jsx
│   │   ├── [id]/page.jsx            # Dynamic cover letter view
│   │   ├── new/page.jsx             # Create new cover letter
│   │   ├── page.jsx                 # Cover letter list
│   │   └── layout.js                # Cover letter section layout
│   │
│   ├── dashboard/                   # Main dashboard
│   │   ├── _components/
│   │   │   └── dashboard-view.jsx
│   │   ├── page.jsx                 # Dashboard page
│   │   └── layout.js                # Dashboard layout
│   │
│   ├── interview/                   # Interview preparation
│   │   ├── _components/
│   │   │   ├── performance-charts.jsx
│   │   │   ├── quiz-list.jsx
│   │   │   ├── quiz-result.jsx
│   │   │   ├── quiz.jsx
│   │   │   └── stats-card.jsx
│   │   ├── mock/page.jsx            # Mock interview page
│   │   ├── page.jsx                 # Interview home
│   │   └── layout.js                # Interview layout
│   │
│   ├── onboarding/                  # User onboarding flow
│   │   ├── _components/
│   │   │   └── onboarding-form.jsx
│   │   ├── page.jsx
│   │   └── layout.js
│   │
│   ├── resume/                      # Resume builder
│   │   ├── _components/
│   │   │   ├── entry-form.jsx
│   │   │   └── resume-builder.jsx
│   │   ├── page.jsx
│   │   └── layout.js
│   │
│   └── layout.js                    # Main app layout
│
├── api/                             # API endpoints
│   └── inngest/route.js             # Inngest webhook handler
│
├── lib/                             # App-specific utilities
│   ├── helper.js                    # Helper functions
│   └── schema.js                    # Validation schemas (Zod)
│
├── globals.css                      # Global styles
├── layout.js                        # Root layout
├── page.jsx                         # Landing page
└── not-found.jsx                    # 404 page
```

**Key Concepts:**
- **(auth)** and **(main)** are route groups (no URL segment)
- **_components** folders contain private components for specific features
- **[id]** indicates dynamic routes
- **[[...sign-in]]** is a catch-all optional route

---

### `/components` - Reusable Components
Global React components used across the application.

```
components/
├── achievements.jsx         # Achievement display component
├── faq.jsx                 # FAQ section
├── features.jsx            # Features showcase
├── footer.jsx              # Site footer
├── header.jsx              # Site header/navigation
├── hero.jsx                # Landing page hero section
├── howItWorks.jsx          # How it works section
├── theme-provider.jsx      # Dark/light theme provider
│
└── ui/                     # ShadCN UI components
    ├── accordion.jsx
    ├── alert-dialog.jsx
    ├── background-beams.jsx
    ├── badge.jsx
    ├── button.jsx
    ├── card.jsx
    ├── dialog.jsx
    ├── dropdown-menu.jsx
    ├── input.jsx
    ├── label.jsx
    ├── moving-border.jsx
    ├── progress.jsx
    ├── radio-group.jsx
    ├── select.jsx
    ├── sonner.jsx          # Toast notifications
    ├── tabs.jsx
    └── textarea.jsx
```

**Purpose:** Reusable UI components following ShadCN design patterns with Radix UI primitives.

---

### `/data` - Static Data
Static configuration and content data.

```
data/
├── faqs.js                # FAQ content
├── features.js            # Feature descriptions
├── howItWorks.js          # Process steps
├── industries.js          # Industry options and data
└── testimonial.js         # User testimonials
```

**Purpose:** Centralized content management for easy updates.

---

### `/hooks` - Custom React Hooks
Reusable React hooks for common patterns.

```
hooks/
└── use-fetch.js           # Custom data fetching hook
```

---

### `/lib` - Global Utilities
Core libraries and utility functions.

```
lib/
├── inngest/
│   ├── client.js          # Inngest client configuration
│   └── functions.js       # Inngest scheduled functions
├── checkUser.js           # User authentication checks
├── prisma.js              # Prisma client singleton
└── utils.js               # General utility functions (cn, etc.)
```

**Purpose:** Centralized utilities for database, authentication, and automation.

---

### `/prisma` - Database
Database schema and migrations using Prisma ORM.

```
prisma/
├── migrations/             # Database migration history
│   ├── 20250306102456_create_models/
│   ├── 20250308082824_change/
│   ├── 20250308085006_change/
│   ├── 20250308085451_change/
│   ├── 20250308102911_change/
│   ├── 20250308110314_update_industry_insight_schema/
│   ├── 20250312082358_cover_letter/
│   └── migration_lock.toml
└── schema.prisma           # Database schema definition
```

**Database Models:**
- **User** - User profiles with Clerk authentication
- **Assessment** - Interview assessments and quiz results
- **Resume** - User resumes with ATS scoring
- **CoverLetter** - Generated cover letters
- **IndustryInsight** - Industry trends and salary data

---

### `/public` - Static Assets
Public assets served directly.

```
public/
├── carvAi.png             # Logo
├── front.png              # Landing page image
└── logo.jpg               # Alternative logo
```

---

## ⚙️ Configuration Files

### Root Level Configuration

| File | Purpose |
|------|---------|
| `package.json` | Node.js dependencies and scripts |
| `package-lock.json` | Locked dependency versions |
| `next.config.mjs` | Next.js configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `postcss.config.mjs` | PostCSS configuration |
| `eslint.config.mjs` | ESLint linting rules |
| `jsconfig.json` | JavaScript compiler options |
| `components.json` | ShadCN components configuration |
| `middleware.js` | Next.js middleware (auth routing) |
| `.gitignore` | Git ignore patterns |
| `README.md` | Project documentation |

---

## 🔧 Technology Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** TailwindCSS 4 + ShadCN UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Theme:** next-themes (dark/light mode)

### Backend
- **Runtime:** Node.js
- **API:** Next.js Server Actions
- **Database:** PostgreSQL (NeonDB)
- **ORM:** Prisma
- **Authentication:** Clerk
- **Automation:** Inngest

### AI & Utilities
- **AI API:** Google Gemini
- **PDF Generation:** html2pdf.js, jsPDF
- **Document Processing:** docxtemplater, pdf-parse
- **Markdown Editor:** @uiw/react-md-editor

---

## 🚀 Key Features by Directory

| Feature | Location | Key Files |
|---------|----------|-----------|
| **Landing Page** | `/app/page.jsx` | `/components/hero.jsx`, `/components/features.jsx` |
| **Authentication** | `/app/(auth)/*` | Clerk integration |
| **Dashboard** | `/app/(main)/dashboard/*` | `dashboard-view.jsx` |
| **Resume Builder** | `/app/(main)/resume/*` | `resume-builder.jsx`, `/actions/resume.js` |
| **Cover Letters** | `/app/(main)/ai-cover-letter/*` | `cover-letter-generator.jsx` |
| **Mock Interviews** | `/app/(main)/interview/*` | `quiz.jsx`, `performance-charts.jsx` |
| **Industry Insights** | `/lib/inngest/functions.js` | Automated data updates |

---

## 📝 File Naming Conventions

- **Pages:** `page.jsx` (Next.js App Router convention)
- **Layouts:** `layout.js`
- **Components:** `kebab-case.jsx` (e.g., `resume-builder.jsx`)
- **Server Actions:** `kebab-case.js` (e.g., `cover-letter.js`)
- **Data Files:** `camelCase.js` (e.g., `industries.js`)
- **Utilities:** `camelCase.js` (e.g., `checkUser.js`)

---

## 🔐 Environment Variables

Required environment variables (create `.env.local`):

```env
# Database
DATABASE_URL="postgresql://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Google Gemini AI
GEMINI_API_KEY=""

# Inngest
INNGEST_EVENT_KEY=""
INNGEST_SIGNING_KEY=""
```

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/anjany06/carvAi.git
cd carvAi

# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma migrate dev

# Start development server
npm run dev
```

---

## 🧪 Development Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📊 Project Statistics

- **Total Routes:** 15+ pages
- **Components:** 30+ reusable components
- **Database Models:** 5 models
- **Server Actions:** 5 action files
- **UI Components:** 17 ShadCN components

---

## 🎯 Architecture Patterns

1. **Server Components by Default:** Leveraging Next.js 15 server components
2. **Client Components:** Marked with `"use client"` directive
3. **Server Actions:** Direct database operations without API routes
4. **Route Groups:** Organized routes without affecting URLs
5. **Private Components:** Feature-specific components in `_components/`
6. **Centralized Data:** Static content in `/data` directory
7. **Type Safety:** Zod schemas for validation

---

## 📚 Additional Resources

- **Live Demo:** [https://carv-ai.vercel.app](https://carv-ai.vercel.app)
- **Main README:** [README.md](./README.md)
- **Prisma Schema:** [prisma/schema.prisma](./prisma/schema.prisma)
- **Contributing:** See README.md for contribution guidelines

---

**Last Updated:** 2025-11-19  
**Maintainer:** Anjany Pandey ([@anjany06](https://github.com/anjany06))
