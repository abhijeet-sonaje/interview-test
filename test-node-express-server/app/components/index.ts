import { Router } from 'express';
import dataRouter from './data/data.route';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/data', dataRouter);

// Export the base-router
export default router;