# Insomnia Course Nails

A full-stack e-learning platform for course distribution with integrated payment processing, order management, and transactional email notifications. The application provides a public-facing course landing page with Stripe checkout integration and a protected administrative dashboard for order tracking and course delivery management.

## Tech Stack

### Frontend
- **React** 18.3.1 — UI library
- **Vite** 5.4.10 — Build tool and development server
- **Tailwind CSS** 3.4.19 — Utility-first CSS framework
- **ESLint** 9.13.0 — Code linting and static analysis

### Backend
- **Express** 5.2.1 — HTTP server framework
- **Node.js** — Runtime environment
- **Prisma** 6.19.3 — ORM and query builder
- **Helmet** 8.1.0 — Security middleware for HTTP headers
- **Express-rate-limit** 8.5.1 — Rate limiting middleware
- **Cors** 2.8.6 — CORS middleware
- **Dotenv** 17.4.2 — Environment variable management
- **Nodemon** 3.1.14 — Development auto-reload (dev dependency)

### Database
- **PostgreSQL** — Primary database (configured via Prisma)

### External Services
- **Stripe** 22.1.1 — Payment processing and checkout sessions
- **Resend** 6.12.3 — Transactional email delivery
- **Stripe CLI** — Local webhook testing and event simulation

## Project Architecture

```
insomnia-webpage/
├── package.json                    # Root workspace configuration
├── README.md                       # Project documentation
│
├── backend/
│   ├── package.json               # Backend dependencies
│   ├── src/
│   │   ├── index.js               # Express server entry point
│   │   ├── config/
│   │   │   └── db.js              # Prisma client initialization
│   │   ├── controllers/
│   │   │   ├── checkout.js        # Stripe session creation logic
│   │   │   ├── webhook.js         # Stripe webhook event handling
│   │   │   └── admin.js           # Protected admin order retrieval
│   │   ├── routes/
│   │   │   ├── index.js           # Route aggregation
│   │   │   ├── checkout.js        # POST /api/checkout/*
│   │   │   ├── admin.js           # GET /api/admin/*
│   │   │   └── webhook.js         # POST /api/webhook
│   │   ├── middlewares/
│   │   │   ├── auth.js            # Admin password authentication
│   │   │   └── security.js        # Rate limiting configuration
│   │   ├── prisma/
│   │   │   ├── schema.prisma      # Database schema definition
│   │   │   └── migrations/        # Database migration history
│   │   └── utils/
│   │       └── emailService.js    # Resend email delivery logic
│   └── node_modules/              # Backend dependencies (gitignored)
│
├── frontend/
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── eslint.config.js           # ESLint configuration
│   ├── postcss.config.js          # PostCSS configuration
│   ├── index.html                 # HTML entry point
│   ├── src/
│   │   ├── main.jsx               # React entry point
│   │   ├── App.jsx                # Root component
│   │   ├── App.css                # Global styles
│   │   ├── index.css              # Base styles
│   │   ├── api/                   # API client utilities
│   │   ├── assets/
│   │   │   └── fonts/             # Custom font files
│   │   └── components/            # React components
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       ├── CourseIntro.jsx
│   │       ├── TargetAudience.jsx
│   │       ├── CourseOutcomes.jsx
│   │       ├── CourseProgram.jsx
│   │       ├── LearningProcess.jsx
│   │       ├── Tariffs.jsx
│   │       ├── Reviews.jsx
│   │       ├── AboutMe.jsx
│   │       ├── FAQ.jsx
│   │       ├── CallToAction.jsx
│   │       ├── CheckoutModal.jsx  # Stripe checkout form
│   │       ├── AdminDashboard.jsx # Protected admin panel
│   │       └── Footer.jsx
│   ├── public/                    # Static assets
│   ├── dist/                      # Build output (gitignored)
│   └── node_modules/              # Frontend dependencies (gitignored)
```

## Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string | `postgresql://user:password@localhost:5432/insomnia` |
| `STRIPE_SECRET_KEY` | Yes | Stripe API secret key for backend operations | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Yes | Stripe webhook signing secret from webhook endpoint | `whsec_...` |
| `RESEND_API_KEY` | Yes | Resend API key for transactional email delivery | `re_...` |
| `ADMIN_PASSWORD` | Yes | Admin dashboard authentication password | `your_secure_password` |
| `FRONTEND_URL` | Yes | Frontend application URL (CORS origin, redirect target) | `http://localhost:5173` or `https://insomnia.example.com` |
| `PORT` | No | Express server port (defaults to 3000) | `3000` |

**Setup Instructions:**
1. Create `.env` file in the `backend/` directory
2. Add all required variables with actual values (never commit `.env`)
3. Frontend environment variables use `VITE_` prefix in `.env.local`:
   - `VITE_API_URL` — Backend API base URL (defaults to `http://localhost:3000` in client code)

## Local Setup & Installation

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL 14+ (local or remote instance)
- Stripe account with API keys
- Resend account with API key
- Stripe CLI (for webhook testing)

### Installation Steps

**1. Clone Repository and Install Dependencies**
```bash
git clone <repository-url>
cd insomnia-webpage
npm run install:all
```

**2. Configure Environment Variables**

Backend configuration (`.env` in `backend/` directory):
```bash
cd backend
cp .env.example .env  # Or create manually
```

Add to `backend/.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/insomnia_db
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
RESEND_API_KEY=re_your_key
ADMIN_PASSWORD=your_secure_admin_password
FRONTEND_URL=http://localhost:5173
PORT=3000
```

Frontend configuration (`.env.local` in `frontend/` directory):
```bash
cd ../frontend
echo "VITE_API_URL=http://localhost:3000" > .env.local
```

**3. Initialize Database and Prisma**
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

The `prisma generate` command creates the Prisma Client JavaScript code. The `migrate dev` command applies pending migrations to your PostgreSQL database and creates the `Order` table.

**4. Start Development Servers**

Option A: Run both concurrently from root directory:
```bash
cd insomnia-webpage
npm run dev
```

Option B: Run separately in different terminals:
```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

Frontend will be available at `http://localhost:5173`
Backend will be available at `http://localhost:3000`

**5. Verify Setup**
- Backend health check: `curl http://localhost:3000/api`
- Frontend loads at `http://localhost:5173`
- Admin dashboard accessible at `http://localhost:5173/#/admin` or via UI button

## Stripe Webhook Testing

### Local Webhook Setup

**1. Install Stripe CLI**
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Linux (Ubuntu/Debian)
curl https://files.stripe.com/stripe-cli/install.sh | bash

# Or download binary from https://github.com/stripe/stripe-cli
```

**2. Authenticate Stripe CLI**
```bash
stripe login
# Follow browser login flow and confirm pairing code
```

**3. Forward Webhook Events to Local Server**

Open a dedicated terminal and run:
```bash
cd backend
stripe listen --forward-to localhost:3000/api/webhook
```

Output will display the webhook signing secret:
```
Ready! Your webhook signing secret is whsec_...
```

Copy the webhook signing secret to `backend/.env`:
```
STRIPE_WEBHOOK_SECRET=whsec_...
```

**4. Trigger Test Payment Event**

In another terminal, simulate a successful checkout payment:
```bash
stripe trigger checkout.session.completed
```

Expected behavior:
- `checkout.session.completed` event sent to local endpoint
- Backend receives and validates webhook signature
- Order status updated from `pending` to `paid` in PostgreSQL
- Customer receives course access email via Resend
- Backend logs confirmation: `Payment successful! Order {id} updated.`

**5. Verify Email Delivery**

Check the terminal running the backend server for log output:
```
Email sent to customer@example.com. ID: {email_id}
```

In production, email is delivered to the actual customer. In development, Resend sends emails from `onboarding@resend.dev` (development domain).

### Webhook Event Reference

| Event | Endpoint | Behavior |
|-------|----------|----------|
| `checkout.session.completed` | `POST /api/webhook` | Updates order status to `paid`, sends course access email, prevents duplicate processing |
| (Other events) | `POST /api/webhook` | Received but not processed (idempotency enforced) |

## API Endpoints

### Public Endpoints

| Method | Path | Description | Rate Limit |
|--------|------|-------------|-----------|
| `POST` | `/api/checkout/create-session` | Create Stripe checkout session | 5 requests per 15 minutes per IP |

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+48123456789"
}
```

