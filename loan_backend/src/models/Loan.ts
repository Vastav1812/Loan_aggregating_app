export interface Loan {
    id: string;
    bankName: string;
    loanType: 'phone' | 'personal' | 'property';
    principal: number;
    paid: number;
    interestRate: number;
    emi: number;
    remaining: number;
}
