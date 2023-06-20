import {Router} from 'express';
import { createNewBudget, getAllbudget } from '../controllers/budget/budgetController';
const budgetRouter = Router();

budgetRouter
    .post('/add', createNewBudget)
    .get('/', getAllbudget)

export default budgetRouter;