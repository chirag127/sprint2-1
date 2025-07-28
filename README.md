# Online Grocery Ordering

A modern, full-stack web application for online grocery ordering built with Next.js, Prisma, and NextAuth.js.

**Last Updated:** July 28, 2025

## Overview

This application serves two primary roles:

-   **Customers** can register, search for products, manage their cart, and view order history
-   **Administrators** can manage the product catalog and view customer data

## Features

### Customer Features

-   User registration and authentication
-   Profile management
-   Product browsing and searching
-   Shopping cart functionality
-   Order placement and history viewing

### Administrator Features

-   Secure admin dashboard
-   Product management (CRUD operations)
-   Customer information viewing
-   Inventory management

## Tech Stack

-   **Framework**: Next.js 15.4.4 (App Router)
-   **Language**: TypeScript
-   **Frontend Styling**: Tailwind CSS
-   **Backend API**: Next.js API Routes
-   **Authentication**: NextAuth.js
-   **Database ORM**: Prisma
-   **Database**: SQLite (development) / PostgreSQL (production)
-   **State Management**: Zustand (for cart)

## Prerequisites

-   Node.js 18.x or higher
-   npm or yarn
-   Git

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/chirag127/sprint2-1.git
    cd sprint2-1
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:

    ```
    # Database connection string
    DATABASE_URL="file:./prisma/dev.db"

    # NextAuth.js configuration
    NEXTAUTH_SECRET="your-super-secret-key-here-change-in-production"
    NEXTAUTH_URL="http://localhost:3000"

    # Admin credentials
    ADMIN_EMAIL="admin@example.com"
    ADMIN_PASSWORD="admin123"
    ```

4. Set up the database:

    ```bash
    npm run db:generate
    npm run db:push
    npm run db:seed
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
project-root/
├── components/         # Reusable React components
│   ├── ui/             # UI components (Button, Input, Card, etc.)
│   └── layout/         # Layout components (Header, Footer, Layout)
├── lib/                # Helper functions, Prisma client, auth config
│   ├── auth.ts         # NextAuth.js configuration
│   ├── prisma.ts       # Prisma client instance
│   ├── store.ts        # Zustand store for cart
│   └── utils.ts        # Utility functions
├── prisma/             # Prisma schema and migrations
│   ├── schema.prisma   # Database schema
│   └── seed.ts         # Seed script for initial data
├── public/             # Static assets
├── src/                # Application source code
│   └── app/            # Next.js App Router
│       ├── admin/      # Admin dashboard pages
│       ├── api/        # API routes
│       ├── cart/       # Shopping cart page
│       ├── login/      # Login page
│       ├── orders/     # Order history page
│       ├── profile/    # User profile page
│       ├── register/   # Registration page
│       ├── globals.css # Global styles
│       ├── layout.tsx  # Root layout
│       └── page.tsx    # Homepage
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## API Endpoints

### Authentication

-   `POST /api/auth/register`: Register a new customer
-   `GET/POST /api/auth/[...nextauth]`: NextAuth.js authentication endpoints

### Users

-   `GET /api/users/me`: Get current user profile
-   `PUT /api/users/me`: Update current user profile

### Products

-   `GET /api/products`: Get all products (with optional search)
-   `POST /api/products`: Create a new product (admin only)
-   `GET /api/products/[id]`: Get a specific product
-   `PUT /api/products/[id]`: Update a product (admin only)
-   `DELETE /api/products/[id]`: Delete a product (admin only)

### Orders

-   `GET /api/orders`: Get current user's orders
-   `POST /api/orders`: Create a new order

### Admin

-   `GET /api/admin/users`: Get all customers (admin only)

## User Roles

### Customer

-   Can register and log in
-   Can browse and search products
-   Can add products to cart
-   Can place orders
-   Can view order history
-   Can update their profile

### Administrator

-   Pre-defined account (set via environment variables)
-   Can manage products (add, edit, delete)
-   Can view customer information
-   Has access to the admin dashboard

## Demo Accounts

### Admin

-   Email: admin@example.com
-   Password: admin123

### Customer

-   Email: customer@example.com
-   Password: customer123

## Development Scripts

-   `npm run dev`: Start the development server
-   `npm run build`: Build the application for production
-   `npm run start`: Start the production server
-   `npm run lint`: Run ESLint
-   `npm run db:generate`: Generate Prisma client
-   `npm run db:push`: Push schema changes to the database
-   `npm run db:seed`: Seed the database with initial data
-   `npm run db:studio`: Open Prisma Studio to view/edit data

## Deployment

### Vercel Deployment

1. Create a Vercel account and connect your GitHub repository
2. Configure the environment variables in the Vercel dashboard
3. Deploy the application

### Database Setup for Production

1. Create a PostgreSQL database (e.g., on Supabase)
2. Update the `DATABASE_URL` environment variable with your PostgreSQL connection string
3. Run the database migrations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Chirag Singhal (GitHub: [chirag127](https://github.com/chirag127))
