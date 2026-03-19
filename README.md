# Modern E-Commerce Web Application
A modern, responsive e-commerce web application built with React, Vite, and TypeScript.
Users can browse products, manage a cart and wishlist, and authenticate using demo accounts.

## Live Preview Link
https://e-commerce-webapp-riz3.vercel.app/

## Demo Accounts
Login using any DummyJSON user(https://dummyjson.com/users)

Example credentials:

 Username | Password |
|----------|----------|
| emilys | emilyspass |
| michaelw | michaelwpass |

## Features
- Browse the full product catalog  
- Search products using the search bar, with modal preview results and a “See all” button to navigate to the full search page  
- Sharable search URLs for easy linking and bookmarking  
- Add products to the shopping cart and adjust quantities on any page  
- Save products to a wishlist and browse wishlist page  
- Automatically calculated total and subtotal for checkout  
- JWT-based authentication with protected and public routes  
- Responsive design for both mobile and desktop  
- Skeleton loaders for a smooth loading experience  
- Toast notifications for user feedback  
- Pagination on all pages with ProductCard components (24 products per page)

## Tech Stack
- **Frontend:** React, TypeScript, Vite  
- **Styling:** Tailwind CSS  
- **State Management:** TanStack Query (Server State), Zustand (Client State)  
- **Routing:** React Router  
- **Forms & Validation:** Formik, Yup  
- **API & HTTP:** Axios, [DummyJSON](https://dummyjson.com)  
- **UI & Feedback:** React Toastify, React Icons, Lucide React  
- **Deployment:** Vercel

## Getting Started
git clone https://github.com/gholahan/e-commerce_webapp.git
- cd e-commerce_webapp
- npm install
- npm run dev

## Architecture
The project uses a feature-based folder structure — each feature contains its own components, skeletons, hooks, services, types, and store, keeping related code grouped together for scalability and maintainability.

```bash
src/
├─ app/
│  ├─ routes/
│  └─ axios.ts
│
├─ features/
│  ├─ auth/
│  ├─ products/
│  ├─ cart/
│  ├─ checkout/
│  └─ wishlist/
│
├─ layouts/
├─ pages/
├─ shared/
│
├─ App.tsx
├─ main.tsx
└─ index.css
```

## State Management
- **TanStack Query:** Handles server state, caching, and background updates  
- **Zustand:** Manages lightweight client-side global state

## Authentication
- JWT-based authentication with protected and public route guards.
- Axios request interceptors automatically attach access tokens.
- Axios response interceptors handle token expiration and refresh.

## API Reference
Powered by the [DummyJSON API](https://dummyjson.com/).

- [Full API documentation](https://dummyjson.com/docs)
- [List of demo users](https://dummyjson.com/users)

## UI Inspo
https://www.figma.com/design/PBL1XNC8OQgcQhElK6omzI/Full-E-Commerce-Website-UI-UX-Design
