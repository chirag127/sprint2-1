

# Masterplan for Online Grocery Ordering

**Document Version:** 1.0
**Owner:** Chirag Singhal
**Status:** Final
**Prepared for:** augment code assistant
**Prepared by:** Chirag Singhal

---

## Project Overview
This document outlines the masterplan for creating a modern, full-stack "Online Grocery Ordering" web application using Next.js. The application will serve two primary roles: **Customers**, who can register, search for products, manage their cart, and view order history; and an **Administrator**, who manages the product catalog and has oversight of customer data. The original concept of a "menu-based console application" will be evolved into a graphical, intuitive, and responsive web interface, ensuring a user-friendly experience.

## Project Goals
*   **Develop a Secure User Management System:** Allow customers to register, log in, and manage their own profiles. Provide a secure, pre-defined login for the administrator.
*   **Implement Comprehensive Product Management:** Enable the administrator to perform full CRUD (Create, Read, Update, Delete) operations on the grocery product catalog.
*   **Create an Intuitive Shopping Experience:** Allow customers to easily search for products, add them to a shopping cart, and view their selections before placing an order.
*   **Provide Order History:** Enable customers to view a history of their past orders.
*   **Ensure Data Security and Integrity:** Build the application with security best practices, including password hashing and protection against SQL injection attacks, as specified in the initial requirements.

## Technical Stack
*   **Framework**: Next.js (for both frontend and backend API routes)
*   **Language**: TypeScript
*   **Frontend Styling**: Tailwind CSS for a modern, utility-first design system.
*   **Backend API**: Next.js API Routes
*   **Authentication**: NextAuth.js for robust and secure user session management.
*   **Database ORM**: Prisma for type-safe database access and migrations.
*   **Database**: PostgreSQL (hosted on Supabase for ease of use and scalability).
*   **Deployment**: Vercel for seamless, Git-based deployment and hosting.

## Project Scope
### In Scope
*   Full user authentication system (registration for customers, login for all roles).
*   Customer profile management (view and update personal details).
*   Administrator dashboard for product management (add, update, search, delete products).
*   Administrator feature to search for customer details by name.
*   Public-facing product catalog with search functionality.
*   A fully functional shopping cart (add, remove, update quantity).
*   A simulated checkout process that creates an order record in the database.
*   A "My Orders" page for customers to view their order history.
*   A clean, modern, and responsive user interface.

### Out of Scope
*   Real-world payment gateway integration (checkout will be simulated).
*   Real-time inventory tracking and management.
*   Complex analytics or reporting for the administrator.
*   Shipping and delivery logistics management.
*   Customer reviews and ratings for products.
*   Password recovery ("Forgot Password") functionality in this version.

## Functional Requirements

### Feature Area 1: Authentication & User Management
*   **FR1.1 (Login):** All users (Customers and Admin) must log in to access protected routes. The system will use a predefined admin account.
*   **FR1.2 (Customer Registration):** A new user can register for a customer account using their full name, a unique email address, and a secure password.
*   **FR1.3 (Password Security):** Passwords must be securely hashed upon registration and never stored in plaintext.
*   **FR1.4 (Customer Profile Update):** A logged-in customer can update their full name, email, password, address, and contact number.
*   **FR1.5 (Admin Customer Search):** A logged-in administrator can search for customers by their name. The search results will display all customer details except for the password.

### Feature Area 2: Product Catalog & Shopping
*   **FR2.1 (Product Search):** Any user (guest or logged-in) can search for products by name from the main catalog page.
*   **FR2.2 (Add to Cart):** A logged-in customer can add a product to their shopping cart.
*   **FR2.3 (View/Manage Cart):** A logged-in customer can view their cart, update the quantity of items, or remove items.
*   **FR2.4 (Checkout):** A logged-in customer can proceed to checkout, which will finalize the order and record it in the system.
*   **FR2.5 (View Order History):** A logged-in customer can view a list of their past orders, including details like order date, items, and total amount.

