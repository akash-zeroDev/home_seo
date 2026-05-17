'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center border border-slate-100 max-w-lg w-full"
      >
        <div className="w-20 h-20 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#1ABC9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0A192F] tracking-tight">Request Received!</h1>
        <p className="text-slate-600 mb-10 text-lg leading-relaxed">
          Thank you for choosing Delta Home Tuitions. Our academic coordinator will contact you shortly to finalize your child's personalized learning plan.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-[#0A192F] text-white font-bold rounded-full hover:bg-[#1ABC9C] hover:shadow-lg hover:shadow-[#1ABC9C]/30 transition-all text-lg"
        >
          Return to Home
        </Link>
      </motion.div>
    </main>
  );
}
