import { Request, Response } from 'express';
import Lead from '../models/lead.model';

export const createLead = async (req: Request, res: Response) => {
  try {
    const { parentName, phoneNumber, gradeLevel } = req.body;
    
    // Basic validation
    if (!parentName || !phoneNumber || !gradeLevel) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const lead = await Lead.create(req.body);
    res.status(201).json(lead);

    // Asynchronously send webhook notification
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_KEY || 'https://httpbin.org/post';
    if (webhookUrl && webhookUrl !== 'your_webhook_key_here') {
      const message = `
🌟 New Lead Alert 🌟
Parent: ${lead.parentName}
Phone: ${lead.phoneNumber}
Location: ${lead.location || 'N/A'}
Requirement: ${lead.gradeLevel} - ${lead.subjects?.join(', ') || 'N/A'}
      `.trim();
      
      const payload = {
        text: message,
        parentName: lead.parentName,
        phoneNumber: lead.phoneNumber,
        location: lead.location,
        gradeLevel: lead.gradeLevel,
        subjects: lead.subjects
      };
      
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.error('Webhook failed:', err.message));
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Error creating lead' });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error fetching leads' });
  }
};

export const getLeadById = async (req: Request, res: Response) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.status(200).json(lead);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error fetching lead' });
  }
};

export const updateLeadStatus = async (req: Request, res: Response) => {
  try {
    const { leadStatus } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { leadStatus },
      { new: true, runValidators: true }
    );
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.status(200).json(lead);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Error updating lead' });
  }
};
