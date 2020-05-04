import express from 'express';

import randomController from './random.controller';

const router = express.Router();

router.get('/', randomController.getAllData);
// router.post('/', randomController.postAData);

export default router;