import express from 'express';
import { connection } from './src/database/connection/dbConnect';
import {config} from 'dotenv';
import rateOfInterestRouter from './src/routes/rateOfIntersestRouter';
import budgetRouter from './src/routes/budgetRouter';
import designationRouter from './src/routes/designationRoutes';

config({path: './public/config.env'})

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTERS
app.use('/api/v1/rois', rateOfInterestRouter)
app.use('/api/v1/budgets', budgetRouter)
app.use("/api/v1/designation", designationRouter)

app.listen(process.env.PORT, () => {
    console.log("server stated");
    connection();
})