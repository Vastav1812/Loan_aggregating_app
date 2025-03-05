import prisma from '../config/db';

export const getLoans = async () => {
    return await prisma.loan.findMany();
};

export const getLoanById = async (id: number) => {
    return await prisma.loan.findUnique({ where: { id } });
};

export const addLoan = async (loanData: {
    bankName: string;
    loanType: string;
    principal: number;
    paid: number;
    interestRate: number;
    emi: number;
}) => {
    return await prisma.loan.create({
        data: {
            bankName: loanData.bankName,
            loanType: loanData.loanType,
            principal: loanData.principal,
            paid: loanData.paid,
            interestRate: loanData.interestRate,
            emi: loanData.emi,
            remaining: loanData.principal - loanData.paid,
        },
    });
};

// ✅ Update Loan Function
export const updateLoan = async (id: number, paid?: number, interestRate?: number, emi?: number) => {
    const existingLoan = await prisma.loan.findUnique({ where: { id } });

    if (!existingLoan) {
        throw new Error(`Loan with ID ${id} not found`);
    }

    const updatedLoan = await prisma.loan.update({
        where: { id },
        data: {
            paid: paid ?? existingLoan.paid,
            interestRate: interestRate ?? existingLoan.interestRate,
            emi: emi ?? existingLoan.emi,
            remaining: (paid ?? existingLoan.paid) > existingLoan.principal
                ? 0
                : existingLoan.principal - (paid ?? existingLoan.paid),
        },
    });

    return updatedLoan;
};

// ✅ Delete Loan Function
export const deleteLoan = async (id: number) => {
    const existingLoan = await prisma.loan.findUnique({ where: { id } });

    if (!existingLoan) {
        throw new Error(`Loan with ID ${id} not found`);
    }

    await prisma.loan.delete({ where: { id } });

    return { message: `Loan with ID ${id} has been deleted.` };
};
