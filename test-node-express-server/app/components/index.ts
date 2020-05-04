import { Router } from 'express';
import userRouter from './user/user.route';
import randomRouter from './random/random.route';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/user', userRouter);
router.use('/data', randomRouter);

// Export the base-router
export default router;