### Feature Area 3: Administrator Dashboard
*   **FR3.1 (Product Registration):** An admin can add a new product with a name, price, and initial quantity.
*   **FR3.2 (Product Update):** An admin can update the details (name, price, quantity) of an existing product.
*   **FR3.3 (Product Deletion):** An admin can delete a product from the catalog.

## Non-Functional Requirements (NFR)
*   **7.1. Performance:** The application should load quickly, with efficient database queries optimized by Prisma. Frontend rendering will be optimized by Next.js.
*   **7.2. Scalability:** The chosen stack (Vercel, Supabase, Next.js) is highly scalable and can handle significant user growth.
*   **7.3. Security:** All data transmission will be over HTTPS. Prisma will be used to prevent SQL injection vulnerabilities. Authentication will be managed by NextAuth.js to protect against common session-based attacks.
*   **7.4. Maintainability:** The code will be modular, well-documented, and follow the SOLID, DRY, and KISS principles to ensure it is easy to maintain and extend.

## Implementation Plan

### Phase 1: Setup & Foundation
*   **Task 1:** Initialize a new Next.js project with TypeScript and Tailwind CSS.
*   **Task 2:** Set up a new project on Supabase to get a PostgreSQL database instance.
*   **Task 3:** Install and configure Prisma. Connect it to the Supabase database.
*   **Task 4:** Define the initial database schema in `schema.prisma` for `User`, `Product`, `Order`, `OrderItem`, and `Account`/`Session` models for NextAuth.js.
*   **Task 5:** Install and configure NextAuth.js with the Credentials provider.
*   **Task 6:** Create the main layout component, including a header (with navigation) and a footer.

### Phase 2: Core Authentication & User Features
*   **Task 1:** Create the customer registration page (`/register`) and the corresponding API route (`/api/auth/register`) to create new users.
*   **Task 2:** Implement password hashing using `bcrypt` before saving a new user.
*   **Task 3:** Create the login page (`/login`) and configure NextAuth.js to handle authentication against the database.
*   **Task 4:** Implement the logic to seed the predefined administrator account from environment variables.
*   **Task 5:** Create a protected customer profile page (`/profile`) where users can view and update their details.
*   **Task 6:** Build the API endpoint for updating user information.

### Phase 3: Product Management (Admin Dashboard)
*   **Task 1:** Create a protected route group for the admin dashboard (e.g., `/admin/*`).
*   **Task 2:** Build the UI for listing all products with options to edit or delete.
*   **Task 3:** Create the form and API endpoint for adding a new product (`POST /api/products`).
*   **Task 4:** Create the form and API endpoint for updating an existing product (`PUT /api/products/[id]`).
*   **Task 5:** Implement the logic and API endpoint for deleting a product (`DELETE /api/products/[id]`).
*   **Task 6:** Build the UI for the customer search feature within the admin dashboard.

### Phase 4: Customer Shopping Experience
*   **Task 1:** Create the main product listing/search page that fetches and displays all products.
*   **Task 2:** Implement the "Add to Cart" functionality. For simplicity, the cart state can be managed on the client-side first using `Zustand` or `React Context`.
*   **Task 3:** Build the dedicated shopping cart page (`/cart`) where users can view items, change quantities, and see the total price.
*   **Task 4:** Implement a "Checkout" button that leads to a confirmation page.
*   **Task 5:** Create the API endpoint (`POST /api/orders`) that takes the cart data, creates an `Order` and associated `OrderItem` records in the database, and clears the cart.

### Phase 5: Testing, Deployment & Documentation
*   **Task 1:** Conduct thorough end-to-end testing of all user flows (customer registration to checkout, admin login to product deletion).
*   **Task 2:** Prepare environment variables for production in Vercel.
*   **Task 3:** Deploy the application to Vercel via Git integration.
*   **Task 4:** Write a comprehensive `README.md` file with setup instructions.
*   **Task 5:** Create a `CHANGELOG.md` file.

