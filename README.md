# SARTH — Calls. Leads. Growth.

A lightweight sales CRM built for a two-person cold-calling team (Santhosh + Parth).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

The app seeds itself with 10 realistic sample businesses on first launch and persists all data to your browser's `localStorage` — no backend, API keys, or account needed.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — type-check and build a production bundle to `dist/`
- `npm run preview` — preview the production build locally

## Project structure

```
src/
  components/   Reusable UI building blocks
  pages/        Dashboard, Leads, Call Queue, Follow-ups, Analytics, Settings
  context/      LeadsContext (shared CRM state) and ToastContext
  hooks/        useLeads (all CRM logic), useLocalStorage
  utils/        storage.ts (the only file that touches localStorage) and dateUtils.ts
  types/        Lead and Call TypeScript interfaces
  data/         Sample seed data
```

## Swapping localStorage for a real database later

All persistence goes through `src/utils/storage.ts`. Every function there
(`getLeads`, `addLead`, `updateLead`, `deleteLead`, `addCall`, etc.) can be
rewritten to call Supabase/Firebase/Postgres instead of `localStorage`
without touching any component — the rest of the app only talks to
`useLeadsContext()`.

## Resetting data

Go to **Settings → Data** to export, import, clear, or fully reset your
leads at any time.
