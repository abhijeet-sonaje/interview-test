import express from 'express';

import dataController from './data.controller';

const router = express.Router();

router.get('/', dataController.getAllData);
router.post('/', dataController.postAData);

export default router;