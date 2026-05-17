'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gradeLevel: '',
    subjects: [] as string[],
    location: '',
    parentName: '',
    studentName: '',
    phoneNumber: ''
  });
  const [otherSubject, setOtherSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      let finalSubjects = [...formData.subjects];
      if (finalSubjects.includes('Others')) {
        finalSubjects = finalSubjects.filter(s => s !== 'Others');
        if (otherSubject.trim() !== '') {
          finalSubjects.push(`Other: ${otherSubject.trim()}`);
        }
      }

      // Package payload to match backend schema without breaking it
      const payload = {
        gradeLevel: formData.gradeLevel,
        subjects: finalSubjects,
        location: formData.location,
        parentName: `${formData.parentName} (Student: ${formData.studentName})`,
        phoneNumber: formData.phoneNumber
      };

      // Save Lead to MongoDB & Trigger Webhook
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Submission failed');
      }
      
      router.push('/thank-you');
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden relative font-sans">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
        <motion.div 
          className="h-full bg-[#1ABC9C]"
          initial={{ width: 0 }}
          animate={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-2">What grade is your child in?</h2>
            <div className="space-y-3 relative">
              <select
                value={formData.gradeLevel}
                onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a grade...</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Drop-out">Drop-out</option>
                <option value="Competitive Exams">Competitive Exams</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button 
                onClick={handleNext} 
                disabled={!formData.gradeLevel}
                className="px-8 py-2.5 bg-[#1ABC9C] text-white font-semibold rounded-full disabled:opacity-50 hover:bg-[#16a085] hover:shadow-lg hover:shadow-[#1ABC9C]/30 transition-all"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-2">Which subjects? <span className="text-sm font-normal text-slate-500 block mt-1">(Select all that apply)</span></h2>
            <div className="grid grid-cols-2 gap-3">
              {['Math', 'Science', 'English', 'History', 'Language', 'Test Prep', 'Others'].map(subject => (
                <button
                  key={subject}
                  onClick={() => toggleSubject(subject)}
                  className={`p-4 rounded-2xl transition-all font-medium border ${
                    formData.subjects.includes(subject)
                    ? 'bg-[#1ABC9C] border-[#1ABC9C] text-white shadow-md shadow-[#1ABC9C]/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-[#1ABC9C] hover:text-[#1ABC9C]'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
            
            <AnimatePresence>
              {formData.subjects.includes('Others') && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Please specify subject(s)"
                    value={otherSubject}
                    onChange={(e) => setOtherSubject(e.target.value)}
                    className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8 items-center">
              <button onClick={handlePrev} className="px-5 py-2.5 text-slate-500 hover:text-[#0A192F] transition-colors font-medium">Back</button>
              <button 
                onClick={handleNext} 
                disabled={formData.subjects.length === 0 || (formData.subjects.includes('Others') && otherSubject.trim() === '')}
                className="px-8 py-2.5 bg-[#1ABC9C] text-white font-semibold rounded-full disabled:opacity-50 hover:bg-[#16a085] hover:shadow-lg hover:shadow-[#1ABC9C]/30 transition-all"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-2">Where are you located?</h2>
            <p className="text-slate-500 text-sm">This helps us match you with local tutors or best online matches.</p>
            <input
              type="text"
              placeholder="City or Zip Code"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg"
            />
            <div className="flex justify-between mt-8 items-center">
              <button onClick={handlePrev} className="px-5 py-2.5 text-slate-500 hover:text-[#0A192F] transition-colors font-medium">Back</button>
              <button 
                onClick={handleNext}
                disabled={!formData.location}
                className="px-8 py-2.5 bg-[#1ABC9C] text-white font-semibold rounded-full disabled:opacity-50 hover:bg-[#16a085] hover:shadow-lg hover:shadow-[#1ABC9C]/30 transition-all"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.form key="step4" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6 pt-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-2">How can we reach you?</h2>
            <p className="text-slate-500 text-sm">We'll reach out within 24 hours to discuss the best matches.</p>
            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}
            
            <div className="space-y-4">
              <input
                type="text"
                required
                placeholder="Parent Name"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg"
              />
              <input
                type="text"
                required
                placeholder="Student Name"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number (e.g. 9876543210)"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full p-4 md:p-5 rounded-2xl bg-slate-50 text-[#0A192F] placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C] transition-all text-lg"
              />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <button type="button" onClick={handlePrev} className="px-5 py-2.5 text-slate-500 hover:text-[#0A192F] transition-colors font-medium">Back</button>
              
              <button 
                type="submit"
                disabled={isSubmitting || !formData.parentName || !formData.studentName || !formData.phoneNumber}
                className="px-8 py-3 bg-[#1ABC9C] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#1ABC9C]/30 hover:bg-[#16a085] transition-all disabled:opacity-50 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Match'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
