import { Router } from 'express';
import { createLead, getLeads, getLeadById, updateLeadStatus } from '../controllers/lead.controller';

const router = Router();

router.route('/')
  .post(createLead)
  .get(getLeads);

router.route('/:id')
  .get(getLeadById);

router.route('/:id/status')
  .patch(updateLeadStatus);

export default router;
