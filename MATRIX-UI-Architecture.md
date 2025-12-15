## Matrix TSL – UI Architecture & Tech Stack (Draft)

This document describes the high-level architecture and technology choices for the Matrix TSL UI template. It focuses on a pure web/PWA frontend (HTML, CSS, JavaScript with optional Svelte and Vite) that provides a consistent layout, component set, and theming system for all Matrix products. The template is backend-agnostic and does not include any hardware, native desktop, or server code, so engineers can plug it into their own projects and hosting environments as needed.

### 1. High-Level Goal

- **One UI codebase** that:
  - Runs as a **web app / PWA** in a browser, tablet, or touchscreen.
- **Consistent look and feel** across all Matrix TSL products.
- **Beginner-friendly implementation**: simple patterns, clear structure.

---

## 2. Core Scope: UI Template Only

### 2.1 Primary Answer (Template Scope)

- The **Matrix UI Template is a pure web UI / PWA template**:
  - It contains **only frontend code**: HTML, CSS, JavaScript (and optionally Svelte + Vite).
  - It defines the **layout, components, theming, and UX patterns**.
- Result:
  - The template stays **simple and reusable** for any project (web or desktop).
  - Engineers are free to:
    - Use it as a **web app / PWA only**, or
    - Integrate it into any other backend or shell when needed.

---

### 2.2 Web UI Template

Within this template repository:

- We assume **web-only / PWA context**:
  - Standard browser capabilities:
    - HTTP/HTTPS to remote servers or devices.
    - WebSockets to remote services.
    - Local simulation data (no special hardware).
  - Optional offline support using:
    - **Service Worker** (for caching).
    - **IndexedDB** (for simulation data), all in the browser.
- The template stack is:
  - **Frontend / UI**:
    - Vite (build tool)
    - Svelte *or* plain JavaScript
    - Tailwind CSS
    - DaisyUI (components + themes)
  - **Backend (if any during development)**:
    - Optional mock or remote Node.js/Express/Fastify server.
  - **Delivery**:
    - Web app + PWA features (installable, offline where possible).

The template does **not** include any backend, hardware, or native integration code. It focuses purely on the **frontend UI/UX**.

---

## 3. Agreed Tech Stack (Simplified View)

### 3.1 UI / Frontend

- **Build tool**: Vite
- **Framework**:
  - Start with **plain JavaScript + Vite**, or
  - Move to **Svelte + Vite** when comfortable.
- **Styling**:
  - Tailwind CSS
  - DaisyUI for themed components
- **Language**:
  - Start with **JavaScript**
  - Introduce **TypeScript gradually** later (for types and safety).

### 3.2 Backend / Hardware Layer

- **Out of scope for this template**:
  - Hardware access (USB, Serial, PLCs, cameras, etc.).
  - Local Node.js servers or native desktop hosting.
- **Assumption**:
  - The UI will communicate with **some backend API** (local or remote) over HTTP/WebSockets, but the implementation of that backend is **not part of this template**.

### 3.3 PWA / Offline

- **PWA features**:
  - App manifest (name, icons).
  - Service Worker for caching static assets.
  - IndexedDB for local/simulation data.
- **Adoption plan**:
  - Add PWA and offline **after** the basic UI is stable.

---

## 4. Theming & Design System (High-Level)

- **Goal**: Central theme system reusable across all products.
- **Tools**:
  - Tailwind configuration for design tokens:
    - Colors, spacing, border radius, typography.
  - DaisyUI themes configured to match Matrix TSL branding.
- **Rules**:
  - One base “Matrix Default” theme.
  - Optional **light**, **dark**, and **product-specific** overrides.
  - All components use these tokens, not hard-coded colors.

---

## 5. Summary of the Electron Decision

- The **Matrix UI Template** is a **web-only / PWA UI template**:
  - It ships with **no Electron or hardware code**.
  - It focuses purely on **UI/UX, layout, components, and theming**.
- **Electron/Node** is:
  - Added **later, per product**, by engineers who need hardware or desktop features.
  - Used as a **local backend** and optional **wrapper** around this UI.
- This gives:
  - **One shared UI template** for all products.
  - Flexibility to ship:
    - **Pure web/PWA apps** where hardware is not needed.
    - **Electron-based apps** where direct hardware access is required.



