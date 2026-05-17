import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans">
      {/* Simplified Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center shadow-sm z-50">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#1ABC9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3L22 20H2L12 3Z" />
          </svg>
          <div className="text-2xl font-black tracking-tight text-[#0A192F]">
            Delta<span className="text-[#1ABC9C]">Home Tuitions</span>
          </div>
        </Link>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10 pt-12">
        <div className="w-full mb-6 max-w-lg">
          <Link href="/" className="text-slate-500 hover:text-slate-800 transition-colors text-sm font-semibold flex items-center gap-2 w-fit">
            &larr; Back to Home
          </Link>
        </div>

        <div className="text-center mb-10 w-full max-w-lg px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-4 tracking-tight">
            Let's Find Your <span className="text-[#1ABC9C]">Tutor</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl">
            Tell us your requirements and we'll match you within 24 hours.
          </p>
        </div>

        <div className="w-full mb-12">
          <LeadForm />
        </div>
      </main>
    </div>
  );
}
