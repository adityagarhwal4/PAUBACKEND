import {Router} from 'express';
import { createRateOfInterest, getAllRateOfInterest } from '../controllers/rateOfInterest/rateOfInterestController';
const rateOfInterestRouter = Router();

rateOfInterestRouter
    .post('/', createRateOfInterest)
    .get('/', getAllRateOfInterest)

export default rateOfInterestRouter;