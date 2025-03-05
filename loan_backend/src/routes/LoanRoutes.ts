import { Router } from 'express';
import * as LoanController from '../controllers/LoanController';

const router = Router();

router.get('/', LoanController.getAllLoans);
router.get('/:id', LoanController.getLoan);
router.post('/', LoanController.createLoan);
router.put('/:id', LoanController.updateLoanController);
router.delete('/:id', LoanController.deleteLoanController);

export default router;
