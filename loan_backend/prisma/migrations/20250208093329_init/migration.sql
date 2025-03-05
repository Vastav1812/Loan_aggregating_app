-- CreateTable
CREATE TABLE "Loan" (
    "id" SERIAL NOT NULL,
    "bankName" TEXT NOT NULL,
    "loanType" TEXT NOT NULL,
    "principal" DOUBLE PRECISION NOT NULL,
    "paid" DOUBLE PRECISION NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "emi" DOUBLE PRECISION NOT NULL,
    "remaining" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);
