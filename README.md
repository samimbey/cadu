# Cadu — Healthcare Finance Marketplace

Cadu helps patients compare financing options for healthcare procedures — all in one place. Users answer a few quick questions and get matched with top lenders offering medical loans, payment plans, and 0% APR offers.

**Live site:** [cadunow.com](https://cadunow.com)

---

## What It Does

- **Financing Marketplace** — Compare lenders side-by-side for dental, cosmetic, vision, fertility, and other procedures
- **Smart Onboarding** — Multi-step flow that collects procedure type, credit range, and income to surface relevant options
- **Financial Calculators** — Loan payment, affordability, and APR impact tools
- **SEO Landing Pages** — Procedure-specific pages optimized for organic search
- **Contact & Partnerships** — Inquiry form routing to the right team

---

## Tech Stack

- **Frontend:** React + Tailwind CSS + shadcn/ui
- **Platform:** [Base44](https://base44.com) (backend, database, auth, functions)
- **Animations:** Framer Motion
- **Email:** Resend
- **Hosting:** Base44 + Custom Domain (cadunow.com)

---

## Development

This project is built and managed on Base44. Code changes made here sync automatically to the Base44 Builder, and vice versa.

### Run locally

```bash
git clone <repo-url>
cd cadu
npm install
Create a .env.local file:

VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url
npm run dev
Deploy
Push to main — changes sync automatically to Base44 and go live.

Project Structure
pages/          # Route-level page components
components/     # Reusable UI components
  marketplace/  # Lender cards, filters, comparison modal
  onboarding/   # Multi-step form steps
  calculators/  # Financial calculator tools
functions/      # Backend serverless functions (Deno)
entities/       # Database schema definitions
Contact
For partnerships or support: cadunow.com/contact
