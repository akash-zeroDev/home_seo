import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  parentName: string;
  phoneNumber: string;
  gradeLevel: string;
  subjects: string[];
  location?: string;
  leadStatus: 'Pending' | 'Contacted' | 'Qualified' | 'Lost' | 'Converted';
}

const LeadSchema: Schema = new Schema({
  parentName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  subjects: { type: [String], default: [] },
  location: { type: String },
  leadStatus: {
    type: String,
    enum: ['Pending', 'Contacted', 'Qualified', 'Lost', 'Converted'],
    default: 'Pending',
  },
}, { timestamps: true });

export default mongoose.model<ILead>('Lead', LeadSchema);
