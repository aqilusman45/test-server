import { Router } from 'express';
import SumRoutes from './sum';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/sum', SumRoutes);

// Export the base-router
export default router;