## API Endpoints (if applicable)
*   `POST /api/auth/register`: Handles new customer registration.
*   `GET /api/users/me`: Retrieves the current logged-in user's data.
*   `PUT /api/users/me`: Updates the current logged-in user's data.
*   `GET /api/products`: Fetches all products (for public view). Can accept a search query.
*   `POST /api/products`: (Admin only) Creates a new product.
*   `PUT /api/products/[id]`: (Admin only) Updates a product by ID.
*   `DELETE /api/products/[id]`: (Admin only) Deletes a product by ID.
*   `GET /api/admin/users`: (Admin only) Searches for customers by name.
*   `POST /api/orders`: (Customer only) Creates a new order from the cart.
*   `GET /api/orders`: (Customer only) Retrieves the order history for the logged-in customer.
*   `/api/auth/[...nextauth]`: All endpoints for session management, handled by NextAuth.js.

## Data Models (if applicable)
### `User`
*   `id`: String (cuid) - Primary Key
*   `name`: String
*   `email`: String - Unique
*   `emailVerified`: DateTime?
*   `password`: String - Hashed password
*   `address`: String?
*   `contactNumber`: String?
*   `role`: Enum (`CUSTOMER`, `ADMIN`) - Default: `CUSTOMER`
*   `orders`: Order[] - Relation to Order model
*   `accounts`: Account[] - For NextAuth.js
*   `sessions`: Session[] - For NextAuth.js

### `Product`
*   `id`: Int - Primary Key, Auto-increment
*   `name`: String
*   `price`: Decimal
*   `quantity`: Int
*   `createdAt`: DateTime - Default: now()

### `Order`
*   `id`: Int - Primary Key, Auto-increment
*   `orderDate`: DateTime - Default: now()
*   `totalAmount`: Decimal
*   `userId`: String - Foreign Key to User
*   `user`: User - Relation to User
*   `items`: OrderItem[] - Relation to OrderItem

### `OrderItem`
*   `id`: Int - Primary Key, Auto-increment
*   `quantity`: Int
*   `price`: Decimal - Price at the time of purchase
*   `orderId`: Int - Foreign Key to Order
*   `order`: Order - Relation to Order
*   `productId`: Int - Foreign Key to Product
*   `product`: Product - Relation to Product

## Project Structure
```
project-root/
├── components/         # Reusable React components (e.g., Button, Input, Layout)
│   ├── ui/
│   └── layout/
├── lib/                # Helper functions, Prisma client instance, etc.
│   ├── auth.ts
│   └── prisma.ts
├── pages/
│   ├── api/            # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth].ts
│   │   ├── products/
│   │   └── orders/
│   ├── admin/          # Admin-only pages
│   ├── cart.tsx
│   ├── index.tsx       # Homepage / Product listing
│   ├── login.tsx
│   ├── profile.tsx
│   ├── orders.tsx
│   └── _app.tsx
├── prisma/             # Prisma schema and migrations
│   └── schema.prisma
├── public/             # Static assets (images, fonts)
├── styles/             # Global styles
│   └── globals.css
├── .env.example        # Template for environment variables
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Environment Variables
```
# Required environment variables

# Database connection string from Supabase
DATABASE_URL="postgresql://..."

# A secret key for NextAuth.js to sign tokens
# Generate one here: https://generate-secret.vercel.app/
NEXTAUTH_SECRET="your_secret_here"

# The canonical URL of your production site
NEXTAUTH_URL="http://localhost:3000" # Change to production URL after deployment

