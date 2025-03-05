import { Request, Response } from 'express';
import { getLoans, getLoanById, addLoan, updateLoan, deleteLoan } from '../services/LoanService';

export const getAllLoans = async (req: Request, res: Response): Promise<void> => {
    try {
        const loans = await getLoans();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch loans' });
    }
};

export const getLoan = async (req: Request, res: Response): Promise<void> => {
    try {
        const loanId = parseInt(req.params.id);
        const loan = await getLoanById(loanId);

        if (!loan) {
            res.status(404).json({ error: `Loan with ID ${loanId} not found` });
            return;
        }

        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch loan' });
    }
};

export const createLoan = async (req: Request, res: Response): Promise<void> => {
    try {
        const { bankName, loanType, principal, paid, interestRate, emi } = req.body;

        if (!bankName || !loanType || !principal || !paid || !interestRate || !emi) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const newLoan = await addLoan({ bankName, loanType, principal, paid, interestRate, emi });
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create loan' });
    }
};

export const updateLoanController = async (req: Request, res: Response): Promise<void> => {
    try {
        const loanId = parseInt(req.params.id);
        const { paid, interestRate, emi } = req.body;

        if (!paid && !interestRate && !emi) {
            res.status(400).json({ error: 'No fields provided for update' });
            return;
        }

        const updatedLoan = await updateLoan(loanId, paid, interestRate, emi);

        res.json(updatedLoan);
    } catch (error) {
        res.status(500).json({ error: (error instanceof Error ? error.message : 'Failed to update loan') });
    }
};

export const deleteLoanController = async (req: Request, res: Response): Promise<void> => {
    try {
        const loanId = parseInt(req.params.id);

        if (!loanId) {
            res.status(400).json({ error: 'Invalid loan ID' });
            return;
        }

        const result = await deleteLoan(loanId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: (error instanceof Error ? error.message : 'Failed to delete loan') });
    }
};
