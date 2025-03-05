# Loan Aggregation App 💰

A centralized platform to manage all your loans—from credit cards and phone EMIs to property loans—in one place. Built with **TypeScript**, **React**, and **Node.js**, this app lets you track repayment schedules, make payments, and receive alerts for due dates.

![Demo Screenshot](./public/screenshot.png) <!-- Add a screenshot later -->

## Features ✨
- **Aggregate Loans**: View all loans (personal, mortgage, credit card, etc.) in a single dashboard.
- **Unified Payments**: Pay EMIs for any loan directly through integrated payment gateways (Stripe/Razorpay).
- **Repayment Alerts**: Get real-time notifications for upcoming due dates via email/Firebase Cloud Messaging.
- **Progress Tracking**: Visualize how much you’ve repaid and how much is left for each loan.
- **Secure Authentication**: JWT-based user authentication with OAuth 2.0 support.

## Tech Stack 🛠️
- **Frontend**: React + TypeScript, Redux Toolkit, Material-UI
- **Backend**: Node.js + Express.js, TypeScript, PostgreSQL
- **APIs**: Stripe/Razorpay (payments), Plaid (financial data), Firebase (notifications)
- **Database**: PostgreSQL with TypeORM
- **Deployment**: Docker, AWS EC2 (backend), Vercel (frontend)
- **Testing**: Jest (unit/integration), React Testing Library

## Prerequisites 📋
- Node.js ≥ v18
- PostgreSQL ≥ v15
- Stripe/Razorpay account for payments
- Firebase account for notifications

## Installation 🚀

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/loan-aggregation-app.git
cd loan-aggregation-app