# Predefined Administrator credentials
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="admin_strong_password"
```

## Testing Strategy
*   **Component Testing:** Use Jest and React Testing Library to test individual UI components in isolation.
*   **API Route Testing:** Use a library like `next-api-mocks` to test API endpoints' logic without a live server.
*   **End-to-End (E2E) Testing:** Use a framework like Cypress or Playwright to simulate full user journeys, such as "register -> login -> add to cart -> checkout". This will be the primary method for verifying functional requirements.

## Deployment Strategy
The application will be deployed to Vercel. A new Vercel project will be linked to the project's GitHub repository. Pushing to the `main` branch will trigger an automatic production deployment. Environment variables will be configured directly in the Vercel project settings for security.

## Maintenance Plan
*   **Dependencies:** Regularly update key dependencies (Next.js, Prisma, etc.) using `npm outdated` and `npm update` to incorporate security patches and new features.
*   **Monitoring:** Monitor application health, performance, and errors using the Vercel dashboard.
*   **Backups:** Database backups are managed automatically by the Supabase platform.

## Risks and Mitigations
| Risk | Impact | Likelihood | Mitigation |
| :--- | :--- | :--- | :--- |
| Scope Creep | Medium | Medium | Strictly adhere to the features defined in the "In Scope" section. New features will be logged for future enhancements. |
| Security Vulnerability | High | Low | Use Prisma ORM to prevent SQL injection. Use NextAuth.js for handling authentication securely. Regularly update dependencies. |
| Data Loss | High | Low | Utilize the automated backup and point-in-time recovery features provided by Supabase. |

## Future Enhancements
*   Integrate a real payment processor like Stripe or PayPal.
*   Implement a "Forgot Password" feature with email-based password reset.
*   Add a real-time inventory system to prevent ordering out-of-stock items.
*   Develop an advanced admin dashboard with sales analytics and charts.
*   Allow customers to write reviews and rate products.

## Development Guidelines
### Code Quality & Design Principles
*   Follow industry-standard coding best practices (clean code, modularity, error handling, security, scalability).
*   Apply SOLID, DRY (via abstraction), and KISS principles.
*   Design modular, reusable components/functions.
*   Optimize for code readability and maintainable structure.
*   Add concise, useful function-level comments.
*   Implement comprehensive error handling (try-catch, custom errors, async handling).

### Frontend Development
*   Provide modern, clean, professional, and intuitive UI designs.
*   Adhere to UI/UX principles (clarity, consistency, simplicity, feedback, accessibility/WCAG).
*   Use Tailwind CSS for styling.

### Data Handling & APIs
*   Integrate with real, live data sources and APIs as specified or implied.
*   Prohibit placeholder, mock, or dummy data/API responses in the final code.
*   Accept credentials/config exclusively via environment variables.
*   Use `.env` files for local secrets/config with a template `.env.example` file.
*   Centralize all API endpoint URLs in a single location (config file, constants module, or environment variables).
*   Never hardcode API endpoint URLs directly in service/component files.

### Asset Generation
*   Do not use placeholder images or icons.
*   Create necessary graphics as SVG and convert to PNG using the sharp library.
*   Write build scripts to handle asset generation.
*   Reference only the generated PNG files within the application code.

### Documentation Requirements
*   Create a comprehensive README.md including project overview, setup instructions, and other essential information.
*   Maintain a CHANGELOG.md to document changes using semantic versioning.
*   Document required API keys/credentials clearly.
*   Ensure all documentation is well-written, accurate, and reflects the final code.

## Tool Usage Instructions

### MCP Servers and Tools
*   Use the `context7` MCP server to gather contextual information about the current task, including relevant libraries, frameworks, and APIs.
*   Use the `clear_thought` MCP servers for various problem-solving approaches as needed.
*   Use the `date and time` MCP server to add the last updated date and time in UTC format to the `README.md` file.
*   Use the `websearch` tool to find information on the internet when needed.

### System & Environment Considerations
*   Target system: Windows 11 Home Single Language 23H2.
*   Use semicolon (`;`) as the command separator in PowerShell commands.
*   Use language-native path manipulation libraries (e.g., Node.js `path`).
*   Use package manager commands (`npm` or `yarn`) to add dependencies.

### Error Handling & Debugging
*   First attempt to resolve errors autonomously using available tools.
*   Perform systematic debugging: consult web resources, documentation, modify code, adjust configuration, retry.
*   Report back only if an insurmountable blocker persists after exhausting all self-correction efforts.

## Conclusion
This masterplan provides a complete and detailed roadmap for building the Online Grocery Ordering application. By following this plan, an AI code assistant can systematically implement all required features, resulting in a robust, secure, and scalable final product that meets all the specified user stories and technical requirements.