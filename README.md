# SnooSupply Dashboard

SnooSupply is a mobile-first dashboard built with React and TypeScript for restaurant managers to track operational metrics, active orders, and inventory levels. The current implementation is a frontend prototype created for a hackathon, focusing on building out the role-specific UI before connecting it to a backend. It gives managers a consolidated view of incoming invoices, low stock items, and live order statuses.

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Folder Structure](#folder-structure)
- [Important Code Concepts](#important-code-concepts)
- [Architectural Decisions](#architectural-decisions)
- [Data Model](#data-model)
- [Main User Flows](#main-user-flows)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Configuration Notes](#configuration-notes)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Learning Outcomes](#learning-outcomes)
- [Screenshots](#screenshots)
- [License](#license)

## About the Project

This project addresses the need for restaurant operators to have a single, mobile-optimized view of their daily operations. At this stage, the project is a strict frontend UI prototype. The application reads from hardcoded constants rather than an API, which is useful for validating the UI layout and testing the mobile-first design system before committing to a database schema.

The target users are store managers and inventory handlers. A user opening the app can see top-level KPIs (inflow/outflow), view which orders are currently in prep or out for delivery, and quickly check which stock items need reordering.

## Key Features

- **KPI Tracking**
  Displays high-level financial metrics (Total Inflow and Total Outflow) in a top-level grid using static data.

- **Active Orders View**
  Shows a list of ongoing orders grouped by type (e.g., Prep, Delivery). The UI maps over the `ACTIVE_ORDERS` constant to display order status, time elapsed, and assigned drivers.

- **Low Stock Alerts**
  Lists inventory items that are running low, complete with quantity, unit price, and a "Reorder All" call to action that currently calculates the total cost locally.

- **Invoice Management UI**
  Displays upcoming invoices and their due dates. Includes a "Pay All" button that sums up the total amounts defined in the `UPCOMING_INVOICES` constant.

- **Mobile Navigation**
  A persistent bottom navigation bar built for mobile screens, suggesting future routing between Home, Market, Inventory, and Orders tabs.

*(Note: The action buttons like "Pay All" and "Reorder All" are currently visual components and do not yet trigger backend mutations.)*

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | React / TypeScript | Defines components, types, and UI logic. |
| Styling | Tailwind CSS | Utility classes applied via a CDN script in `index.html` for rapid visual iteration. |
| Build Tool | Vite | Fast local development server and optimized production builds. |

## System Architecture

The current architecture is a simple client-side application. The entire UI is composed within `App.tsx`, which acts as the main shell and imports several specialized components. Data flows strictly downward from the `constants.ts` file directly into the components that need them.

```txt
App.tsx (Main Shell)
  ├─ Header
  ├─ KPIGrid
  ├─ ActiveOrders    <-- Reads ACTIVE_ORDERS
  ├─ LowStock        <-- Reads LOW_STOCK_ITEMS
  ├─ UpcomingInvoices <-- Reads UPCOMING_INVOICES
  └─ BottomNav
```

## Folder Structure

```txt
src/
  components/           # Reusable UI sections mapping to dashboard widgets
    ActiveOrders.tsx    # Renders the ongoing orders list
    BottomNav.tsx       # Mobile-first bottom navigation bar
    Header.tsx          # Top navigation and user avatar
    KPIGrid.tsx         # Renders top-level inflow/outflow metrics
    LowStock.tsx        # Lists inventory items below threshold
    UpcomingInvoices.tsx # Shows pending vendor payments
  App.tsx               # Main application layout grouping components
  constants.ts          # Hardcoded prototype data arrays
  types.ts              # TypeScript interfaces for domain objects
  index.html            # Main HTML entry point, includes Tailwind CDN
  vite.config.ts        # Build and environment variable configuration
```

## Important Code Concepts

- **Component Composition**: The main `App.tsx` file delegates rendering to specific domain components like `UpcomingInvoices` and `ActiveOrders`. This keeps the main file clean and makes it easy to add or remove dashboard widgets.
- **TypeScript Interfaces**: Data structures are strictly typed in `types.ts`. This ensures that when the app eventually connects to an API, the shape of the data (like `StockItem` and `Invoice`) is already defined and predictable.
- **Tailwind via CDN**: The project injects Tailwind CSS via a script tag in `index.html`. This is unconventional for a standard Vite React build (which typically processes Tailwind via PostCSS), but it works well for extremely fast hackathon-style prototyping without needing to configure build plugins.

## Architectural Decisions

- **Client-Side Hardcoded State**: The application currently relies on static data exported from `constants.ts`. Given the current hackathon/prototype stage, this decision makes sense. It allows developers to quickly build and verify the UI layout and component interactions without blocking on a backend or database setup.
- **Mobile-First Layout Constraints**: The root container in `App.tsx` is strictly constrained using `max-w-[480px]` and styled to look like a mobile device frame on desktop screens. This forces the design to remain mobile-focused, ensuring it looks correct on the target devices.
- **Vite Configuration for Environment Variables**: The `vite.config.ts` includes explicit definitions mapping `process.env.GEMINI_API_KEY` to the client. The code suggests the project is preparing to integrate AI features (like automated invoice parsing or order predictions), though this is not yet active in the components.

## Data Model

The domain models are defined as TypeScript interfaces in `types.ts`.

- **Order**
  Represents a live restaurant order. It includes fields for `id`, `type` (Prep or Delivery), `detail` (like table number or driver name), `time` elapsed, and styling fields (`icon`, `colorClass`).
- **StockItem**
  Represents an inventory item. It tracks the `id`, `name`, current `quantity`, descriptive `quantityLabel`, `price`, and an `image` URL.
- **Invoice**
  Represents a pending payment to a vendor. It holds the `id`, `vendor` name, `amount`, `dueDate`, and associated styling labels.

## Main User Flows

- **Viewing the Dashboard**
  A manager opens the application and immediately sees the `KPIGrid` showing current inflow and outflow. Below that, they can scroll through active orders to see if any deliveries are delayed.
- **Reviewing Inventory**
  The manager scrolls down to the `LowStock` section. They can review which items are depleted (e.g., Tomato Paste, Olive Oil) and see the total cost required to restock everything via the "Reorder All" button.
- **Managing Invoices**
  Further down the page, the manager reviews pending payments in the `UpcomingInvoices` section. The total amount due is calculated by the frontend and presented in the "Pay All" button.

*(Note: State mutations like actually paying invoices or submitting orders are not connected to an API yet).*

## Setup Instructions

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

### Environment Variables

The project looks for an API key in the environment, likely intended for future AI integrations based on the Vite config. Create a `.env` file in the root if you plan to use it:

```env
GEMINI_API_KEY=
```

### Running Locally

To start the development server:

```bash
npm run dev
```

### Building for Production

To build the static files:

```bash
npm run build
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Bundles the application for production |
| `npm run preview` | Previews the production build locally |

## Configuration Notes

- `vite.config.ts`: Configures the Vite React plugin, sets the dev server to host on `0.0.0.0` (port 3000), and handles environment variable injection for Gemini API keys.
- `tsconfig.json`: Standard TypeScript configuration for Vite, targeting ES2022 and ensuring strict module resolution.
- `index.html`: Contains the Tailwind configuration and script tags. Any global theme changes or custom colors (like the `primary` red) are defined here rather than in a separate `tailwind.config.js` file.

## Testing

Automated tests are not currently included in the repository. Future test implementation could cover:
- Component tests for rendering the widgets correctly given specific mock data.
- Utility tests for the sum calculations in the invoice and stock components.

## Deployment

No deployment-specific configuration was found. Since this is a Vite-based React frontend without a backend server, the resulting `dist` folder from `npm run build` can generally be deployed as a static site to platforms like Vercel, Netlify, or Cloudflare Pages.

## Future Improvements

- **Backend Integration**: Replace the static arrays in `constants.ts` with real API calls (e.g., to a Supabase or Express backend) using tools like React Query.
- **State Management**: Introduce context or a state library (like Zustand) to handle cross-component state, especially for features like "Reorder All" or "Pay All".
- **AI Integration**: Implement the Gemini API (already stubbed in Vite config) to add features like automatic invoice parsing or demand forecasting for low stock items.
- **Routing**: Replace the static `BottomNav` buttons with a real router (like React Router) to navigate between actual Home, Market, and Inventory pages.

## Learning Outcomes

This project demonstrates the ability to quickly translate a mobile-first UI design into a working React prototype. It shows an understanding of component composition, where a complex dashboard is broken down into clear, single-responsibility widgets. By defining strict TypeScript models for `Order`, `StockItem`, and `Invoice` early on, it sets a solid foundation for when the application is ready to be wired up to a persistent data layer.

## Screenshots

Screenshots can be added here to show the main dashboard layout and widget interactions.

## License

License information has not been specified yet.
