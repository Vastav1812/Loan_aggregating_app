import { Loan } from '../models/Loan';

export class LoanViewModel {
    static format(loan: Loan) {
        return {
            id: loan.id,
            bankName: loan.bankName,
            loanType: loan.loanType.toUpperCase(),
            principal: loan.principal,
            paid: loan.paid,
            interestRate: `${loan.interestRate}%`,
            emi: loan.emi,
            remaining: loan.remaining,
        };
    }
}
