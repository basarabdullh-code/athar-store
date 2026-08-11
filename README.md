# ATHAR Store - Premium Arabic Digital Products E-Commerce Platform

متجر أثر - متجر متقدم لبيع المنتجات الرقمية

## 🎯 Overview

ATHAR Store is a production-ready, premium digital products e-commerce platform targeting the Arabic-speaking market. Built with Next.js, TypeScript, and Tailwind CSS, with a focus on conversion, accessibility, and beautiful RTL design.

### Key Features

- ✨ **Premium Design** - Black + cream + gold brand identity
- 🌍 **Arabic-First** - Full RTL support, Arabic typography
- 📱 **Mobile-First** - Optimized for mobile devices
- 🛒 **E-Commerce** - Complete product catalog, shopping cart, checkout
- 💳 **Payment Ready** - Modular payment architecture (mock + PayTabs support)
- 📥 **Digital Delivery** - Secure download system with expiring tokens
- 🔒 **Security First** - Server-side validation, PCI-compliant payment handling
- ⚡ **Performance** - Image optimization, code splitting, SSR/SSG
- ♿ **Accessible** - WCAG 2.1 compliance, semantic HTML
- 📊 **SEO-Friendly** - Structured data, meta tags, sitemaps
- 🏗️ **Scalable** - Modular architecture ready for expansion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
git clone https://github.com/basarabdullh-code/athar-store.git
cd athar-store
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/               # Next.js app directory
├── components/        # Reusable components
├── lib/              # Utilities & logic
├── types/            # TypeScript types
├── hooks/            # Custom hooks
└── styles/           # Global styles
```

## 🎨 Brand Colors

- **Primary**: #000000 (Deep Black)
- **Secondary**: #F5F1E8 (Warm Cream)
- **Accent**: #D4AF37 (Premium Gold)

## 🔐 Security

- ✅ Never store raw card information
- ✅ Server-side payment verification
- ✅ Environment variables for secrets
- ✅ Secure download tokens
- ✅ Input validation with Zod

## 📦 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js
- **Payment**: PayTabs (modular)
- **Storage**: Supabase Storage / AWS S3
- **Deployment**: Vercel

## 📄 Documentation

- [Architecture Plan](./docs/ARCHITECTURE.md)
- [Database Schema](./docs/DATABASE.md)
- [API Routes](./docs/API.md)
- [Payment Integration](./docs/PAYMENT.md)

## 🚀 Development

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run prisma:studio    # Database browser
npm run lint             # Run linter
```

## 📄 License

All rights reserved. Proprietary to ATHAR brand.

---

**Built with ❤️ for the Arabic-speaking market**

Last Updated: August 2026