**Response (Success 200):**
```json
{
  "url": "https://checkout.stripe.com/pay/cs_test_..."
}
```

**Response (Error 400):**
```json
{
  "error": "All fields are required"
}
```

**Response (Error 429):**
```json
{
  "error": "Too many requests from this IP."
}
```

### Protected Endpoints

| Method | Path | Description | Authentication | Rate Limit |
|--------|------|-------------|-----------------|-----------|
| `GET` | `/api/admin/orders` | Retrieve all orders sorted by creation date | Admin password header | 100 requests per 15 minutes per IP |

**Request Headers:**
```
x-admin-password: {ADMIN_PASSWORD}
```

**Response (Success 200):**
```json
[
  {
    "id": "uuid-string",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "+48123456789",
    "status": "paid",
    "createdAt": "2026-05-16T10:30:00Z"
  }
]
```

**Response (Error 403):**
```json
{
  "error": "Access denied"
}
```

### Webhook Endpoints

| Method | Path | Description | Signature Validation |
|--------|------|-------------|---------------------|
| `POST` | `/api/webhook` | Stripe webhook receiver | Stripe signature required (`stripe-signature` header) |

**Expected Stripe Webhook Event:**
```json
{
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_test_...",
      "customer_email": "customer@example.com",
      "client_reference_id": "order-uuid"
    }
  }
}
```

**Response (Success 200):**
```json
{
  "received": true
}
```

---

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install dependencies in both frontend and backend |
| `npm run dev` | Start both backend and frontend concurrently |
| `npm run dev:backend` | Start backend development server only |
| `npm run dev:frontend` | Start frontend development server only |
| `npm run build:frontend` | Build frontend for production (outputs to `frontend/dist/`) |
| `npm run deploy` | Build frontend and deploy to GitHub Pages |

## Database Schema

The application uses a single `Order` model:

```prisma
model Order {
  id              String   @id @default(uuid())
  customerName    String
  customerEmail   String
  customerPhone   String
  status          String   @default("pending")
  stripeSessionId String?  @unique
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

**Fields:**
- `id` — UUID primary key, auto-generated
- `customerName` — Customer full name
- `customerEmail` — Customer email address
- `customerPhone` — Customer phone number
- `status` — Order status: `pending` (initial) or `paid` (after successful payment)
- `stripeSessionId` — Reference to Stripe checkout session ID (unique constraint prevents duplicates)
- `createdAt` — Order creation timestamp
- `updatedAt` — Last modification timestamp

## Security Considerations

1. **Admin Authentication** — Uses timing-safe password comparison to prevent timing attacks
2. **Rate Limiting** — Checkout endpoint limited to 5 requests per 15 minutes per IP
3. **Helmet Middleware** — Enforces secure HTTP headers on all responses
4. **CORS** — Restricted to configured `FRONTEND_URL` only
5. **Stripe Webhook Signature Validation** — Verifies `stripe-signature` header before processing events
6. **Idempotency** — Webhook handler prevents duplicate order status updates (checks existing status before updating)
7. **Input Validation** — Email format and phone number validation in checkout controller
8. **Database** — PostgreSQL with Prisma ORM prevents SQL injection
9. **Environment Secrets** — All API keys loaded from environment variables (never hardcoded)

## Production Deployment Checklist

- [ ] Set `FRONTEND_URL` to production domain
- [ ] Use production Stripe keys (`sk_live_*`, `whsec_live_*`)
- [ ] Use production Resend API key
- [ ] Configure production PostgreSQL instance
- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Use strong, randomly-generated `ADMIN_PASSWORD`
- [ ] Enable HTTPS/TLS on both frontend and backend
- [ ] Configure DNS and domain routing
- [ ] Set up monitoring and error logging
- [ ] Enable Stripe webhook forwarding to production endpoint
- [ ] Test checkout flow end-to-end on production
- [ ] Verify email delivery from production domain
